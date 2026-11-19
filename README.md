# Jesse Mae C. Santos — Professional IT & Frontend Portfolio

A high-performance, modern, and accessible developer portfolio built with **React**, **TypeScript**, and **Tailwind CSS**. Specifically designed to showcase frontend engineering mastery, UI/UX aesthetics, and full-stack capabilities to recruiters and hiring managers.

---

## 🚀 Quick Start

### 1. Run Locally
Open your terminal in this directory and run:
```bash
# Start development server
npm run dev
```
Open your browser at `http://localhost:3000`.

### 2. Build for Production
```bash
npm run build
```
The optimized static build will be placed in the `dist/` directory, ready for 1-click deployment on **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 🎨 Theme & Design Highlights

- **Palette**: Deep Zinc/Slate (`#020617` / `#0f172a`) with **Electric Indigo & Royal Brand Accents** (`#6366f1`) and **Emerald** (`#10b981`) for passing status & certifications.
- **Typography**: Clean modern sans-serif paired with monospace code accents (`JetBrains Mono`).
- **Recruiter Scannability**: Built around the 60-30-10 visual hierarchy rule and accessible contrast ratios.

---

## 📁 Project Structure

```
jesse-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky responsive navigation with status indicator
│   │   ├── Hero.tsx               # Value proposition, CTAs, and interactive spec card
│   │   ├── SkillsSection.tsx      # Tabbed technical capabilities matrix
│   │   ├── ProjectsSection.tsx    # Filterable project case studies with ISO/IEC specs
│   │   ├── ExperienceSection.tsx  # Interactive leadership and career timeline
│   │   ├── CertificationsSection.tsx # Official Salesforce, S.T.E.P, and Education credentials
│   │   ├── InteractiveContact.tsx # Functional contact form with copy email action
│   │   └── Footer.tsx             # Back to top & quick navigation
│   ├── data/
│   │   └── portfolioData.ts       # Centralized resume data file for easy updates
│   ├── App.tsx                    # Root application container
│   ├── main.tsx                   # React entrypoint
│   └── index.css                  # Tailwind styles and custom scrollbars
├── index.html                     # HTML5 shell with SEO metadata
├── tailwind.config.js             # Tailwind design system configuration
└── vite.config.ts                 # Vite bundler configuration
```

---

## 🌐 Free 1-Click Deployment to Vercel

1. Push this project to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Jesse Mae Santos IT Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/jesse-portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository `jesse-portfolio`.
4. Click **Deploy**! Your site is live in under 60 seconds with free HTTPS and a custom URL.
