const express = require('express');
const cors = require('cors');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Configure Environment Variables & PORT
const PORT = process.env.PORT || 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

// Initialize Gemini API client if key is available
let genAI = null;
if (GEMINI_API_KEY) {
  genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  console.log('Gemini API initialized with provided key.');
} else {
  console.log('No GEMINI_API_KEY detected. Running in mock fallback mode.');
}

const app = express();
app.use(cors());
app.use(express.json());

// Serve static frontend files from current directory
app.use(express.static(path.join(__dirname)));

// Configure Multer for memory upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// --- HELPER: Call Gemini or Fallback ---
async function callGeminiJSON(prompt, systemInstruction = '', mockCallback) {
  if (!genAI) {
    return mockCallback();
  }

  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: { responseMimeType: 'application/json' },
      systemInstruction: systemInstruction
    });

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return JSON.parse(text);
  } catch (error) {
    console.error('Gemini API Error:', error);
    console.log('Falling back to mock response due to error.');
    return mockCallback();
  }
}

// ==========================================================================
// API Endpoints
// ==========================================================================

// 1. POST /api/analyze - Upload & Analyze Resume
app.post('/api/analyze', upload.single('resumeFile'), async (req, res) => {
  try {
    const githubUrl = req.body.githubUrl || '';
    const linkedinUrl = req.body.linkedinUrl || '';
    const targetRole = req.body.targetRole || 'Fullstack Developer';

    let resumeText = 'No resume file uploaded.';
    if (req.file) {
      if (req.file.mimetype === 'application/pdf') {
        const parsedPdf = await pdfParse(req.file.buffer);
        resumeText = parsedPdf.text;
      } else {
        resumeText = req.file.buffer.toString('utf-8');
      }
    }

    console.log(`Analyzing resume for role: ${targetRole}`);

    const systemInstruction = `You are a world-class recruiter and career coach. Your task is to analyze a candidate's resume, target role, and optional profile links, and output a detailed JSON analysis. 
You must strictly return JSON matching the specified structure. Do not wrap the JSON in markdown code blocks. Make the scores realistic but constructive. Ensure all string arrays and details relate logically to the candidate's parsed tech stack and target role.`;

    const prompt = `
Analyze the following candidate assets:
- Target Role: "${targetRole}"
- GitHub URL: "${githubUrl}"
- LinkedIn URL: "${linkedinUrl}"
- Resume Content:
"""
${resumeText}
"""

Provide the analysis as a JSON object with this exact schema:
{
  "name": "Candidate Name (extracted or guess)",
  "role": "Calculated job role title matching target",
  "healthIndex": 75, // integer 0-100, aggregate average of scores below
  "atsScore": 72,    // integer 0-100
  "jobMatchScore": 80, // integer 0-100
  "githubScore": 70,   // integer 0-100
  "linkedinScore": 65, // integer 0-100
  "interviewReady": 60, // integer 0-100
  "rejectionRisk": 25,  // integer 0-100
  
  "strengths": ["Strength 1 (relevant to stack)", "Strength 2", "Strength 3"],
  "weaknesses": ["Weakness 1 (relevant to stack/role)", "Weakness 2", "Weakness 3"],
  
  "aiPercent": "45%", // percentage string estimate of AI writing in resume
  "aiSections": "Summary, Projects (comma separated list of suspect sections)",
  "aiRecommendation": "Concrete advice to write more authentically",
  
  "missingAtsKeywords": ["Keyword1", "Keyword2", "Keyword3", "Keyword4"], // missing industry keywords for the target role
  
  "originalSummary": "Extracted professional summary or short bio",
  "improvedSummary": {
    "faang": "An optimized, high-impact summary focusing on scale, metrics, and achievements suitable for large tech firms.",
    "startup": "An optimized summary focusing on velocity, product ownership, dynamic libraries, and rapid development.",
    "internship": "An optimized summary highlighting academic credentials, fast learning, passion projects, and core fundamentals."
  },
  
  "recommendedRoles": [
    { "role": "Primary Target Role", "match": "95%" },
    { "role": "Secondary Match Role", "match": "85%" },
    { "role": "Tertiary Match Role", "match": "75%" }
  ],
  
  "githubAudit": {
    "commitRate": "High (Active) or Moderate or Low",
    "readmeQuality": "Good or Poor or Missing",
    "diversity": "Tech stack focus summary",
    "bullets": [
      "Critique or compliment 1 about commits, structure or code quality",
      "Critique or compliment 2",
      "Critique or compliment 3"
    ]
  },
  
  "linkedinAudit": {
    "headline": "Strong or Medium or Weak",
    "aboutSection": "Detailed or Unquantified or Empty",
    "featured": "Count of items linked",
    "bullets": [
      "Critique 1 on keywords, headline, experience or featured sections",
      "Critique 2",
      "Critique 3"
    ]
  },
  
  "projects": [
    {
      "name": "Project Name 1",
      "tech": "Tech stack used",
      "complexity": "6/10",
      "innovation": "5/10",
      "hiringVal": "6/10",
      "advice": "Specific upgrade recommendation for this project"
    },
    {
      "name": "Project Name 2",
      "tech": "Tech stack used",
      "complexity": "7/10",
      "innovation": "6/10",
      "hiringVal": "7/10",
      "advice": "Upgrade recommendation for this project"
    }
  ],
  
  "interviewProbs": [
    { "topic": "Likely interview topic 1", "prob": "90% Chance" },
    { "topic": "Likely interview topic 2", "prob": "80% Chance" },
    { "topic": "Likely interview topic 3", "prob": "70% Chance" }
  ],
  
  "interviewQuestions": {
    "technical": [
      "Technical question 1 related to resume stack",
      "Technical question 2",
      "Technical question 3"
    ],
    "projects": [
      "Project deep-dive question 1",
      "Project deep-dive question 2"
    ],
    "hr": [
      "Behavioral / HR question 1",
      "Behavioral / HR question 2"
    ]
  },
  
  "timeline": {
    "day30": ["Day 1-30 goal 1", "Day 1-30 goal 2", "Day 1-30 goal 3"],
    "day60": ["Day 31-60 goal 1", "Day 31-60 goal 2", "Day 31-60 goal 3"],
    "day90": ["Day 61-90 goal 1", "Day 61-90 goal 2", "Day 61-90 goal 3"]
  }
}`;

    const mockCallback = () => {
      // Mock analyzer based on target role keywords
      const isFront = targetRole.toLowerCase().includes('front') || targetRole.toLowerCase().includes('ui') || targetRole.toLowerCase().includes('design');
      const isSde = targetRole.toLowerCase().includes('sde') || targetRole.toLowerCase().includes('intern') || targetRole.toLowerCase().includes('algorithm');
      
      if (isFront) {
        return {
          name: "Sarah Jenkins (Mock)",
          role: "Frontend Developer",
          healthIndex: 82,
          atsScore: 78,
          jobMatchScore: 88,
          githubScore: 84,
          linkedinScore: 75,
          interviewReady: 68,
          rejectionRisk: 14,
          strengths: ["Modern CSS/Tailwind skills", "Exceptional UI portfolio", "Responsive UI implementation"],
          weaknesses: ["Weak Backend awareness", "No unit testing (Jest/Cypress)", "No deployment automation"],
          aiPercent: "35%",
          aiSections: "Summary Only",
          aiRecommendation: "Make summary sound more active and specify state management tools.",
          missingAtsKeywords: ["Webpack", "Unit Testing", "Jest", "TypeScript", "CI/CD"],
          originalSummary: "Frontend Developer experienced in CSS, HTML, and React. Built websites for client projects. Interested in styling animations.",
          improvedSummary: {
            faang: "Frontend Engineer specialized in React.js and TypeScript, building modular UI/UX architectures. Implemented optimized state workflows, reducing page load times by 40%.",
            startup: "Frontend Developer who built dynamic landing pages converting 15% better. Engineered custom design systems and micro-interactions utilizing Tailwind CSS and Framer Motion.",
            internship: "Computer Science student specializing in responsive frontend UI. Built React components with 100% WCAG accessibility compliance and integrated REST data models."
          },
          recommendedRoles: [
            { role: "Frontend Engineer", match: "98%" },
            { role: "UI/UX Developer", match: "91%" },
            { role: "Technical Writer", match: "84%" }
          ],
          githubAudit: {
            commitRate: "Steady (Normal)",
            readmeQuality: "Excellent Guides",
            diversity: "JS/HTML/CSS Focus",
            bullets: [
              "Clean, interactive documentation pages for UI component repos",
              "Lacks typescript integrations in 80% of projects",
              "No continuous deployment (Vercel/Netlify auto-hooks)"
            ]
          },
          linkedinAudit: {
            headline: "Strong (Quantified)",
            aboutSection: "Clear Summary",
            featured: "2 Items Linked",
            bullets: [
              "Strong landing headline: 'React Frontend Developer | UI Specialist'",
              "Lacks direct skill assessments or recommendations",
              "Missing detailed bullet achievements in past internships"
            ]
          },
          projects: [
            {
              name: "SaaS Dashboard Theme",
              tech: "React, Tailwind CSS, Chart.js",
              complexity: "6/10",
              innovation: "7/10",
              hiringVal: "7/10",
              advice: "Visual aesthetics are superb. Improve technical grade by converting the application codebase to TypeScript and adding Jest unit tests for state actions."
            },
            {
              name: "Personal Portfolio Site",
              tech: "HTML, Vanilla CSS, JS",
              complexity: "3/10",
              innovation: "5/10",
              hiringVal: "4/10",
              advice: "Add framer-motion animations and structural accessibility audits (Lighthouse/WCAG compliance) to demonstrate industry-standard front-end engineering."
            }
          ],
          interviewProbs: [
            { topic: "CSS Grid, Flexbox & Layouts", prob: "98% Chance" },
            { topic: "React State Management (Zustand)", prob: "90% Chance" },
            { topic: "Web Performance & Hydration", prob: "80% Chance" }
          ],
          interviewQuestions: {
            technical: [
              "What is the difference between client-side rendering (CSR) and server-side rendering (SSR)?",
              "How does event delegation work in JavaScript?",
              "Explain React's useEffect dependency array and how to avoid infinite re-render loops."
            ],
            projects: [
              "In your SaaS Dashboard, how did you implement the dark mode switcher without flickering on initial load?",
              "How do you measure Web Vitals on your personal portfolio?"
            ],
            hr: [
              "Tell me about a time you had to adapt to a sudden change in design layouts right before deployment.",
              "What is your approach to collaborating with UX designers?"
            ]
          },
          timeline: {
            day30: ["Migrate key portfolio repositories to TypeScript.", "Add Vitest/Jest unit testing structures to React projects.", "Setup automated Vercel/Netlify preview build pipelines."],
            day60: ["Optimize web vital load metrics (Lighthouse score 95+).", "Integrate Storybook systems into Github portfolios.", "Rewrite resume summary using optimized FAANG terms."],
            day90: ["Complete mock interviews centered on JS performance algorithms.", "Apply to high match design roles.", "Network with lead frontend engineers on LinkedIn."]
          }
        };
      } else if (isSde) {
        return {
          name: "Alex Rivera (Mock)",
          role: "SDE Intern",
          healthIndex: 68,
          atsScore: 65,
          jobMatchScore: 72,
          githubScore: 68,
          linkedinScore: 60,
          interviewReady: 55,
          rejectionRisk: 38,
          strengths: ["Strong DSA foundation", "CS Degree student", "Java/C++ syntax knowledge"],
          weaknesses: ["No fullstack experience", "Zero cloud/deployment knowledge", "Under-populated LinkedIn"],
          aiPercent: "82%",
          aiSections: "Summary, Experience, Projects",
          aiRecommendation: "Highly flagged by AI scanners. Re-author completely using manual active descriptors.",
          missingAtsKeywords: ["System Design", "Cloud Hosting", "APIs", "Database Indexing", "CI/CD"],
          originalSummary: "Computer Science student looking for SDE internships. Good at algorithms and coding in Java and C++.",
          improvedSummary: {
            faang: "CS candidate with strong foundations in Data Structures and Algorithms (Leetcoder: 300+ solved). Experienced building backend REST APIs in Java/Spring Boot.",
            startup: "Agile CS student with experience deploying containerized Java microservices. Solved 300+ Algorithmic challenges and optimized SQL indices.",
            internship: "CS Sophomore with coursework in Algorithms and Databases. Collaborated on GitHub to build REST endpoints and automate API tests."
          },
          recommendedRoles: [
            { role: "SDE Intern", match: "95%" },
            { role: "Backend Developer", match: "82%" },
            { role: "QA Engineer", match: "78%" }
          ],
          githubAudit: {
            commitRate: "Low (Intermittent)",
            readmeQuality: "Missing/Empty READMEs",
            diversity: "DSA solutions only",
            bullets: [
              "Repositories consist mostly of competitive programming files",
              "Lacks complete project application repositories",
              "README files are automatically generated or empty"
            ]
          },
          linkedinAudit: {
            headline: "Weak Profile Hook",
            aboutSection: "Unfinished Summary",
            featured: "0 Items Found",
            bullets: [
              "Headline is a default: 'Student at University'",
              "No skills listed in profile, preventing recruiters from search discovery",
              "Missing descriptions for projects or university activities"
            ]
          },
          projects: [
            {
              name: "Sorting Visualizer",
              tech: "HTML, CSS, JavaScript",
              complexity: "5/10",
              innovation: "4/10",
              hiringVal: "5/10",
              advice: "A common university project. Upgrade by adding threading visualizations, comparing complexity statistics (O(n log n) vs O(n^2)) live, and compiling to WebAssembly."
            },
            {
              name: "Database File Indexer",
              tech: "Java",
              complexity: "6/10",
              innovation: "5/10",
              hiringVal: "6/10",
              advice: "Solid backend showcase. Connect this file system database to a web client using Spring Boot. Deploy the backend app inside a Docker container."
            }
          ],
          interviewProbs: [
            { topic: "Big-O Notation & Complexity", prob: "99% Chance" },
            { topic: "Arrays, Lists, Maps & Trees", prob: "95% Chance" },
            { topic: "Sorting & Searching Algorithms", prob: "90% Chance" }
          ],
          interviewQuestions: {
            technical: [
              "How would you reverse a singly linked list in-place? What is the time complexity?",
              "Explain the difference between a Hashmap and a Treemap in Java.",
              "What is a binary search tree, and how does its worst-case search complexity happen?"
            ],
            projects: [
              "In your Sorting Visualizer, how did you handle asynchronous delays to show the comparisons live?",
              "How would you scale your File Indexer to work on files larger than local memory (RAM)?"
            ],
            hr: [
              "Why are you interested in a software engineering internship? What do you hope to learn?",
              "Describe a difficult debugging challenge you faced. How did you resolve it?"
            ]
          },
          timeline: {
            day30: ["Solve 50+ medium DSA challenges on Leetcode.", "Rebuild competitive coding repos to look like clean developer modules.", "Write a detailed README for the Sorting Visualizer."],
            day60: ["Build a backend REST API project using Java Spring Boot or Node.", "Containerize backend projects with Docker.", "Add 15 key technical skills to LinkedIn profile."],
            day90: ["Simulate 5 HR and 5 technical mock interview sessions.", "Apply to SDE Internships via early portal applications.", "Engage with recruiters on early tech career forums."]
          }
        };
      } else {
        return {
          name: "John Doe (Mock)",
          role: "MERN Developer",
          healthIndex: 74,
          atsScore: 72,
          jobMatchScore: 81,
          githubScore: 76,
          linkedinScore: 68,
          interviewReady: 62,
          rejectionRisk: 22,
          strengths: ["Strong MERN Projects", "Good Education Section", "Consistent GitHub Commit History"],
          weaknesses: ["Missing Metrics", "No Leadership Experience", "Poor Skill Organization", "Missing Docker/AWS in stack"],
          aiPercent: "64%",
          aiSections: "Summary, Project Descriptions",
          aiRecommendation: "Rewrite with active verbs and quantified personal achievements.",
          missingAtsKeywords: ["Docker", "Microservices", "Kubernetes", "AWS", "CI/CD"],
          originalSummary: "Responsible for building a fullstack web application using MERN technology stack. Worked on adding some features like authentication and a database. Managed backend queries using Node and Express.",
          improvedSummary: {
            faang: "Architected a scalable fullstack MERN web application, integrating JWT role-based authentication and MongoDB indexing. Optimized database queries, reducing API response latency by 34% and supporting 1,500+ concurrent user sessions.",
            startup: "Led development of a high-growth MERN application. Configured Redis cache to slash API fetch latency by 50% and engineered real-time dashboard analytics that boosted user engagement by 22%.",
            internship: "Built and deployed a responsive MERN application utilizing REST APIs and secure token authentication. Structured relational database endpoints, achieving 98% unit test coverage using Jest."
          },
          recommendedRoles: [
            { role: "MERN Developer", match: "94%" },
            { role: "Frontend Engineer", match: "89%" },
            { role: "Solutions Engineer", match: "81%" }
          ],
          githubAudit: {
            commitRate: "High (Active)",
            readmeQuality: "Poor Documentation",
            diversity: "MERN Focus",
            bullets: [
              "Active development graph (142 commits last 90 days)",
              "Repositories lack live deployment links in descriptions",
              "Missing architecture diagrams in project READMEs"
            ]
          },
          linkedinAudit: {
            headline: "Medium Strength",
            aboutSection: "Unquantified Profile",
            featured: "0 Items Found",
            bullets: [
              "Keyword density fits target role standards",
              "Headline is a generic 'Student at University'",
              "Missing LinkedIn Featured links to portfolio projects"
            ]
          },
          projects: [
            {
              name: "Expense Tracker App",
              tech: "React, Node, Express, MongoDB",
              complexity: "4/10",
              innovation: "3/10",
              hiringVal: "5/10",
              advice: "This project is extremely common. Stand out by adding Chart.js visualizations, automated daily budget SMS updates (Twilio), and Dockerizing the backend stack."
            },
            {
              name: "Real-time Chat Application",
              tech: "Socket.io, React, Node.js",
              complexity: "7/10",
              innovation: "6/10",
              hiringVal: "7/10",
              advice: "Improve tech scoring by integrating Redis adapter for horizontally scaling socket connections. Add End-to-End Encryption (E2EE) toggle for authentication."
            }
          ],
          interviewProbs: [
            { topic: "React Virtual DOM vs Real DOM", prob: "95% Chance" },
            { topic: "REST API Design Patterns", prob: "88% Chance" },
            { topic: "MongoDB Aggregation Pipelines", prob: "82% Chance" }
          ],
          interviewQuestions: {
            technical: [
              "Can you explain the difference between virtual DOM and real DOM in React, and how it helps performance?",
              "How do you secure Express routes, and what does JWT verify?",
              "Explain MongoDB indexing. When should you avoid creating an index?"
            ],
            projects: [
              "In your Expense Tracker, how did you handle state sync between your income and expense lists?",
              "What database optimization would you apply if your User collection scaled to 5 million records?"
            ],
            hr: [
              "Tell me about a time you had a technical disagreement with a team member. How was it resolved?",
              "Why do you want to join our team as a MERN Developer?"
            ]
          },
          timeline: {
            day30: ["Integrate Docker container structures into local MERN APIs.", "Standardize database queries using index optimization configurations.", "Draft clear architectural flowcharts for projects."],
            day60: ["Configure GitHub Actions to push deployments to AWS ECS instances.", "Rebuild LinkedIn landing cards: optimize Headline structures with quantified metrics.", "Conduct 3 simulation mock interviews on system design queries."],
            day90: ["Leverage alternative job profiles discovered in Career Discovery Engine.", "Apply directly using ATS-optimized resume templates.", "Engage in technical interview coding mock sprints."]
          }
        };
      }
    };

    const analysis = await callGeminiJSON(prompt, systemInstruction, mockCallback);
    res.json(analysis);
  } catch (error) {
    console.error('API /api/analyze error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 2. POST /api/match - Evaluate Job Description Fit
app.post('/api/match', async (req, res) => {
  try {
    const { jdText, roleKey } = req.body;
    if (!jdText) {
      return res.status(400).json({ error: 'Missing jdText parameter' });
    }

    console.log(`Evaluating job description match for roleKey: ${roleKey}`);

    const systemInstruction = `You are an AI ATS scanner matching candidate skills against a target Job Description. 
You must output a JSON response matching the structure. Do not wrap in markdown tags.`;

    const prompt = `
Job Description:
"""
${jdText}
"""
Candidate Role Context: "${roleKey || 'MERN Developer'}"

Provide a JSON object evaluating this job match with this exact schema:
{
  "matchScore": 82, // integer 0-100 match percentage
  "bullets": [
    "✓ Point matching a requirement",
    "✗ Point describing a missing requirement",
    "✓ General capability fit comment"
  ],
  "skills": [
    { "keyword": "Skill Name 1", "strength": "Must-Have", "found": "✓ Found in Profile" },
    { "keyword": "Skill Name 2", "strength": "Must-Have", "found": "✗ Missing from Profile" },
    { "keyword": "Skill Name 3", "strength": "Nice-To-Have", "found": "✓ Found in Profile" }
  ]
}`;

    const mockCallback = () => {
      // Rule-based mock response based on text keywords
      const textLower = jdText.toLowerCase();
      const hasDocker = textLower.includes('docker');
      const hasAws = textLower.includes('aws');
      
      let matchScore = 80;
      const bullets = [
        "✓ Database and backend REST API structures match requirements",
        "✓ Quantified development experience corresponds to scale"
      ];
      
      const skills = [
        { keyword: "React.js", strength: "Must-Have", found: "✓ Found in Profile" },
        { keyword: "Node.js", strength: "Must-Have", found: "✓ Found in Profile" }
      ];

      if (hasDocker) {
        skills.push({ keyword: "Docker", strength: "Must-Have", found: "✗ Missing from Profile" });
        bullets.push("✗ Docker is expected but missing from your current stack");
        matchScore -= 5;
      } else {
        skills.push({ keyword: "Docker", strength: "Must-Have", found: "✓ Found in Profile" });
        bullets.push("✓ Infrastructure containerization tags satisfied");
      }

      if (hasAws) {
        skills.push({ keyword: "AWS Cloud", strength: "Nice-To-Have", found: "✗ Missing from Profile" });
        matchScore -= 3;
      } else {
        skills.push({ keyword: "AWS Cloud", strength: "Nice-To-Have", found: "✓ Found in Profile" });
      }

      return {
        matchScore: Math.max(matchScore, 40),
        bullets: bullets,
        skills: skills
      };
    };

    const result = await callGeminiJSON(prompt, systemInstruction, mockCallback);
    res.json(result);
  } catch (error) {
    console.error('API /api/match error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 3. POST /api/interview/chat - Mock Interview chatbot with grading
app.post('/api/interview/chat', async (req, res) => {
  try {
    const { messages, category, role } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Missing or invalid messages parameter' });
    }

    console.log(`Processing interview chat. Category: ${category}, Role: ${role}`);

    const systemInstruction = `You are a strict, senior technical interviewer for a ${role || 'Software Engineer'} role. 
Conduct a mock interview for the category: "${category}". 
Read the conversation history. If the candidate just answered, rate their last answer and output the ratings along with your next interview question.
You must return a JSON response with this exact structure:
{
  "reply": "Your next interviewer response or question.",
  "feedback": { // only include feedback if the candidate provided a real answer in history
    "confidence": 85, // integer 0-100 rating
    "clarity": 78,      // integer 0-100 rating
    "accuracy": 82,     // integer 0-100 rating
    "text": "1-2 sentences of helpful feedback critique."
  }
}
Do not wrap in markdown code blocks.`;

    const chatHistoryText = messages.map(m => `${m.role === 'user' ? 'Candidate' : 'Interviewer'}: ${m.content}`).join('\n');

    const prompt = `
Here is the interview history so far:
${chatHistoryText}

If the history has just started, introduce yourself and ask the first relevant question.
Otherwise, evaluate the candidate's last answer, populate the feedback object, and ask the next follow-up question.`;

    const mockCallback = () => {
      // Mock chat response
      const lastUserMsg = messages[messages.length - 1]?.content || '';
      
      const feedback = {
        confidence: Math.round(75 + Math.random() * 20),
        clarity: Math.round(70 + Math.random() * 25),
        accuracy: Math.round(72 + Math.random() * 23),
        text: "Solid description of fundamentals. Try to include a metric or real project application detail next time."
      };

      let reply = "That's a logical approach. Could you elaborate on how you would optimize this setup if the payload size tripled?";
      if (messages.length <= 1) {
        reply = `Hello! I'm your AI Recruiter Coach. Ready to start? Let's dive in: What are the main trade-offs between using SQL vs NoSQL for a large dashboard database?`;
      }

      return {
        reply: reply,
        feedback: messages.length > 1 ? feedback : null
      };
    };

    const result = await callGeminiJSON(prompt, systemInstruction, mockCallback);
    res.json(result);
  } catch (error) {
    console.error('API /api/interview/chat error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 4. POST /api/rewrite - Rewrite Resume summary dynamically
app.post('/api/rewrite', async (req, res) => {
  try {
    const { originalSummary, style, role } = req.body;
    if (!originalSummary) {
      return res.status(400).json({ error: 'Missing originalSummary parameter' });
    }

    console.log(`Rewriting summary to style: ${style}`);

    const systemInstruction = `You are a professional resume writer. Rewrite the candidate's professional summary. 
You must return a JSON response with this exact structure:
{
  "rewrittenSummary": "The rewritten high-impact summary paragraph goes here."
}
Do not wrap in markdown code blocks.`;

    const prompt = `
Original Summary:
"${originalSummary}"

Target Role: "${role || 'Developer'}"
Style Direction: "${style || 'faang'}" (Note: faang = metrics-focused & scale, startup = fast velocity & product impact, internship = skills, education & potential)

Generate a compelling, polished rewritten summary.`;

    const mockCallback = () => {
      let rewrittenSummary = '';
      if (style === 'faang') {
        rewrittenSummary = `Architected a scalable fullstack web application, integrating role-based authentication and database indexing. Optimized server queries, reducing API response latency by 34% and supporting 1,500+ concurrent user sessions.`;
      } else if (style === 'startup') {
        rewrittenSummary = `Led development of a high-growth application. Configured Redis cache to slash API fetch latency by 50% and engineered real-time dashboard analytics that boosted user engagement by 22% in a rapid-release cycle environment.`;
      } else {
        rewrittenSummary = `Computer Science student specializing in responsive front-end UI. Built React components with 100% WCAG accessibility compliance and integrated REST data models with 98% unit test coverage using Jest.`;
      }
      return { rewrittenSummary };
    };

    const result = await callGeminiJSON(prompt, systemInstruction, mockCallback);
    res.json(result);
  } catch (error) {
    console.error('API /api/rewrite error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`==========================================================================`);
  console.log(`CareerOS AI Backend running at http://localhost:${PORT}`);
  console.log(`==========================================================================`);
});
