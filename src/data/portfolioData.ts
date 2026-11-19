export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  description: string;
  highlights: string[];
  tags: string[];
  category: 'Full-Stack' | 'Frontend / UI' | 'Client Work';
  metrics?: string;
  /** Short label shown in the project's side box (e.g. "Client Capstone"). */
  badge: string;
  /** Highlight the badge in green (used for the capstone). */
  badgeEmphasis?: boolean;
  /** Key facts shown in the project's side box. Only list facts that are true for this project. */
  specs: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  imageGradient: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; level?: 'Advanced' | 'Proficient' | 'Familiar'; highlight?: boolean }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: string;
  points: string[];
  skillsUsed: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badgeType: 'Cloud/CRM' | 'Professional' | 'Writing';
}

export const PERSONAL_INFO = {
  name: "Jesse Mae C. Santos",
  headline: "Frontend-Focused Developer & UI/UX Designer",
  subheadline: "4th-Year BSIT Student majoring in Web and Mobile Application Development at Bulacan State University.",
  bio: "I bridge the gap between creative visual design and robust code. With hands-on experience leading client-facing web systems in React, Vite, and Firebase, alongside an active editorial layout design background, I specialize in building responsive, accessible, and human-centric digital products.",
  location: "Bulacan, Philippines",
  email: "sntsjessemae@gmail.com",
  phone: "+63 967 849 3440",
  status: "Actively seeking an IT / Frontend Internship",
  links: {
    github: "https://github.com/inkedjesse",
    linkedin: "https://linkedin.com",
    email: "mailto:sntsjessemae@gmail.com",
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Designing modern, performant, and responsive interfaces with clean component architectures.",
    iconName: "Layout",
    skills: [
      { name: "React", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "HTML5 & CSS3", highlight: true },
      { name: "Tailwind CSS / Responsive Design", highlight: true },
      { name: "Component Architecture" },
      { name: "Web Accessibility (a11y)" },
    ]
  },
  {
    title: "Backend & Databases",
    description: "Architecting relational schemas, REST APIs, and server-side application logic.",
    iconName: "Server",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "MySQL & Database Admin", highlight: true },
      { name: "PHP", highlight: false },
      { name: "Python / Django", highlight: false },
      { name: "RESTful API Integration", highlight: true },
      { name: "Systems Analysis & Design" },
    ]
  },
  {
    title: "UI/UX & Visual Design",
    description: "Crafting visual hierarchies, typography, and interactive prototypes for print and digital.",
    iconName: "Palette",
    skills: [
      { name: "Figma (Prototyping)", highlight: true },
      { name: "Adobe Photoshop", highlight: true },
      { name: "Typography & Layout", highlight: true },
      { name: "Canva & Digital Graphics" },
      { name: "User Acceptance Testing (UAT)" },
      { name: "Design Systems & Wireframing" },
    ]
  },
  {
    title: "Enterprise, Tools & QA",
    description: "Industry platforms, Agile project workflows, and software quality compliance.",
    iconName: "ShieldCheck",
    skills: [
      { name: "Salesforce Certified Administrator", highlight: true },
      { name: "Git & Version Control", highlight: true },
      { name: "Agile / Scrum Methodologies" },
      { name: "ISO/IEC 25010 Quality Standards" },
      { name: "XAMPP / Local Dev" },
      { name: "Lucidchart & draw.io" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "cherubim-memorial",
    title: "Cherubim of Heaven Memorial Park Management System",
    subtitle: "Design and Development of a Web-Based Memorial Services Management System with Integrated POS — Hagonoy, Bulacan",
    role: "Lead Author, Project Manager & Front-End Developer",
    description: "A cloud-based memorial services management system with integrated Point-of-Sale (POS) built for Cherubim of Heaven Memorial Park in Hagonoy, Bulacan (50+ monthly burials). Replaces manual logbooks, envelope files, and spreadsheets with a unified platform covering burial records, satellite grave inventory mapping, POS and installment tracking, wake space scheduling, contract renewal notifications, and role-based portals for admin, staff, and families.",
    highlights: [
      "Built with React, Vite, Google Firebase (Cloud Firestore & Firebase Authentication), and Leaflet.js, deployed on Vercel across six Agile Scrum sprints with cemetery administrator sprint reviews.",
      "Developed an interactive Leaflet.js satellite grave map builder for staff and a family portal grave locator with route directions from the park entrance and live GPS navigation.",
      "Implemented integrated POS transactions with automatic Senior/PWD discounts, pre-need installment tracking, wake booking conflict detection, 30-day contract expiry alerts, role-based access control (RBAC), and timestamped audit logs.",
      "Passed 36/36 functional test cases and 50 sequential reliability transactions (0% error rate, 100% data integrity, 0 unauthorized role-swap cases); evaluated by 43 respondents (4 park staff, 34 family users, 5 IT experts) at 4.61/5.00 ('Excellent') under ISO/IEC 25010:2023 and 83.31 on the System Usability Scale (SUS)."
    ],
    tags: ["React", "Vite", "Firebase Firestore", "Firebase Auth", "Leaflet.js", "Vercel", "POS & RBAC", "Agile Scrum", "ISO/IEC 25010:2023"],
    category: "Full-Stack",
    metrics: "ISO/IEC 25010:2023 Overall Score: 4.61/5.00 (Excellent) • SUS Score: 83.31/100 • 36/36 Test Cases Passed (N = 43)",
    badge: "Client Capstone",
    badgeEmphasis: true,
    specs: [
      { label: "Stack", value: "React · Vite · Firebase · Leaflet.js" },
      { label: "Deployment", value: "Vercel (Cloud)" },
      { label: "Methodology", value: "Agile Scrum (6 Sprints)" },
      { label: "ISO/IEC 25010:2023", value: "4.61 / 5.00 (Excellent)" },
      { label: "Usability (SUS)", value: "83.31 / 100 (N = 43)" },
      { label: "QA & Reliability", value: "36/36 Tests · 0% Error Rate" },
    ],
    imageGradient: "from-blue-600/30 via-indigo-600/20 to-slate-900",
  },
  {
    id: "cursor-publication",
    title: "CURSOR Student Publication Editorial & Digital Layouts",
    subtitle: "Official University Student Publication of Bulacan State University",
    role: "Layout Artist & Designer",
    description: "Spearheaded the visual layout, typographic rhythm, and print/digital publication assets for the official university publication, communicating complex campus news and features under strict editorial deadlines.",
    highlights: [
      "Applied strict visual hierarchy, grid systems, and typographic pairing across multi-page editorial releases.",
      "Collaborated in a fast-paced environment with editors, photojournalists, and writers.",
      "Crafted promotional assets and social banners with Adobe Photoshop and Canva."
    ],
    tags: ["Adobe Photoshop", "Visual Hierarchy", "Typography", "Editorial Layout", "Canva", "Print & Digital"],
    category: "Frontend / UI",
    metrics: "Print and digital releases for the official Bulacan State University student publication",
    badge: "University Publication",
    specs: [
      { label: "Medium", value: "Print & Digital" },
      { label: "Tools", value: "Photoshop / Canva" },
      { label: "Period", value: "April 2025 – Present" },
    ],
    imageGradient: "from-purple-600/30 via-pink-600/20 to-slate-900",
  },
  {
    id: "autumn-treats",
    title: "Autumn Treats E-Commerce & Brand Growth",
    subtitle: "Online Bakeshop Digital Presence & Order Fulfillment",
    role: "Social Media Manager & Digital Marketer",
    description: "Orchestrated social commerce strategy, visual branding, and customer communication workflows to drive online orders and retain repeat bakery clientele.",
    highlights: [
      "Coordinated direct orders and real-time customer messaging, maintaining 99%+ prompt response rates.",
      "Designed marketing collateral and video reels using CapCut, Photoshop, and Canva.",
      "Tracked customer inquiries and order fulfillment logs to minimize delivery discrepancies."
    ],
    tags: ["Digital Marketing", "Social Media", "Customer Care", "Graphic Design", "Content Strategy"],
    category: "Client Work",
    metrics: "Customer communication, order coordination, and marketing content for an online bakeshop",
    badge: "Small Business",
    specs: [
      { label: "Channel", value: "Online / Social Media" },
      { label: "Tools", value: "Canva / Photoshop / CapCut" },
      { label: "Period", value: "August 2023 – Present" },
    ],
    imageGradient: "from-amber-600/30 via-orange-600/20 to-slate-900",
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Project Manager & Front-End Developer",
    organization: "Capstone Project — Cherubim of Heaven Memorial Park",
    period: "Oct 2026 – Present",
    type: "Client-Facing Capstone",
    points: [
      "Led the conceptualization, project administration, and frontend development of a cloud-based memorial services management system with integrated POS for Cherubim of Heaven Memorial Park (Hagonoy, Bulacan).",
      "Built with React, Vite, Google Firebase (Cloud Firestore & Auth), and Leaflet.js, and deployed on Vercel over six Agile Scrum sprints with client sprint reviews.",
      "Executed functional testing (36/36 test cases passed) and reliability testing (50 transactions, 0% error rate) with role-based access control and audit logging.",
      "Evaluated with 43 respondents under ISO/IEC 25010:2023, achieving 4.61/5.00 ('Excellent'; Security & Safety 4.80, Functionality 4.76) and an 83.31 System Usability Scale (SUS) score."
    ],
    skillsUsed: ["React", "Vite", "Firebase Firestore", "Leaflet.js", "Vercel", "Agile Scrum", "ISO/IEC 25010:2023"]
  },
  {
    role: "Layout Artist",
    organization: "CURSOR – Bulacan State University Publication",
    period: "April 2025 – Present",
    type: "University Organization",
    points: [
      "Designed and laid out print and digital releases for the official university student publication.",
      "Applied advanced typography, margin spacing, and visual hierarchy using Adobe Photoshop and Canva.",
      "Collaborated closely with writers and editors under tight publishing deadlines."
    ],
    skillsUsed: ["Adobe Photoshop", "Canva", "Visual Hierarchy", "Typography", "Team Collaboration"]
  },
  {
    role: "Social Media Manager & Marketer",
    organization: "Autumn Treats (Online Bakeshop)",
    period: "August 2023 – Present",
    type: "Small Business Growth",
    points: [
      "Handled customer inquiries and order transactions with prompt, professional communication.",
      "Planned and executed digital campaigns that steadily boosted online brand presence and sales.",
      "Produced marketing graphics and short-form video reels with Photoshop and CapCut."
    ],
    skillsUsed: ["Digital Marketing", "Customer Service", "Graphic Design", "Content Planning"]
  },
  {
    role: "Salesforce Virtual Intern",
    organization: "SmartBridge (Salesforce-Supported Virtual Internship Program)",
    period: "November 2025",
    type: "Industry Internship",
    points: [
      "Acquired hands-on experience in Salesforce cloud architecture, CRM setup, and business automation fundamentals.",
      "Completed practical module exercises in object modeling, process automation, and administrative security.",
      "Earned official program completion credentials."
    ],
    skillsUsed: ["Salesforce CRM", "Cloud Applications", "Business Process Automation"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Salesforce Certified Platform Administrator",
    issuer: "Salesforce",
    date: "September 2026",
    credentialId: "8162415",
    badgeType: "Cloud/CRM"
  },
  {
    name: "Call Center 101 & Professional Readiness Training",
    issuer: "S.T.E.P Training and Development Services (Province of Bulacan)",
    date: "May 2026",
    badgeType: "Professional"
  },
  {
    name: "The 7 Days Copywriting Challenge",
    issuer: "The Copywriting Dojo (by Sensei Raf Marabut)",
    date: "April 2023",
    badgeType: "Writing"
  }
];

export const EDUCATION = {
  degree: "Bachelor of Science in Information Technology",
  major: "Major in Web and Mobile Application Development",
  institution: "Bulacan State University",
  graduation: "Expected 2027",
  coursework: [
    "Web Application Development",
    "Mobile Application Development",
    "Database Administration & SQL",
    "Systems Analysis and Design",
    "Software Quality Assurance & Testing",
    "Business Process / IT Operations"
  ]
};
