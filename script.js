// --- STATE AND DATA ---

// Skills Data
const skillsData = [
  // AI & LLM
  { name: "RAG Pipelines", category: "ai", icon: "fa-brain", desc: "Retrieval-Augmented Generation" },
  { name: "Model Context Protocol (MCP)", category: "ai", icon: "fa-network-wired", desc: "Connecting LLMs to external tools" },
  { name: "Ollama (Phi-4, Mistral, DeepSeek)", category: "ai", icon: "fa-robot", desc: "Local open-source LLM inference" },
  { name: "Prompt Engineering", category: "ai", icon: "fa-keyboard", desc: "Iterative testing & contextual framing" },
  { name: "scikit-learn", category: "ai", icon: "fa-chart-line", desc: "Traditional ML, evaluation & classification" },
  { name: "Model Evaluation", category: "ai", icon: "fa-vial-circle-check", desc: "Cross-validation, confusion matrices" },
  
  // DevOps & Cloud
  { name: "Docker & Compose", category: "devops", icon: "fa-docker", desc: "Containerisation, multi-service apps" },
  { name: "Jenkins & GitHub Actions", category: "devops", icon: "fa-circle-play", desc: "Automated CI/CD build & deploy" },
  { name: "Kubernetes (Basics)", category: "devops", icon: "fa-cubes", desc: "Deployments, services, replica sets" },
  { name: "Terraform (Basics)", category: "devops", icon: "fa-cloud-arrow-up", desc: "Infrastructure as Code (IaC)" },
  { name: "AWS Cloud (EC2, S3, IAM)", category: "devops", icon: "fa-aws", desc: "Cloud computing & access controls" },
  { name: "Prometheus & Grafana", category: "devops", icon: "fa-chart-pie", desc: "Systems metrics monitoring & alerts" },

  // Programming & Tools
  { name: "Python", category: "prog", icon: "fa-code", desc: "Pandas, NumPy, Matplotlib, Seaborn" },
  { name: "SQL", category: "prog", icon: "fa-database", desc: "Relational queries, database designs" },
  { name: "Bash & Linux", category: "prog", icon: "fa-terminal", desc: "Shell scripting & host automation" },
  { name: "Jupyter Notebooks", category: "prog", icon: "fa-book-open", desc: "EDA, data cleaning & research workflows" },

  // Web & DB
  { name: "Supabase & Netlify", category: "web", icon: "fa-cloud", desc: "Serverless backend & static hosting" },
  { name: "PostgreSQL & MongoDB", category: "web", icon: "fa-table", desc: "Relational & Document databases" },
  { name: "Flask & REST APIs", category: "web", icon: "fa-gears", desc: "Backend web microservices in Python" }
];

// Projects Data
const projectsData = [
  {
    title: "Multilingual Enterprise Document Chatbot",
    category: "ai",
    tech: ["Ollama", "RAG", "MCP", "Python", "TTS/STT"],
    icon: "fa-robot",
    desc: "Built local LLM chatbots running Ollama (Phi-4-mini, Mistral, DeepSeek) for on-premise query resolution. Developed a RAG pipeline utilizing vector search to ground chatbot responses on client-specific documents, minimizing hallucinations. Integrated Model Context Protocol (MCP) servers to link the chatbot with external data sources for multi-step tool calls, and created a voice assistant layer (Speech-To-Text / Text-To-Speech).",
    github: "https://github.com/kb1218",
    demo: "#"
  },
  {
    title: "TalentIQ - Student Career Readiness Platform",
    category: "ai",
    tech: ["Flask", "RAG", "scikit-learn", "Pandas", "SQL"],
    icon: "fa-graduation-cap",
    desc: "Capstone project web application profiling student capability (skills and projects) over simple grade cards to increase employment readiness. Built a custom RAG-based career advisor bot using prompt engineering and semantic vector retrieval. Trained a scikit-learn classifier to group students into three readiness tiers using exploratory data analysis.",
    github: "https://github.com/kb1218",
    demo: "#"
  },
  {
    title: "TRIPO - Social Travel Platform",
    category: "web",
    tech: ["Supabase", "JavaScript", "Netlify", "PostgreSQL"],
    icon: "fa-compass",
    desc: "Designed and implemented a social networking engine where solo travelers coordinate trips, join community chats, and locate travel partners. Secured user interactions through Supabase Row-Level Security, authentication services, and PostgreSQL databases. Built CI/CD pipelines via GitHub onto Netlify hosts.",
    github: "https://github.com/kb1218",
    demo: "#"
  },
  {
    title: "Containerised App Deployment",
    category: "devops",
    tech: ["Docker", "Jenkins", "GitHub Actions", "AWS EC2", "Nginx"],
    icon: "fa-server",
    desc: "Dockerised cloning implementations of Netflix and Myntra frontend applications. Deployed services to AWS EC2 instances running behind Nginx reverse proxy engines. Constructed automatic build and redeployment flows using Jenkins automation and GitHub webhooks.",
    github: "https://github.com/kb1218",
    demo: "#"
  }
];

// RAG Chatbot Knowledge Base
const chatbotKnowledge = [
  {
    keys: ["cgpa", "grade", "marks", "score", "gpa", "academic"],
    answer: "Kshitij holds a final CGPA of 9.40 / 10 in his Bachelor of Engineering program.",
    source: "Education Section"
  },
  {
    keys: ["mcp", "model context protocol", "external tool"],
    answer: "Kshitij has integrated Model Context Protocol (MCP) servers with local LLM agents to allow chatbots to securely access external files, tools, and custom databases dynamically.",
    source: "Projects: Multilingual Chatbot"
  },
  {
    keys: ["rag", "retrieval", "vector", "hallucination", "embeddings"],
    answer: "He designs Retrieval-Augmented Generation (RAG) pipelines leveraging vector search and embeddings to ground LLM chatbots, which effectively minimizes hallucinations in domain-specific tasks.",
    source: "Projects: TalentIQ & Multilingual Chatbot"
  },
  {
    keys: ["ollama", "local", "phi", "mistral", "deepseek", "inference"],
    answer: "Kshitij builds local LLM setups running Ollama-hosted models (Phi-4-mini, Mistral, DeepSeek) for secure, on-premise private enterprise document query systems.",
    source: "Technical Skills (AI)"
  },
  {
    keys: ["devops", "docker", "kubernetes", "k8s", "jenkins", "terraform", "aws", "prometheus", "grafana"],
    answer: "His DevOps toolkit includes containerising multi-service apps via Docker, orchestrating clusters with Kubernetes, building automation in Jenkins/GitHub Actions, managing IaC via Terraform, provisioning AWS cloud, and monitoring metrics with Prometheus/Grafana.",
    source: "Experience: DevOps Trainee"
  },
  {
    keys: ["chatbot", "multilingual", "document chatbot", "voice"],
    answer: "He engineered an enterprise document chatbot with a multilingual voice assistant layer (STT/TTS), Ollama private inference, and vector RAG pipelines to query large enterprise documents.",
    source: "Projects: Multilingual Chatbot"
  },
  {
    keys: ["talentiq", "career", "readiness", "classifier", "flask"],
    answer: "TalentIQ is his final year capstone web app which utilizes scikit-learn classification models to analyze and group student readiness, paired with a custom career guidance bot.",
    source: "Projects: TalentIQ"
  },
  {
    keys: ["tripo", "travel", "supabase", "netlify"],
    answer: "TRIPO is a social travel engine built with JavaScript, Supabase (auth/real-time DB), and Netlify, facilitating safe solo traveler group matching and routing.",
    source: "Projects: TRIPO"
  },
  {
    keys: ["clones", "netflix", "myntra", "deployment"],
    answer: "He configured containerised hostings for Netflix/Myntra frontend clones on AWS EC2 using Docker, Nginx web routing, and automated Jenkins pipelines.",
    source: "Projects: Deployments"
  },
  {
    keys: ["skills", "tools", "languages", "python", "programming"],
    answer: "Kshitij works with Python (Pandas, NumPy, ML packages), SQL, Bash scripting, Docker, Kubernetes, Jenkins, Terraform, AWS, Supabase, and Flask.",
    source: "Technical Skills Grid"
  },
  {
    keys: ["contact", "email", "phone", "reach", "hire", "socials", "linkedin", "github"],
    answer: "You can reach Kshitij Bangar via Email (kshitijbangar18@gmail.com), Phone (+91-9923377946), LinkedIn (linkedin.com/in/kshitij-bangar-1809kb), or check out his Github (github.com/kb1218).",
    source: "Contact Details"
  },
  {
    keys: ["education", "university", "sppu", "pune", "degree", "b.e"],
    answer: "He is completing his B.E. in Artificial Intelligence & Data Science at Savitribai Phule Pune University, Pune (Nov 2022 – July 2026), graduating with a CGPA of 9.40.",
    source: "Education Section"
  }
];

// --- MAIN CONTROLLER & INITIALIZATION ---

document.addEventListener("DOMContentLoaded", () => {
  // 1. Current Year in Footer
  document.getElementById("current-year").innerText = new Date().getFullYear();

  // 2. Custom Cursor Follow
  const cursor = document.getElementById("cursor-glow");
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // 3. Header Scrolled Styling
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 4. Mobile Burger Navigation
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");
  const navLinkItems = document.querySelectorAll(".nav-links li a");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });

  navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-active");
      burger.classList.remove("toggle");
    });
  });

  // 5. Scroll Reveal Effect
  const revealElements = document.querySelectorAll(".reveal");
  const revealOnScroll = () => {
    revealElements.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 120;
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger initial check

  // 6. Neural Network Particle Canvas
  initParticleNetwork();

  // 7. Typist Effect (Hero Roles)
  initTypewriter();

  // 8. Generate Skill Grid
  renderSkills("all");

  // 9. Generate Projects Grid
  renderProjects("all");

  // 10. Mouse Glare Effect on Cards
  initCardGlareEffect();

  // 11. Initial Welcome message for Terminal
  initTerminalWelcome();
});

// --- TYPEWRITER EFFECT ---
function initTypewriter() {
  const words = ["AI Engineering Solutions.", "Automated DevOps Pipelines.", "Production RAG Chatbots.", "Scalable Web Architectures."];
  let i = 0;
  let timer;

  function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
      if (word.length > 0) {
        document.getElementById('typewriter-text').innerHTML += word.shift();
      } else {
        setTimeout(deletingEffect, 2000);
        return false;
      }
      timer = setTimeout(loopTyping, 80);
    };
    loopTyping();
  }

  function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
      if (word.length > 0) {
        word.pop();
        document.getElementById('typewriter-text').innerHTML = word.join("");
      } else {
        if (words.length > (i + 1)) {
          i++;
        } else {
          i = 0;
        }
        setTimeout(typingEffect, 500);
        return false;
      }
      timer = setTimeout(loopDeleting, 40);
    };
    loopDeleting();
  }

  typingEffect();
}

// --- PARTICLE BACKGROUND CANVAS ---
function initParticleNetwork() {
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");
  let particlesArray = [];
  let animationFrameId;

  // Set sizing
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Mouse tracking (for canvas hover linkages)
  const mouse = {
    x: null,
    y: null,
    radius: 120
  };

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Particle Class
  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    update() {
      // Check borders
      if (this.x > canvas.width || this.x < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.directionY = -this.directionY;
      }

      // Check mouse collision
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < mouse.radius + this.size) {
        if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
          this.x += 3;
        }
        if (mouse.x > this.x && this.x > this.size * 10) {
          this.x -= 3;
        }
        if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
          this.y += 3;
        }
        if (mouse.y > this.y && this.y > this.size * 10) {
          this.y -= 3;
        }
      }

      // Move particle
      this.x += this.directionX;
      this.y += this.directionY;
      this.draw();
    }
  }

  // Create array
  function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.width * canvas.height) / 11000;
    numberOfParticles = Math.min(numberOfParticles, 120); // Cap particles count

    const colors = [
      "rgba(0, 242, 254, 0.4)",  // Accent cyan
      "rgba(138, 43, 226, 0.4)", // Accent violet
      "rgba(16, 185, 129, 0.2)"  // Accent green
    ];

    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * 2 + 1;
      let x = Math.random() * (canvas.width - size * 2) + size * 2;
      let y = Math.random() * (canvas.height - size * 2) + size * 2;
      let directionX = (Math.random() * 0.8) - 0.4;
      let directionY = (Math.random() * 0.8) - 0.4;
      let color = colors[Math.floor(Math.random() * colors.length)];

      particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
  }

  // Draw lines linking nodes
  function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        let dx = particlesArray[a].x - particlesArray[b].x;
        let dy = particlesArray[a].y - particlesArray[b].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 110) {
          opacityValue = 1 - (distance / 110);
          ctx.strokeStyle = `rgba(138, 43, 226, ${opacityValue * 0.12})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
    connect();
    animationFrameId = requestAnimationFrame(animate);
  }

  init();
  animate();

  // Re-adjust on canvas resizing
  window.addEventListener("resize", () => {
    init();
  });
}

// --- CARD MOUSE GLARE EFFECT ---
function initCardGlareEffect() {
  document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".skill-card, .project-card, .chat-panel, .contact-form-panel");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

// --- RENDER SKILLS MATRIX ---
function renderSkills(categoryFilter = "all") {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = "";

  const filtered = categoryFilter === "all" 
    ? skillsData 
    : skillsData.filter(s => s.category === categoryFilter);

  filtered.forEach(skill => {
    const card = document.createElement("div");
    card.className = "skill-card glass-panel";
    card.innerHTML = `
      <div class="skill-icon"><i class="fa-solid ${skill.icon}"></i></div>
      <div class="skill-info">
        <h4>${skill.name}</h4>
        <p>${skill.desc}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterSkills(element, category) {
  // Update active tab styling
  const buttons = document.querySelectorAll(".skill-tab-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  element.classList.add("active");

  renderSkills(category);
}

// --- RENDER PROJECTS GRID ---
function renderProjects(categoryFilter = "all") {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";

  const filtered = categoryFilter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === categoryFilter);

  filtered.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card glass-panel";
    
    const tagsHTML = project.tech.map(t => `<span class="project-tag">${t}</span>`).join("");
    
    card.innerHTML = `
      <div class="project-header">
        <div class="project-icon" style="color: var(--accent-cyan)"><i class="fa-solid ${project.icon}"></i></div>
        <div class="project-links">
          <a href="${project.github}" target="_blank" class="project-link-icon" title="View Source"><i class="fa-brands fa-github"></i></a>
          ${project.demo !== "#" ? `<a href="${project.demo}" target="_blank" class="project-link-icon" title="Live Demo"><i class="fa-solid fa-external-link-alt"></i></a>` : ""}
        </div>
      </div>
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
      </div>
      <div class="project-footer">
        <div class="project-tech">
          ${tagsHTML}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterProjects(element, category) {
  const buttons = document.querySelectorAll(".project-filter-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  element.classList.add("active");

  renderProjects(category);
}

// --- DEVELOPER TERMINAL CONSOLE ---
const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");
const terminalBody = document.getElementById("terminal-body");

function initTerminalWelcome() {
  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const command = terminalInput.value.trim();
      if (command) {
        processTerminalCommand(command);
      }
      terminalInput.value = "";
    }
  });

  // Keep focus in terminal input when clicking inside the body
  terminalBody.addEventListener("click", () => {
    terminalInput.focus();
  });
}

function executeTerminalCommand(cmd) {
  processTerminalCommand(cmd);
}

function processTerminalCommand(rawCmd) {
  const cmd = rawCmd.toLowerCase().trim();
  
  // Create output mirror line
  const inputLine = document.createElement("div");
  inputLine.className = "terminal-output-line";
  inputLine.innerHTML = `<span class="terminal-prompt">kshitij_bangar$</span> <span style="color: var(--text-primary);">${rawCmd}</span>`;
  terminalOutput.appendChild(inputLine);

  const responseLine = document.createElement("div");
  responseLine.className = "terminal-output-line";
  responseLine.style.color = "var(--text-secondary)";

  switch (cmd) {
    case "help":
      responseLine.innerHTML = `
Available commands:
  <span style="color: var(--accent-cyan); font-weight: bold;">about</span>    - Display summary profile details
  <span style="color: var(--accent-cyan); font-weight: bold;">skills</span>   - List Kshitij's primary engineering toolset
  <span style="color: var(--accent-cyan); font-weight: bold;">projects</span> - Detail featured engineering applications
  <span style="color: var(--accent-cyan); font-weight: bold;">devops</span>   - Outline cloud/CI/CD trainee roles
  <span style="color: var(--accent-cyan); font-weight: bold;">contact</span>  - View developer contact channels
  <span style="color: var(--accent-cyan); font-weight: bold;">clear</span>    - Wipe the console screen history
  <span style="color: var(--accent-cyan); font-weight: bold;">date</span>     - Get current system date
  <span style="color: var(--accent-cyan); font-weight: bold;">sudo</span>     - ...Admin validation check
      `;
      break;

    case "about":
      responseLine.innerHTML = `
<span style="color: var(--text-primary); font-weight: bold;">KSHITIJ BANGAR - AI Engineer & DevOps Trainee</span>
-----------------------------------------------------
AI & Data Science Student graduating Savitribai Phule Pune University in 2026.
Academic average of <span style="color: var(--accent-cyan); font-weight: bold;">9.40 / 10 CGPA</span>.
Specializes in building LLM application pipelines (RAG, MCP, Ollama) and deployment orchestration.
Looking for high-impact roles to deploy production systems.
      `;
      break;

    case "skills":
      responseLine.innerHTML = `
<span style="color: var(--text-primary); font-weight: bold;">CORE TOOLSET</span>
-----------------------------------------------------
* <span style="color: var(--accent-cyan);">AI & LLM:</span> RAG architectures, MCP tools, Ollama hosting, prompt engineering, scikit-learn
* <span style="color: var(--accent-cyan);">DevOps:</span> Docker & Compose, Jenkins & GitHub Actions pipelines, Kubernetes, Terraform, AWS
* <span style="color: var(--accent-cyan);">Languages:</span> Python (Pandas/NumPy), SQL database management, Bash scripting
* <span style="color: var(--accent-cyan);">Frameworks:</span> Supabase engine, Flask REST server, Netlify static deploys
      `;
      break;

    case "projects":
      responseLine.innerHTML = `
<span style="color: var(--text-primary); font-weight: bold;">FEATURED PROJECTS</span>
-----------------------------------------------------
1. <span style="color: var(--accent-cyan); font-weight: bold;">Multilingual Enterprise Chatbot</span>: Local Ollama hosting + Voice STT/TTS + RAG + MCP server tools
2. <span style="color: var(--accent-cyan); font-weight: bold;">TalentIQ Platform</span>: Career advisor Flask RAG chatbot + scikit-learn classifier
3. <span style="color: var(--accent-cyan); font-weight: bold;">TRIPO Social</span>: Traveler matching system with Supabase backend and Netlify hosts
4. <span style="color: var(--accent-cyan); font-weight: bold;">App Deployment Clones</span>: Netflix/Myntra clones deployed on AWS EC2 behind Nginx proxies
      `;
      break;

    case "devops":
      responseLine.innerHTML = `
<span style="color: var(--text-primary); font-weight: bold;">DEVOPS ROLE SUMMARY (Cloudblitz Internship)</span>
-----------------------------------------------------
* Configured Docker configurations & Compose volume mounts for microservices
* Engineered build pipelines comparing Jenkins and GitHub Actions workflows
* Managed AWS resource pools (EC2, S3 bucket storage) using Terraform IaC
* Configured cluster monitoring metrics using Prometheus database and Grafana UI
      `;
      break;

    case "contact":
      responseLine.innerHTML = `
<span style="color: var(--text-primary); font-weight: bold;">CONTACT CHANNELS</span>
-----------------------------------------------------
* <span style="color: var(--accent-cyan);">Email:</span> kshitijbangar18@gmail.com
* <span style="color: var(--accent-cyan);">Phone:</span> +91-9923377946
* <span style="color: var(--accent-cyan);">LinkedIn:</span> linkedin.com/in/kshitij-bangar-1809kb
* <span style="color: var(--accent-cyan);">GitHub:</span> github.com/kb1218
      `;
      break;

    case "clear":
      terminalOutput.innerHTML = "";
      return;

    case "date":
      responseLine.innerHTML = `System Date: ${new Date().toString()}`;
      break;

    case "sudo":
      responseLine.innerHTML = `<span style="color: var(--accent-orange); font-weight: bold;">[WARNING] Unauthorized admin initialization request. Event has been logged.</span>`;
      break;

    default:
      responseLine.innerHTML = `Command not recognized: <span style="color: #ef4444;">${rawCmd}</span>. Type <span style="color: var(--accent-cyan); font-weight: bold;">help</span> for instructions.`;
      break;
  }

  terminalOutput.appendChild(responseLine);
  
  // Auto Scroll Terminal Body to bottom
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

// --- RAG RESUME AI CHATBOTPLAYGROUND ---
const chatWindow = document.getElementById("chat-window");
const chatInput = document.getElementById("chat-input");

function askChatbot(question) {
  chatInput.value = question;
  handleSendChat();
}

function handleSendChat() {
  const query = chatInput.value.trim();
  if (!query) return;

  // Append user bubble
  appendChatBubble(query, "user");
  chatInput.value = "";

  // Append typing indicator
  const indicator = appendTypingIndicator();

  // Simulate RAG lookup latency
  setTimeout(() => {
    // Remove typing indicator
    indicator.remove();

    // RAG Search Logic
    const response = queryRAGResume(query);
    appendChatBubble(response.answer, "ai", response.source);
  }, 750);
}

function appendChatBubble(text, sender, source = null) {
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${sender}`;
  
  if (sender === "ai") {
    // Typing simulation on initial text load
    let currentText = "";
    let i = 0;
    
    // Quick typing speed
    const typeLetter = () => {
      if (i < text.length) {
        currentText += text.charAt(i);
        bubble.innerHTML = currentText;
        i++;
        chatWindow.scrollTop = chatWindow.scrollHeight;
        setTimeout(typeLetter, 8);
      } else {
        // Typing finished, append source block if present
        if (source) {
          const sourceBlock = document.createElement("div");
          sourceBlock.className = "chat-bubble-source";
          sourceBlock.innerHTML = `<i class="fa-solid fa-server"></i> Retrieved context: <strong>${source}</strong>`;
          bubble.appendChild(sourceBlock);
          chatWindow.scrollTop = chatWindow.scrollHeight;
        }
      }
    };
    typeLetter();
  } else {
    bubble.innerText = text;
  }

  chatWindow.appendChild(bubble);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function appendTypingIndicator() {
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble ai";
  bubble.innerHTML = `
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  chatWindow.appendChild(bubble);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  return bubble;
}

// Simulated RAG Engine
function queryRAGResume(query) {
  const lowercaseQuery = query.toLowerCase();
  
  // Search knowledge base for key hits
  let bestMatch = null;
  let maxHits = 0;

  chatbotKnowledge.forEach(item => {
    let hits = 0;
    item.keys.forEach(k => {
      if (lowercaseQuery.includes(k)) {
        hits++;
      }
    });
    if (hits > maxHits) {
      maxHits = hits;
      bestMatch = item;
    }
  });

  if (bestMatch && maxHits > 0) {
    return {
      answer: bestMatch.answer,
      source: bestMatch.source
    };
  } else {
    // Default reply when query isn't matched
    return {
      answer: "I couldn't find a direct match in Kshitij's resume for that question. You can try asking about his 'CGPA', 'Ollama chatbot project', 'DevOps tools', or his 'internship experience'!",
      source: "System Knowledge Base"
    };
  }
}

// --- SECURE MESSAGE SUBMISSION ---
function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("form-name").value.trim();
  const email = document.getElementById("form-email").value.trim();
  const message = document.getElementById("form-message").value.trim();

  if (!name || !email || !message) return;

  const btn = event.target.querySelector("button[type='submit']");
  const originalHTML = btn.innerHTML;

  btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Encrypting & Sending...`;
  btn.style.pointerEvents = "none";

  // Simulate secure network transaction
  setTimeout(() => {
    btn.innerHTML = `<i class="fa-solid fa-check"></i> Message Transmitted!`;
    btn.style.background = "linear-gradient(90deg, var(--accent-green), var(--accent-green))";
    btn.style.boxShadow = "0 0 15px rgba(16, 185, 129, 0.4)";
    
    // Clear inputs
    document.getElementById("contact-form").reset();

    // Revert button styling after 3 seconds
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.background = "";
      btn.style.boxShadow = "";
      btn.style.pointerEvents = "auto";
    }, 3000);

  }, 1500);
}
