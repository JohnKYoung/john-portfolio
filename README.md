# Software Validation Engineer Portfolio

A clean, modern, responsive personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed to highlight over 18 years of Quality Assurance experience across aviation safety, retail e-commerce integration, and public sector software systems.

---

## 🌟 Key Features

* **Responsive Design:** Optimized for seamless viewing across mobile, tablet, and desktop displays.
* **Dark / Light Mode Toggle:** Supports dynamic theme switching with local storage persistence and automatic system preference detection.
* **Structured Sections:**
  * **Hero:** High-impact introduction with quick navigation calls to action.
  * **Professional Bio:** Overview of validation engineering experience and operational focus.
  * **Background & Experience:** Key career milestones across *Luftfartsverket*, *IKEA*, and *Försäkringskassan*.
  * **Skills & Specialties:** Categorized breakdown of QA methodologies, domain expertise, and core competencies.
  * **Work Highlights:** Real-world validation project highlights including the Swedish Eurocat ATC display system upgrade.
  * **Contact Form:** Interactive inquiry form with client-side validation.
* **Smooth Navigation:** Sticky navbar with active section highlighting based on scroll position.

---

## 🛠️ Tech Stack & Dependencies

* **Frontend Library:** [React 18](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling & Design:** [Tailwind CSS v3](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Post-Processing:** PostCSS & Autoprefixer

---

## 📁 Project Architecture

```text
john-portfolio/
├── index.html              # HTML Entry Point
├── package.json            # Project Dependencies & Build Scripts
├── vite.config.js          # Vite Build & GitHub Pages Base Path Config
├── tailwind.config.js      # Tailwind Content Sources & Custom Utilities
├── postcss.config.js       # PostCSS & Autoprefixer Configuration
└── src/
    ├── main.jsx            # React Application Bootstrapper
    ├── index.css           # Global Tailwind CSS Directives
    └── App.jsx             # Main Portfolio Component (State, Content, UI)
🚀 Local Development Setup
Follow these steps to run the project locally on your machine:
Clone the repository:
Bash
git clone [https://github.com/johnkyoung/john-portfolio.git](https://github.com/johnkyoung/john-portfolio.git)
cd john-portfolio
Install dependencies:
Bash
npm install
Start the local development server:
Bash
npm run dev
Open in browser:
Navigate to http://localhost:5173/ in your browser.
🌐 Deploying to GitHub Pages (johnkyoung.github.io/john-portfolio)
To host this repository on GitHub Pages, follow these brief configuration steps:
1. Update vite.config.js
Ensure your vite.config.js file includes the repository base path:
JavaScript
import { defineConfig } from 'vite'
import react from '@vitejs.plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/john-portfolio/', // Matches repository name
})
2. Install gh-pages Helper
In your terminal, run:
Bash
npm install -D gh-pages
3. Add Deployment Scripts to package.json
Inside your package.json, add predeploy and deploy inside the "scripts" object:
JSON
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
4. Deploy to GitHub
Run the deploy command:
Bash
npm run deploy
Once published, your portfolio will be live at:
https://johnkyoung.github.io/john-portfolio/
👨‍💻 About John Young
Role: Software Validation Engineer
Specialties: System & Integration Testing, Web Application Validation, Defect Root Cause Analysis, QA Strategy.
Domain Focus: Aviation Safety (Air Traffic Control Systems), Retail/E-Commerce Integration, Public Sector Platforms.
Location: Sweden