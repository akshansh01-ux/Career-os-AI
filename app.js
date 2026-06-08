/* ==========================================================================
   CareerOS AI - Client Side Application Logic
   ========================================================================== */

// --- 1. Core Profile Database ---
const PROFILES = {
  mern: {
    name: "John Doe",
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
      { topic: "MongoDB Aggregation Pipelines", prob: "82% Chance" },
      { topic: "CI/CD Pipeline Architecture", prob: "45% Chance" }
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
  },
  
  frontend: {
    name: "Sarah Jenkins",
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
      { topic: "Web Performance & Hydration", prob: "80% Chance" },
      { topic: "TypeScript Interfaces & Generics", prob: "55% Chance" }
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
      day60: ["Optimize web vital load metrics (Lighthouse score 95+).", "Integrate active design systems (e.g. Storybook) into Github portfolios.", "Rewrite resume summary using optimized FAANG terms."],
      day90: ["Complete mock interviews centered on JS performance algorithms.", "Apply to high match design roles.", "Network with lead frontend engineers on LinkedIn."]
    }
  },
  
  sde: {
    name: "Alex Rivera",
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
      { topic: "Sorting & Searching Algorithms", prob: "90% Chance" },
      { topic: "Basic SQL Database Designs", prob: "75% Chance" }
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
  }
};

// --- 2. Application State ---
let currentRoleKey = "mern";
let activeTab = "dashboard";
let simulatedUpgrades = {
  docker: false,
  aws: false,
  "system-design": false,
  readme: false,
  "linkedin-featured": false
};

// Interview Chat State
let currentQuestionIndex = 0;
let selectedQuestionCategory = "technical";
let currentRewriteStyle = "faang";
let uploadedFile = null;
let interviewMessages = [];

// --- 3. DOM & Transition Routing ---
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupProfileSelector();
  setupUploadModal();
  setupJobMatchEngine();
  setupScoreSimulator();
  setupInterviewCoach();
  setupResumeBuilder();
  setupLandingEvents();
  
  // Load default MERN Profile
  loadProfileData("mern");
});

function setupNavigation() {
  const menuItems = document.querySelectorAll(".menu-item");
  const tabContents = document.querySelectorAll(".tab-content");
  const metricCards = document.querySelectorAll(".metric-card");
  const landingView = document.getElementById("landing-view");
  const workspaceView = document.getElementById("app-workspace-view");
  
  // Switch Workspace Tabs
  function switchTab(tabId) {
    menuItems.forEach(item => {
      if (item.getAttribute("data-tab") === tabId) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    tabContents.forEach(content => {
      if (content.id === `tab-${tabId}`) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });

    activeTab = tabId;
    document.querySelector(".tab-container").scrollTop = 0;
  }

  menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      const tabId = item.getAttribute("data-tab");
      if (tabId) {
        e.preventDefault();
        switchTab(tabId);
      }
    });
  });

  metricCards.forEach(card => {
    card.addEventListener("click", () => {
      const targetTab = card.getAttribute("data-target-tab");
      if (targetTab) {
        switchTab(targetTab);
      }
    });
  });

  // Switch between Landing View and App Workspace View
  const navGoDashboard = document.getElementById("navGoDashboard");
  const heroExploreBtn = document.getElementById("heroExploreBtn");
  const menuBackLanding = document.getElementById("menuBackLanding");

  function enterWorkspace() {
    landingView.classList.add("hidden");
    workspaceView.classList.add("active");
    window.scrollTo(0, 0);
  }

  function leaveWorkspace() {
    workspaceView.classList.remove("active");
    landingView.classList.remove("hidden");
    window.scrollTo(0, 0);
  }

  navGoDashboard.addEventListener("click", (e) => {
    e.preventDefault();
    enterWorkspace();
  });
  heroExploreBtn.addEventListener("click", enterWorkspace);
  menuBackLanding.addEventListener("click", leaveWorkspace);

  // Expose triggers to open resume upload modal from landing buttons
  document.querySelectorAll(".btn-landing-upload").forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = document.getElementById("uploadModal");
      modal.classList.add("active");
    });
  });
}

function setupLandingEvents() {
  // Add styling focus on pricing cards selection
  const pricingCards = document.querySelectorAll(".pricing-card");
  pricingCards.forEach(card => {
    card.addEventListener("click", () => {
      pricingCards.forEach(c => c.classList.remove("pro"));
      card.classList.add("pro");
    });
  });
}

// --- 4. Profile Selector Sync ---
function setupProfileSelector() {
  const dropdown = document.getElementById("profileDropdown");
  dropdown.addEventListener("change", (e) => {
    loadProfileData(e.target.value);
  });
}

function loadProfileData(roleKey) {
  currentRoleKey = roleKey;
  const data = PROFILES[roleKey];
  
  // Sync select input if changed programmatically
  document.getElementById("profileDropdown").value = roleKey;

  // Reset simulator
  simulatedUpgrades = {
    docker: false,
    aws: false,
    "system-design": false,
    readme: false,
    "linkedin-featured": false
  };
  resetSimCheckboxes();

  // Populate Sidebar Profiler
  document.getElementById("profileName").innerText = data.name;
  document.getElementById("profileRole").innerText = data.role;
  document.getElementById("avatarLetter").innerText = data.name.split(" ").map(n=>n[0]).join("");

  // Populate Dashboard Metrics & Gauges
  renderDashboardMetrics(data);

  // Tab 2: Resume Intelligence updates
  document.getElementById("intelAtsScore").innerText = data.atsScore;
  document.getElementById("intelAiPercent").innerText = data.aiPercent;
  updateRadialRing("intelAtsRing", data.atsScore);
  updateRadialRing("intelAiRing", parseInt(data.aiPercent));
  
  const atsBulletsContainer = document.getElementById("intelAtsBullets");
  atsBulletsContainer.innerHTML = `
    <div class="bullet-item ok">✓ Correct Single Column Format</div>
    <div class="bullet-item ok">✓ Education Section contains GPA</div>
    <div class="bullet-item ${data.healthIndex > 75 ? 'ok' : 'fail'}">${data.healthIndex > 75 ? '✓ Good keyword density' : '✗ Missing Action-Oriented Metrics'}</div>
    <div class="bullet-item fail">✗ No quantifiable impact values found</div>
  `;

  // Keyword Optimizer group
  const keywordsContainer = document.getElementById("intelKeywordsGroup");
  keywordsContainer.innerHTML = "";
  data.missingAtsKeywords.forEach((kw, idx) => {
    const isCritical = idx < 2;
    keywordsContainer.innerHTML += `
      <div class="keyword-pill ${isCritical ? 'badge-danger' : 'badge-warning'}">${kw} (${isCritical ? 'Must-Have' : 'Nice-To-Have'})</div>
    `;
  });

  // Intel panel rewriter projection
  const optimizedScore = Math.min(data.atsScore + 17, 98);
  document.getElementById("intelProjectedAtsBar").style.width = `${optimizedScore}%`;
  document.getElementById("intelCurrentAtsVal").innerText = `Current: ${data.atsScore}/100`;
  document.getElementById("intelOptAtsVal").innerText = `Optimized: ${optimizedScore}/100 (+17 pts)`;

  // side-by-side text rewriter
  document.getElementById("originalText").innerText = `"${data.originalSummary}"`;
  document.getElementById("improvedText").innerText = `"${data.improvedSummary[currentRewriteStyle]}"`;

  // Tab 3: Job Matcher reset
  document.getElementById("jdTextarea").value = "";
  resetJobMatcherResults(data);

  // Tab 4: Portfolio Audit updates
  document.getElementById("gitScoreBadge").innerText = `${data.githubScore} GitHub Score`;
  document.getElementById("linkedinScoreBadge").innerText = `${data.linkedinScore} Profile Score`;
  document.getElementById("gitCommitVal").innerText = data.githubAudit.commitRate;
  document.getElementById("gitReadmeVal").innerText = data.githubAudit.readmeQuality;
  document.getElementById("gitDivVal").innerText = data.githubAudit.diversity;
  document.getElementById("linkHeadlineVal").innerText = data.linkedinAudit.headline;
  document.getElementById("linkAboutVal").innerText = data.linkedinAudit.aboutSection;
  document.getElementById("linkFeaturedVal").innerText = data.linkedinAudit.featured;

  const gitBullets = document.getElementById("gitAuditBullets");
  gitBullets.innerHTML = "";
  data.githubAudit.bullets.forEach(b => {
    const isOk = b.startsWith("Active") || b.startsWith("Clean");
    gitBullets.innerHTML += `<div class="bullet-item ${isOk ? 'ok' : 'fail'}">${isOk ? '✓' : '✗'} ${b}</div>`;
  });

  const linkBullets = document.getElementById("linkAuditBullets");
  linkBullets.innerHTML = "";
  data.linkedinAudit.bullets.forEach(b => {
    const isOk = b.startsWith("Keyword") || b.startsWith("Headline is a default") === false;
    linkBullets.innerHTML += `<div class="bullet-item ${isOk ? 'ok' : 'fail'}">${isOk ? '✓' : '✗'} ${b}</div>`;
  });

  // Project evaluator lists
  const projectList = document.getElementById("projectEvaluatorList");
  projectList.innerHTML = "";
  data.projects.forEach(p => {
    projectList.innerHTML += `
      <div class="project-eval-row">
        <div class="project-info-side">
          <h4>${p.name}</h4>
          <p class="text-xs text-muted">${p.tech}</p>
        </div>
        <div class="project-grades">
          <div class="grade-pill">Complexity: <strong>${p.complexity}</strong></div>
          <div class="grade-pill">Innovation: <strong>${p.innovation}</strong></div>
          <div class="grade-pill ${parseInt(p.hiringVal) > 6 ? 'ok' : 'danger'}">Hiring Value: <strong>${p.hiringVal}</strong></div>
        </div>
        <div class="project-recommendation">
          <strong>AI Upgrade Recommendation:</strong>
          <p class="text-xs mt-1">${p.advice}</p>
        </div>
      </div>
    `;
  });

  // Tab 5: Interview Coach Question Probabilities
  const probList = document.getElementById("interviewProbList");
  probList.innerHTML = "";
  data.interviewProbs.forEach(p => {
    probList.innerHTML += `
      <div class="prob-item">
        <span>${p.topic}</span>
        <strong class="text-emerald">${p.prob}</strong>
      </div>
    `;
  });
  resetInterviewSession();

  // Tab 6: Timeline Roadmap
  document.getElementById("timeline30").innerHTML = data.timeline.day30.map(t => `<li>${t}</li>`).join("");
  document.getElementById("timeline60").innerHTML = data.timeline.day60.map(t => `<li>${t}</li>`).join("");
  document.getElementById("timeline90").innerHTML = data.timeline.day90.map(t => `<li>${t}</li>`).join("");

  // Tab 7: Resume Builder Forms sync
  document.getElementById("resName").value = data.name;
  document.getElementById("resTitle").value = `Fullstack ${data.role}`;
  document.getElementById("resSummary").value = data.originalSummary;
  document.getElementById("resSkills").value = data.interviewProbs.map(p => p.topic.split(" ")[0]).join(", ");
  
  if (data.projects && data.projects.length > 0) {
    document.getElementById("resProjects").value = `${data.projects[0].name}: Built using ${data.projects[0].tech}. ${data.projects[0].advice}`;
  }
  syncResumePreviewSheet();
}

function renderDashboardMetrics(data) {
  const projections = computeProjectedScores(data);

  // Set visual texts
  document.getElementById("txtHealthScore").innerText = projections.healthIndex;
  document.getElementById("txtAtsScore").innerText = `${projections.atsScore}/100`;
  document.getElementById("txtJobMatchScore").innerText = `${projections.jobMatchScore}%`;
  document.getElementById("txtGithubScore").innerText = `${projections.githubScore}/100`;
  document.getElementById("txtLinkedinScore").innerText = `${projections.linkedinScore}/100`;
  document.getElementById("txtInterviewReady").innerText = `${projections.interviewReady}%`;
  document.getElementById("txtRejectionRisk").innerText = `${projections.rejectionRisk}%`;

  // Set visual bars
  document.getElementById("barAtsScore").style.width = `${projections.atsScore}%`;
  document.getElementById("barJobMatchScore").style.width = `${projections.jobMatchScore}%`;
  document.getElementById("barGithubScore").style.width = `${projections.githubScore}%`;
  document.getElementById("barLinkedinScore").style.width = `${projections.linkedinScore}%`;
  document.getElementById("barInterviewReady").style.width = `${projections.interviewReady}%`;
  document.getElementById("barRejectionRisk").style.width = `${projections.rejectionRisk}%`;

  // Radial Ring
  updateRadialRing("mainHealthRing", projections.healthIndex);

  // Sync details text depending on role
  document.getElementById("txtJobMatchFooter").innerText = `Based on target ${data.role} role`;
  document.getElementById("txtGithubFooter").innerHTML = projections.githubScore > 85 ? `<span>✓ Repository docs are optimized</span>` : `<span>✗ Repositories lack live site URLs</span>`;
  document.getElementById("txtLinkedinFooter").innerHTML = projections.linkedinScore > 80 ? `<span>✓ Featured section deployed</span>` : `<span>! Headline is missing metrics</span>`;
  document.getElementById("txtInterviewReadyFooter").innerText = projections.interviewReady > 80 ? "Prepped for core behavioral topics" : "Weak: Complex architecture patterns";
  document.getElementById("txtRejectionRiskFooter").innerText = projections.rejectionRisk < 20 ? "Low market vulnerability" : "High risk (requires portfolio expansion)";

  // Core Risks Alerts list
  const riskList = document.getElementById("riskList");
  riskList.innerHTML = "";
  let riskAlertCount = 0;

  if (!simulatedUpgrades.docker && !simulatedUpgrades.aws) {
    riskAlertCount++;
    riskList.innerHTML += `
      <li class="risk-item">
        <div class="risk-badge danger">ATS</div>
        <div class="risk-desc">
          <h5>Missing Core Infrastructure Skills</h5>
          <p>${data.missingAtsKeywords.slice(0, 3).join(", ")} are completely missing, dropping candidate visibility in filtering databases.</p>
        </div>
      </li>
    `;
  }
  if (!simulatedUpgrades.readme) {
    riskAlertCount++;
    riskList.innerHTML += `
      <li class="risk-item">
        <div class="risk-badge warning">PORTFOLIO</div>
        <div class="risk-desc">
          <h5>Under-documented Repositories</h5>
          <p>Projects like "${data.projects[0].name}" lack clear visual guides, resulting in lower recruiter review grades.</p>
        </div>
      </li>
    `;
  }
  if (!simulatedUpgrades["linkedin-featured"]) {
    riskAlertCount++;
    riskList.innerHTML += `
      <li class="risk-item">
        <div class="risk-badge info">LINKEDIN</div>
        <div class="risk-desc">
          <h5>Weak LinkedIn Branding Hook</h5>
          <p>Target role keyword density is below average. Profile lacks direct links to live products.</p>
        </div>
      </li>
    `;
  }

  if (riskAlertCount === 0) {
    riskList.innerHTML = `
      <li class="risk-item">
        <div class="risk-badge bg-emerald" style="background: rgba(16, 185, 129, 0.15); color: var(--clr-emerald)">CLEARED</div>
        <div class="risk-desc">
          <h5>All Critical Vulnerabilities Resolved</h5>
          <p>Your profiles are thoroughly optimized. Ready for direct application pipelines.</p>
        </div>
      </li>
    `;
  }

  document.getElementById("dashRiskCount").innerText = riskAlertCount > 0 ? `${riskAlertCount} High-risk alerts` : `0 High-risk alerts`;
  document.getElementById("dashRiskCount").className = riskAlertCount > 0 ? "glow-text text-amber" : "glow-text text-emerald";
}

function computeProjectedScores(data) {
  let atsBonus = 0;
  let matchBonus = 0;
  let gitBonus = 0;
  let linkBonus = 0;
  let interviewBonus = 0;
  let riskReduction = 0;

  if (simulatedUpgrades.docker) {
    atsBonus += 8;
    matchBonus += 5;
    riskReduction += 5;
  }
  if (simulatedUpgrades.aws) {
    atsBonus += 6;
    matchBonus += 8;
    riskReduction += 6;
  }
  if (simulatedUpgrades["system-design"]) {
    interviewBonus += 10;
    riskReduction += 4;
  }
  if (simulatedUpgrades.readme) {
    gitBonus += 12;
    matchBonus += 2;
  }
  if (simulatedUpgrades["linkedin-featured"]) {
    linkBonus += 10;
    riskReduction += 3;
  }

  const ats = Math.min(data.atsScore + atsBonus, 98);
  const match = Math.min(data.jobMatchScore + matchBonus, 99);
  const git = Math.min(data.githubScore + gitBonus, 98);
  const link = Math.min(data.linkedinScore + linkBonus, 98);
  const interview = Math.min(data.interviewReady + interviewBonus, 95);
  const risk = Math.max(data.rejectionRisk - riskReduction, 5);

  const health = Math.round((ats + match + git + link + interview) / 5);

  return {
    atsScore: ats,
    jobMatchScore: match,
    githubScore: git,
    linkedinScore: link,
    interviewReady: interview,
    rejectionRisk: risk,
    healthIndex: health
  };
}

function updateRadialRing(ringId, value) {
  const ring = document.getElementById(ringId);
  if (!ring) return;
  const radius = ring.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  ring.style.strokeDashoffset = offset;
}

// --- 5. Upload Resume & Drag & Drop Flow ---
function setupUploadModal() {
  const modal = document.getElementById("uploadModal");
  const openBtn = document.getElementById("uploadResumeBtn");
  const closeBtn = document.getElementById("closeUploadModal");
  const dropzone = document.getElementById("dropzone");
  const startBtn = document.getElementById("startAnalysisBtn");
  
  const progressContainer = document.getElementById("uploadProgressContainer");
  const progressBar = document.getElementById("uploadProgressBar");
  const progressText = document.getElementById("uploadProgressText");
  const progressPercent = document.getElementById("uploadPercent");

  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    progressContainer.classList.add("hidden");
    progressBar.style.width = "0%";
    progressPercent.innerText = "0%";
    uploadedFile = null;
    dropzone.style.borderColor = "var(--clr-border)";
    dropzone.innerHTML = `
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
      <p>Drag and drop your <strong>Resume PDF</strong> or click to browse</p>
      <span class="text-muted text-xs">Supports PDF, DOCX up to 10MB</span>
    `;
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // Click to browse local file
  dropzone.addEventListener("click", () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".pdf,.docx,.txt";
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        uploadedFile = file;
        dropzone.style.borderColor = "var(--clr-emerald)";
        dropzone.innerHTML = `
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--clr-emerald)" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <p><strong>${file.name}</strong> successfully loaded!</p>
          <span class="text-muted text-xs">Ready for AI verification analysis</span>
        `;
      }
    };
    fileInput.click();
  });

  // Drag and Drop listeners
  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.style.borderColor = "var(--clr-primary)";
  });
  dropzone.addEventListener("dragleave", () => {
    dropzone.style.borderColor = "var(--clr-border)";
  });
  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      uploadedFile = file;
      dropzone.style.borderColor = "var(--clr-emerald)";
      dropzone.innerHTML = `
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--clr-emerald)" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <p><strong>${file.name}</strong> successfully loaded!</p>
        <span class="text-muted text-xs">Ready for AI verification analysis</span>
      `;
    }
  });

  startBtn.addEventListener("click", async () => {
    const githubUrl = document.getElementById("inputGithub").value.trim();
    const linkedinUrl = document.getElementById("inputLinkedin").value.trim();
    const targetRole = document.getElementById("inputRole").value.trim() || "MERN Developer";

    progressContainer.classList.remove("hidden");
    startBtn.disabled = true;
    startBtn.innerText = "Analyzing...";

    let progress = 0;
    const logs = [
      "Parsing PDF layouts & styling markers...",
      "Extracting tech stack keyword arrays...",
      "Auditing linked GitHub repositories...",
      "Analyzing LinkedIn structural presence...",
      "Generating health metrics & dashboard scores..."
    ];

    const timer = setInterval(() => {
      if (progress < 90) {
        progress += 5;
        progressBar.style.width = `${progress}%`;
        progressPercent.innerText = `${progress}%`;
        const msgIndex = Math.floor((progress / 100) * logs.length);
        if (logs[msgIndex]) {
          progressText.innerText = logs[msgIndex];
        }
      }
    }, 150);

    try {
      const formData = new FormData();
      if (uploadedFile) {
        formData.append("resumeFile", uploadedFile);
      }
      formData.append("githubUrl", githubUrl);
      formData.append("linkedinUrl", linkedinUrl);
      formData.append("targetRole", targetRole);

      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData
      });

      if (!response.ok) throw new Error("Analysis failed");
      const analysisData = await response.json();

      clearInterval(timer);
      progressBar.style.width = "100%";
      progressPercent.innerText = "100%";
      progressText.innerText = "Analysis completed! Synchronizing profile...";

      setTimeout(() => {
        modal.classList.remove("active");
        startBtn.disabled = false;
        startBtn.innerText = "Start Deep AI Analysis";
        
        const customKey = "custom_" + Date.now();
        PROFILES[customKey] = analysisData;
        
        const dropdown = document.getElementById("profileDropdown");
        const newOption = document.createElement("option");
        newOption.value = customKey;
        newOption.text = `${analysisData.name} (${analysisData.role})`;
        dropdown.add(newOption);
        
        document.getElementById("landing-view").classList.add("hidden");
        document.getElementById("app-workspace-view").classList.add("active");
        
        loadProfileData(customKey);
        
        alert("AI Parsing Analysis Complete! Workspace stats synchronized.");
      }, 500);

    } catch (err) {
      console.error(err);
      clearInterval(timer);
      alert("Error parsing resume: " + err.message);
      progressContainer.classList.add("hidden");
      startBtn.disabled = false;
      startBtn.innerText = "Start Deep AI Analysis";
    }
  });
}

// --- 6. Job Match Engine ---
function setupJobMatchEngine() {
  const evaluateBtn = document.getElementById("analyzeJdBtn");
  const textarea = document.getElementById("jdTextarea");
  const beam = document.getElementById("scanBeam");

  evaluateBtn.addEventListener("click", async () => {
    const value = textarea.value.trim();
    if (!value) {
      alert("Please paste a target job description first!");
      return;
    }

    beam.classList.remove("hidden");
    evaluateBtn.innerText = "Analyzing Job Semantics...";
    evaluateBtn.disabled = true;

    try {
      const response = await fetch("/api/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jdText: value,
          roleKey: PROFILES[currentRoleKey]?.role || "MERN Developer"
        })
      });

      if (!response.ok) throw new Error("Match failed");
      const matchResult = await response.json();

      beam.classList.add("hidden");
      evaluateBtn.innerText = "Evaluate Match Index";
      evaluateBtn.disabled = false;

      document.getElementById("jdPercentScore").innerText = `${matchResult.matchScore}%`;
      document.getElementById("jdPercentBar").style.width = `${matchResult.matchScore}%`;

      const bulletsContainer = document.getElementById("jdScoreBullets");
      bulletsContainer.innerHTML = "";
      matchResult.bullets.forEach(b => {
        const isFail = b.startsWith("✗") || b.startsWith("fail");
        bulletsContainer.innerHTML += `<div class="bullet-item ${isFail ? 'fail' : 'ok'}">${b}</div>`;
      });

      const tableBody = document.getElementById("skillTableBody");
      tableBody.innerHTML = "";
      matchResult.skills.forEach(s => {
        const isFound = s.found.startsWith("✓");
        tableBody.innerHTML += `
          <tr>
            <td>${s.keyword}</td>
            <td><span class="badge-pill ${s.strength === 'Must-Have' ? 'bg-rose' : 'bg-violet'}">${s.strength}</span></td>
            <td><span class="${isFound ? 'text-emerald' : 'text-rose'}">${s.found}</span></td>
          </tr>
        `;
      });

      alert("Job semantics parsed! Technical overlap computed.");
    } catch (err) {
      console.error(err);
      beam.classList.add("hidden");
      evaluateBtn.innerText = "Evaluate Match Index";
      evaluateBtn.disabled = false;
      alert("Error evaluating match: " + err.message);
    }
  });
}

function resetJobMatcherResults(data) {
  document.getElementById("jdPercentScore").innerText = `${data.jobMatchScore}%`;
  document.getElementById("jdPercentBar").style.width = `${data.jobMatchScore}%`;
  
  document.getElementById("jdScoreBullets").innerHTML = `
    <div class="bullet-item ok">✓ MongoDB, React stack match requirements</div>
    <div class="bullet-item fail">✗ Docker & AWS are expected but missing</div>
    <div class="bullet-item ok">✓ General development experience corresponds to scale</div>
  `;

  document.getElementById("skillTableBody").innerHTML = `
    <tr>
      <td>React.js</td>
      <td><span class="badge-pill bg-rose">Must-Have</span></td>
      <td><span class="text-emerald">✓ Found</span></td>
    </tr>
    <tr>
      <td>Node.js</td>
      <td><span class="badge-pill bg-rose">Must-Have</span></td>
      <td><span class="text-emerald">✓ Found</span></td>
    </tr>
    <tr>
      <td>Docker</td>
      <td><span class="badge-pill bg-rose">Must-Have</span></td>
      <td><span class="text-rose">✗ Missing</span></td>
    </tr>
    <tr>
      <td>AWS Cloud</td>
      <td><span class="badge-pill bg-violet">Nice-To-Have</span></td>
      <td><span class="text-rose">✗ Missing</span></td>
    </tr>
  `;
}

// --- 7. Score Optimizing Simulator ---
function setupScoreSimulator() {
  const dashboardChecks = document.querySelectorAll(".sim-check");
  const roadmapChecks = document.querySelectorAll(".sim-checkbox-full");

  // Sync checkboxes across tabs
  function syncChecks(skillId, isChecked) {
    simulatedUpgrades[skillId] = isChecked;

    dashboardChecks.forEach(c => {
      if (c.getAttribute("data-skill") === skillId) c.checked = isChecked;
    });

    roadmapChecks.forEach(c => {
      if (c.getAttribute("data-skill") === skillId) c.checked = isChecked;
    });

    // Recompute scores
    const data = PROFILES[currentRoleKey];
    renderDashboardMetrics(data);
    updateSandboxProjections(data);
  }

  dashboardChecks.forEach(c => {
    c.addEventListener("change", (e) => {
      const skillId = e.target.getAttribute("data-skill");
      syncChecks(skillId, e.target.checked);
    });
  });

  roadmapChecks.forEach(c => {
    c.addEventListener("change", (e) => {
      const skillId = e.target.getAttribute("data-skill");
      syncChecks(skillId, e.target.checked);
    });
  });
}

function resetSimCheckboxes() {
  document.querySelectorAll(".sim-check").forEach(c => c.checked = false);
  document.querySelectorAll(".sim-checkbox-full").forEach(c => c.checked = false);
  
  const data = PROFILES[currentRoleKey];
  updateSandboxProjections(data);
}

function updateSandboxProjections(data) {
  const scores = computeProjectedScores(data);
  
  // Dashboard tab projections preview box
  document.getElementById("simAtsVal").innerText = `${data.atsScore} → ${scores.atsScore}`;
  document.getElementById("simInterviewVal").innerText = `${data.interviewReady}% → ${scores.interviewReady}%`;

  // Sandbox Roadmap tab preview box
  document.getElementById("simResultAts").innerText = `${data.atsScore} → ${scores.atsScore}`;
  document.getElementById("simResultHealth").innerText = `${data.healthIndex}% → ${scores.healthIndex}%`;
  document.getElementById("simResultRisk").innerText = `${data.rejectionRisk}% → ${scores.rejectionRisk}%`;
}

// --- 8. AI Mock Interview Coach Chatbot ---
function setupInterviewCoach() {
  const sendBtn = document.getElementById("btnSendAnswer");
  const textInput = document.getElementById("chatInput");
  const resetBtn = document.getElementById("btnResetInterview");
  const categoryButtons = document.querySelectorAll(".btn-q-cat");

  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedQuestionCategory = btn.getAttribute("data-category");
      resetInterviewSession();
    });
  });

  sendBtn.addEventListener("click", handleUserAnswer);
  textInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleUserAnswer();
    }
  });

  resetBtn.addEventListener("click", resetInterviewSession);
}

function resetInterviewSession() {
  currentQuestionIndex = 0;
  const data = PROFILES[currentRoleKey];
  const firstQuestion = data.interviewQuestions[selectedQuestionCategory][0];

  const chatMessages = document.getElementById("chatMessages");
  chatMessages.innerHTML = `
    <div class="message bot">
      <div class="message-bubble">
        Hello! I'm your AI Recruiter Coach. I've analyzed your profile and target ${data.role} role. Let's start the mock interview. Ready?
        <br><br>
        <strong>"${firstQuestion}"</strong>
      </div>
    </div>
  `;

  interviewMessages = [
    { role: "model", content: `Hello! I'm your AI Recruiter Coach. I've analyzed your profile and target ${data.role} role. Let's start the mock interview. Ready? \n\n"${firstQuestion}"` }
  ];

  document.getElementById("feedbackHud").classList.add("hidden");
  document.getElementById("chatInput").value = "";
}

async function handleUserAnswer() {
  const textInput = document.getElementById("chatInput");
  const text = textInput.value.trim();
  if (!text) return;

  const chatMessages = document.getElementById("chatMessages");
  
  chatMessages.innerHTML += `
    <div class="message user">
      <div class="message-bubble">${text}</div>
    </div>
  `;
  textInput.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;

  interviewMessages.push({ role: "user", content: text });

  const loadId = "load-" + Date.now();
  chatMessages.innerHTML += `
    <div class="message bot" id="${loadId}">
      <div class="message-bubble">Analyzing answer structure and computing feedback points...</div>
    </div>
  `;
  chatMessages.scrollTop = chatMessages.scrollHeight;

  try {
    const data = PROFILES[currentRoleKey];
    const response = await fetch("/api/interview/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: interviewMessages,
        category: selectedQuestionCategory,
        role: data.role
      })
    });

    if (!response.ok) throw new Error("Chat failed");
    const result = await response.json();

    document.getElementById(loadId).remove();

    interviewMessages.push({ role: "model", content: result.reply });

    chatMessages.innerHTML += `
      <div class="message bot">
        <div class="message-bubble">${result.reply.replace(/\n/g, "<br>")}</div>
      </div>
    `;

    if (result.feedback) {
      const hud = document.getElementById("feedbackHud");
      hud.classList.remove("hidden");
      document.getElementById("hudConfidence").style.width = `${result.feedback.confidence}%`;
      document.getElementById("hudClarity").style.width = `${result.feedback.clarity}%`;
      document.getElementById("hudAccuracy").style.width = `${result.feedback.accuracy}%`;

      const interviewReadyVal = document.getElementById("txtInterviewReady");
      let currentScore = parseInt(interviewReadyVal.innerText);
      if (currentScore < 90) {
        currentScore += 3;
        interviewReadyVal.innerText = `${currentScore}%`;
        document.getElementById("barInterviewReady").style.width = `${currentScore}%`;
      }
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;
  } catch (err) {
    console.error(err);
    document.getElementById(loadId).remove();
    chatMessages.innerHTML += `
      <div class="message bot">
        <div class="message-bubble text-rose">Error communicating with interviewer: ${err.message}</div>
      </div>
    `;
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// --- 9. AI Resume Builder & Editor ---
function setupResumeBuilder() {
  const manualBtn = document.getElementById("btnManualBuilder");
  const aiBtn = document.getElementById("btnAiBuilder");
  const form = document.getElementById("resumeForm");
  const aiPromptBox = document.getElementById("aiPromptBox");
  const exportBtn = document.getElementById("btnExportPdf");
  const templateDropdown = document.getElementById("templateDropdown");

  // Mode toggling
  manualBtn.addEventListener("click", () => {
    manualBtn.classList.add("active");
    aiBtn.classList.remove("active");
    form.classList.remove("hidden");
    aiPromptBox.classList.add("hidden");
  });

  aiBtn.addEventListener("click", () => {
    aiBtn.classList.add("active");
    manualBtn.classList.remove("active");
    form.classList.add("hidden");
    aiPromptBox.classList.remove("hidden");
  });

  // Event inputs listener to sync preview sheet in real time
  document.querySelectorAll("#resumeForm input, #resumeForm textarea").forEach(input => {
    input.addEventListener("input", syncResumePreviewSheet);
  });

  // AI build triggering simulation
  document.getElementById("btnTriggerAiBuild").addEventListener("click", async () => {
    const prompt = document.getElementById("aiPromptInput").value.trim();
    if (!prompt) {
      alert("Please input details or prompt goals first!");
      return;
    }

    const triggerBtn = document.getElementById("btnTriggerAiBuild");
    triggerBtn.innerText = "Generating optimized layout...";
    triggerBtn.disabled = true;

    try {
      const data = PROFILES[currentRoleKey];
      const response = await fetch("/api/rewrite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          originalSummary: prompt,
          style: "faang",
          role: data.role
        })
      });

      if (!response.ok) throw new Error("Generation failed");
      const result = await response.json();

      document.getElementById("resSummary").value = result.rewrittenSummary;
      document.getElementById("resSkills").value = data.interviewProbs.map(p => p.topic.split(" ")[0]).join(", ") + ", Docker, AWS";
      document.getElementById("resProjects").value = `${data.projects[0].name}: Architected using ${data.projects[0].tech}. Deployed scalable container builds on cloud nodes, improving overall latency response and security parameters.`;
      
      syncResumePreviewSheet();
      triggerBtn.innerText = "Auto-Generate ATS Resume";
      triggerBtn.disabled = false;
      
      alert("AI optimization applied! Check structural enhancements in preview sheet.");
    } catch (err) {
      console.error(err);
      triggerBtn.innerText = "Auto-Generate ATS Resume";
      triggerBtn.disabled = false;
      alert("Error generating resume layout: " + err.message);
    }
  });

  // Template layout switcher
  templateDropdown.addEventListener("change", (e) => {
    const val = e.target.value;
    const sheet = document.getElementById("resumeSheet");
    sheet.className = `resume-sheet ${val}`;
  });

  // Print Exporter
  exportBtn.addEventListener("click", () => {
    const printWindow = window.open("", "_blank");
    const sheetContent = document.getElementById("resumeSheet").outerHTML;
    const styleContent = `
      <style>
        body { margin: 0; padding: 2rem; background: #fff; font-family: sans-serif; display: flex; justify-content: center; }
        .resume-sheet { width: 100%; max-width: 800px; padding: 20px; box-shadow: none; border: none; color: #000; }
        .sheet-inner { display: flex; flex-direction: column; }
        .sheet-header { text-align: center; margin-bottom: 1rem; }
        .sheet-header h1 { font-size: 24px; margin: 0 0 5px; }
        .sheet-header .subtitle { font-size: 14px; font-weight: bold; text-transform: uppercase; color: #475569; }
        .contact-info { font-size: 12px; color: #475569; }
        .sheet-hr { border: 0; height: 1px; background: #94a3b8; margin: 10px 0 15px; }
        .sheet-section { margin-bottom: 15px; }
        .sheet-section h3 { font-size: 14px; font-weight: bold; border-bottom: 1px solid #000; padding-bottom: 3px; margin-bottom: 8px; }
        .section-content { font-size: 12px; line-height: 1.5; color: #1e293b; }
        .project-block { display: flex; flex-direction: column; }
        .project-header { display: flex; justify-content: space-between; font-size: 13px; font-weight: bold; margin-bottom: 4px; }
        .project-header span { font-weight: normal; color: #475569; }
        
        /* Startup Dark styling support in print */
        .resume-sheet.modern-startup { background: #000 !important; color: #fff !important; }
        .modern-startup .subtitle { color: #818cf8 !important; }
        .modern-startup .contact-info { color: #94a3b8 !important; }
        .modern-startup .sheet-hr { background: #334155 !important; }
        .modern-startup .sheet-section h3 { border-color: #334155 !important; color: #a78bfa !important; }
        .modern-startup .section-content { color: #cbd5e1 !important; }
        .modern-startup .project-header { color: #fff !important; }
        .modern-startup .project-header span { color: #94a3b8 !important; }
      </style>
    `;

    printWindow.document.write("<html><head><title>ATS_Resume_Export</title>" + styleContent + "</head><body>" + sheetContent + "</body></html>");
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  });

  // Setup side-by-side rewriter tab switches
  const rewriterButtons = document.querySelectorAll(".rewriter-tabs .btn-tab");
  rewriterButtons.forEach(btn => {
    btn.addEventListener("click", async () => {
      rewriterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentRewriteStyle = btn.getAttribute("data-style");
      
      const data = PROFILES[currentRoleKey];
      const originalTextVal = data.originalSummary;

      document.getElementById("improvedText").innerText = "...Generating AI rewrite...";

      try {
        const response = await fetch("/api/rewrite", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            originalSummary: originalTextVal,
            style: currentRewriteStyle,
            role: data.role
          })
        });

        if (!response.ok) throw new Error("Rewrite failed");
        const rewriteResult = await response.json();

        data.improvedSummary[currentRewriteStyle] = rewriteResult.rewrittenSummary;
        document.getElementById("improvedText").innerText = `"${rewriteResult.rewrittenSummary}"`;
      } catch (err) {
        console.error(err);
        document.getElementById("improvedText").innerText = `"${data.improvedSummary[currentRewriteStyle]}" (Offline Fallback)`;
      }
    });
  });
}

function syncResumePreviewSheet() {
  const name = document.getElementById("resName").value.trim() || "JOHN DOE";
  const title = document.getElementById("resTitle").value.trim() || "Target Job Title";
  const summary = document.getElementById("resSummary").value.trim() || "Professional Summary content details...";
  const skills = document.getElementById("resSkills").value.trim() || "Core Tech Gaps...";
  const projects = document.getElementById("resProjects").value.trim() || "Project descriptions...";

  document.getElementById("viewName").innerText = name.toUpperCase();
  document.getElementById("viewTitle").innerText = title;
  document.getElementById("viewSummary").innerText = summary;
  document.getElementById("viewSkills").innerText = skills;

  // Split project field by first colon for header naming
  const viewProjectName = document.getElementById("viewProjectName");
  const viewProjectTech = document.getElementById("viewProjectTech");
  const viewProjects = document.getElementById("viewProjects");

  if (projects.includes(":")) {
    const parts = projects.split(":");
    viewProjectName.innerText = parts[0].trim();
    
    const secondPart = parts[1].trim();
    if (secondPart.includes("Built") || secondPart.includes("using")) {
      const match = secondPart.match(/(?:using|with|via)\s+([^.]+)/i);
      viewProjectTech.innerText = match ? match[1].trim() : "";
    } else {
      viewProjectTech.innerText = "MERN, Docker";
    }
    viewProjects.innerText = secondPart;
  } else {
    viewProjectName.innerText = "Project Highlight";
    viewProjectTech.innerText = "Stack Info";
    viewProjects.innerText = projects;
  }
}
