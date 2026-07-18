const { GoogleGenerativeAI } = require("@google/generative-ai");

// Resume data context chunks
const resumeChunks = [
  {
    section: "Header / Contact Info",
    content: "Name: Kshitij Bangar. Role: AI Engineer | LLM Applications & DevOps. Education: B.E. AI & Data Science, SPPU (2026), CGPA: 9.40/10. Contact: Phone +91-9923377946, Email kshitijbangar18@gmail.com, Pune, Maharashtra, India. LinkedIn: linkedin.com/in/kshitij-bangar-1809kb, GitHub: github.com/kb1218."
  },
  {
    section: "Professional Profile",
    content: "AI & Data Science engineer (SPPU, CGPA 9.40) with hands-on experience building and deploying LLM-based systems: Retrieval-Augmented Generation (RAG) pipelines, Model Context Protocol (MCP) integrations, and locally-hosted multilingual chatbots using Ollama (Phi-4-mini, Mistral, DeepSeek). Comfortable working across the full AI application stack — from model selection and prompt engineering to containerised deployment on AWS. Builds fast using AI-assisted development (Cursor, Claude Code, GitHub Copilot) without compromising on code quality. Looking for an AI Engineer role to ship production LLM applications from day one."
  },
  {
    section: "DevOps Internship Experience at Cloudblitz",
    content: "DevOps Trainee (Internship) at Cloudblitz, Pune (July 2025 – March 2026). Key accomplishments: Set up Docker containers and wrote Compose files for multi-service apps; understood image layering, volumes, and inter-container networking. Configured Jenkins and GitHub Actions pipelines for automated build, test, and deploy - compared both tools hands-on on the same codebase. Provisioned AWS resources (EC2, S3, IAM) using Terraform in lab environments; followed IaC practices throughout. Wrote Kubernetes manifests (Deployments, Services), used kubectl to inspect pods and manage replica sets. Set up Prometheus and Grafana locally, connected to a running app's metrics endpoint, and configured basic alerting rules."
  },
  {
    section: "Project: Multilingual Enterprise Document Chatbot",
    content: "Multilingual Enterprise Document Chatbot using Ollama (Phi-4-mini, Mistral, DeepSeek), RAG, MCP, and Python. Details: Built and deployed local LLM chatbots for an enterprise client to query and summarise large multi-page documents, running Ollama-hosted models for private, on-premise inference. Implemented a Retrieval-Augmented Generation (RAG) pipeline with vector search to ground chatbot responses in client-specific documents and reduce hallucinations on domain queries. Integrated Model Context Protocol (MCP) servers to connect the chatbot to external tools and data sources for multi-step retrieval and action-taking. Added a multilingual voice assistant layer (speech-to-text / text-to-speech) so users could query documents in their own language. Worked as an AI Engineer on a short-term client engagement, taking the chatbot from prototype to a working client-facing deployment."
  },
  {
    section: "Project: TalentIQ - Student Career Readiness Platform",
    content: "TalentIQ - Student Career Readiness Platform built using Python, Flask, RAG, scikit-learn, Pandas, and SQL. Details: Final year capstone (team of 4) — web app that profiles students on skills and projects, not just marks, to help them become job-ready. Built a RAG-based chatbot that retrieves personalised career advice from a curated knowledge base using vector search, refined through iterative prompt engineering. Trained a scikit-learn classifier to group students into readiness tiers using cross-validation and confusion-matrix evaluation, after EDA and cleaning on the sample student dataset."
  },
  {
    section: "Project: TRIPO - Social Travel Platform",
    content: "TRIPO - Social Travel Platform built using Supabase, Netlify, JavaScript, and SQL. Details: Founded and designed a platform where solo travellers can schedule trips, discover companions, and connect via group chat, using Supabase (auth, real-time DB, row-level security) and Netlify with CI/CD from GitHub. Designed the trust & safety layer — verified profiles, ratings/reviews system, and gender-based visibility controls — to address safety and loneliness in local travel."
  },
  {
    section: "Project: Containerised App Deployment (Clones)",
    content: "Containerised App Deployment of Netflix & Myntra Clones using Docker, Jenkins, GitHub Actions, AWS EC2, and Nginx. Details: Dockerised front-end clone apps and hosted them on AWS EC2 behind Nginx; Jenkins pipeline rebuilds and redeploys automatically on every Git push."
  },
  {
    section: "Technical Skills",
    content: "Technical Skills listing: AI & LLM Engineering: RAG, Model Context Protocol (MCP), Ollama (Phi-4-mini, Mistral, DeepSeek), Prompt Engineering, scikit-learn, basic NLP, model evaluation. AI-Assisted Development: Cursor, Claude Code, GitHub Copilot/Codex, prompt-driven ('vibe coding') workflows. Programming & Tools: Python (Pandas, NumPy, Matplotlib, Seaborn), SQL, Excel, Jupyter Notebooks. DevOps & Cloud: Docker, Jenkins, GitHub Actions, Kubernetes (basics), Terraform (basics), AWS (EC2, S3, IAM), Linux/Bash. Web & Databases: Supabase, Netlify, PostgreSQL, MongoDB, REST APIs, Flask. Other: Git & GitHub, Agile basics, Prometheus, Grafana, Certifications: Self-Paced Data Science Course from DevTown (Nov 2024)."
  }
];

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    // 1. Retrieval: Find top matching resume chunks
    const query = prompt.toLowerCase();
    let bestChunks = [];
    
    // Simple word-match ranker (simulates vector/keyword search RAG)
    const scoredChunks = resumeChunks.map(chunk => {
      const words = query.split(/\s+/);
      let matches = 0;
      words.forEach(w => {
        if (w.length > 2 && chunk.content.toLowerCase().includes(w)) {
          matches++;
        }
      });
      return { chunk, score: matches };
    });

    // Sort by score descending and take the top 2 matching chunks
    scoredChunks.sort((a, b) => b.score - a.score);
    
    // If no word hits, grab Profile and Skills as default context
    if (scoredChunks[0].score === 0) {
      bestChunks = [resumeChunks[1], resumeChunks[7]];
    } else {
      bestChunks = scoredChunks.slice(0, 2).map(sc => sc.chunk);
    }

    const retrievedContext = bestChunks.map(c => `[Section: ${c.section}]: ${c.content}`).join("\n\n");
    const sourcesUsed = bestChunks.map(c => c.section).join(" & ");

    // 2. Check if GEMINI_API_KEY is configured
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(200).json({
        answer: "Gemini API offline: I am Kshitij's local backup bot. Please set up your GEMINI_API_KEY in the Vercel project environment settings to activate the real Gemini model! In the meantime, here is what I found in Kshitij's resume: \n\n" + bestChunks[0].content,
        source: `${sourcesUsed} (Key Config Required)`
      });
    }

    // 3. Generation: Call Gemini API using the retrieved context
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: `You are a helpful AI Resume Assistant representing Kshitij Bangar. 
You will be asked questions about Kshitij. 
Use the following retrieved context from Kshitij's actual resume to answer the question.
If the answer cannot be found in the context, politely state that you don't have that information on Kshitij's resume.
Keep your response professional, positive, concise, and focused on Kshitij's skills in AI, data science, and DevOps.

Retrieved Context:
${retrievedContext}
`
    });

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.3
      }
    });

    const responseText = result.response.text();

    return res.status(200).json({
      answer: responseText.trim(),
      source: sourcesUsed
    });

  } catch (error) {
    console.error("RAG Gemini Error:", error);
    return res.status(500).json({ error: 'RAG generation failed', details: error.message });
  }
};
