# Kshitij Bangar - Cybernetic Portfolio Website

This repository contains Kshitij's high-tech, futuristic developer portfolio website. It features interactive elements designed to highlight his expertise in AI engineering, RAG pipelines, and DevOps workflows.

## Key Standing Out Features:
- **Neural Network Canvas Background**: Draw nodes and connections that shift dynamically as users hover or scroll.
- **Interactive Developer Console**: A simulated Linux/AI terminal allowing users to type commands like `help`, `about`, `skills`, or click suggested command macros.
- **RAG Resume Chatbot Simulator**: A fully interactive chatbot which queries Kshitij's resume data using keyword matching, simulating the retrieval of facts with context source references.
- **Interactive Skills Matrix**: A filterable grid of skills that glow dynamically based on mouse position glare effects.
- **High-End Styling**: Dark cyber-glass aesthetic, custom neon scrollbars, pulsing gradient outlines, and fluid animations.

---

## Deployment Guide: Push to GitHub & Deploy to Vercel

Here are the step-by-step instructions to get this website live and configured with your custom domain.

### Step 1: Initialize Git and Push to GitHub

1. Open **Git Bash** or **PowerShell** in the project folder (`C:\Users\HP\.gemini\antigravity-ide\scratch\kshitij-portfolio`).
2. Initialize your local Git repository:
   ```bash
   git init
   ```
3. Add all files to staging:
   ```bash
   git add .
   ```
4. Commit the files:
   ```bash
   git commit -m "feat: initial commit of standout cyber portfolio"
   ```
5. Go to [GitHub](https://github.com) and create a **new public repository** named `kshitij-portfolio`. Do not initialize it with a README, license, or gitignore.
6. Copy the commands under the heading **"…or push an existing repository from the command line"** and execute them in your terminal. They should look like this:
   ```bash
   git branch -M main
   git remote add origin https://github.com/kb1218/kshitij-portfolio.git
   git push -u origin main
   ```

---

### Step 2: Deploy to Vercel

Vercel provides instant hosting for static sites with automated deployments on every git push.

1. Go to [Vercel](https://vercel.com) and log in using your **GitHub account**.
2. From the Vercel dashboard, click **"Add New..."** in the top-right corner, then select **"Project"**.
3. Under "Import Git Repository", locate your `kshitij-portfolio` repository and click **"Import"**.
4. In the configuration window:
   - Keep the project name as `kshitij-portfolio`.
   - **Framework Preset**: Keep it as **Other** (Vercel automatically detects plain HTML/CSS/JS).
   - **Root Directory**: Keep it as `./`.
   - You do not need to configure any Build Commands or Install Commands since this is a pure static website with no build step.
5. Click **"Deploy"**.
6. Within 10-15 seconds, your site will be built, and you'll receive a live `.vercel.app` staging URL!

---

### Step 3: Add Your Custom Domain

To link your personal domain (e.g., `kshitijbangar.com` or `kshitij.dev`):

1. Inside your Vercel project dashboard, click on **"Settings"** in the top navigation bar.
2. Select **"Domains"** from the left-hand menu.
3. In the input field, type your domain name (e.g., `kshitijbangar.com` or `www.kshitijbangar.com`) and click **"Add"**.
4. Vercel will ask if you want to redirect the apex domain to `www` or vice versa. Select the recommended setting and proceed.
5. Vercel will now show **DNS records** that need updating. Go to your domain provider (GoDaddy, Namecheap, Google Domains, Hostinger, etc.) and add these:

   - **For Apex Domain (e.g., `kshitijbangar.com`):**
     * **Type**: `A`
     * **Name**: `@` (or leave empty)
     * **Value**: `76.76.21.21`

   - **For Subdomain (e.g., `www.kshitijbangar.com`):**
     * **Type**: `CNAME`
     * **Name**: `www`
     * **Value**: `cname.vercel-dns.com.`

6. Once you save the DNS records at your registrar, Vercel will periodically check them. It will transition from a "Waiting for DNS propagation" status to active, and automatically issue a secure SSL certificate (`https://`). This propagation usually takes anywhere from 2 minutes to a few hours.

---

## Modifying the Website

- To update skills, add projects, or expand the chatbot knowledge base, edit the items in `script.js`.
- Any modifications pushed to your GitHub `main` branch will automatically trigger Vercel to rebuild and update the live site in real-time!
