export const profile = {
  name: "Timothy Marcelleon",
  title: "Front-End Engineer",
  location: "Adelaide, South Australia",
  workRights: "Full Australian Working Rights",
  workRightsDetail:
    "Open to Adelaide, Sydney, Melbourne, or remote roles anywhere in Australia.",
  phone: "0468-459-432",
  email: "timothy.m121212@gmail.com",
  linkedin: "https://linkedin.com/in/timothy-marcelleon-160083175",
  linkedinLabel: "linkedin.com/in/timothy-marcelleon-160083175",
  github: "https://github.com/TimothyMarcelleon",
  githubLabel: "github.com/TimothyMarcelleon",
  liveUrl: "https://timothy-portfolio-gamma.vercel.app",
  cvUrl: "/Timothy_Marcelleon_CV.pdf",
  avatar: "/timothy.jpg",
  journey: ["Jakarta", "Taipei", "Adelaide"] as const,
  summary:
    "Front-End Engineer with 5+ years of experience building high-performance web applications using React.js and TypeScript across e-commerce and banking. Proven record of delivering scalable, user-centric interfaces, maintaining stability under high-traffic loads, and translating complex business requirements into clean, maintainable front-end architecture.",
  skills: {
    "Front-End": [
      "React.js",
      "Next.js",
      "Nuxt.js",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "React Query",
      "GraphQL",
      "REST APIs",
      "Webpack",
      "Socket.IO",
    ],
    "Back-End & Data": [
      "Node.js",
      "SQL",
      "MySQL",
      "PHP",
      "Python",
      "C++",
      "Java",
      "ERD & Data Modeling",
      "API Integration",
      "System Architecture",
    ],
    "Tools & Practices": [
      "Git/GitHub",
      "Jest",
      "New Relic",
      "Agile Development",
      "SOLID Principles",
      "Log Analysis",
      "PNPM/NPM",
    ],
    Cloud: ["Google Cloud Platform (GCP)", "Amazon Web Services (AWS)"],
  },
  experience: [
    {
      role: "Mid-Senior Front-End Software Engineer",
      company: "Xinchuan Management",
      period: "June 2023 – Present",
      place: "Taipei, Taiwan",
      sector: "Electronics & Semiconductor",
      highlights: [
        "Shipped 3,400+ GitHub commits and 315+ merged pull requests across 10+ production web and admin platforms (HOKI Foods, HOKI SIM/eSIM Kiosks, Voucher E-Commerce, Rewards, CRM & Auth), serving 30,000+ users and handling 3,000+ daily orders.",
        "Led the end-to-end Vue-to-React migration of the HOKI Foods Admin & Operations platform — store onboarding, Google Maps reverse-geocoding address assistance, merchant payment approvals, refunds & penalties, device rentals, and CSV/Excel report centers.",
        "Engineered a shared RBAC authentication SDK (PermissionProvider) adopted platform-wide, centralising role-based access control and permission checks across every admin surface.",
        "Designed and built a real-time Socket.IO server on Node.js powering live chat between mobile apps and internal admin tools, cutting cross-team response time.",
        "Partnered with stakeholders to translate client requirements into Entity-Relationship Diagrams (ERDs), improving database design accuracy and reducing engineering rework.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Tokopedia",
      period: "July 2021 – November 2022",
      place: "Jakarta, Indonesia",
      sector: "E-commerce (now Tokopedia-TikTok Shop)",
      highlights: [
        "Managed payment flows across Risk and Payment teams for a platform processing 5M+ daily transactions.",
        "Achieved 100% TypeScript coverage, reducing bugs by ~15%, while sustaining stability under 50,000+ requests/second at peak traffic.",
        "Diagnosed and resolved complex payment-module bugs directly impacting 50M+ users, using New Relic to monitor logs and flag security anomalies.",
        "Maintained core payment services processing 10B+ IDR in monthly transaction volume.",
        "Built reusable, pluggable front-end components, cutting development time by ~20% across teams.",
      ],
    },
    {
      role: "Frontend Web Developer",
      company: "Bank BRI – CERIA",
      period: "February 2020 – August 2020",
      place: "Jakarta, Indonesia",
      sector: "State-owned bank",
      highlights: [
        "Built CERIA, a responsive banking web application for Bank BRI.",
        "Developed core user flows including login, registration, OTP verification, and password recovery.",
        "Implemented the end-to-end PayLater business flow.",
      ],
    },
  ],
  education: [
    {
      degree: "Master's Degree",
      school: "Bina Nusantara University",
      period: "2021 – 2022",
      notes: [
        "Graduated with a 3.90 GPA.",
        'Published "Evaluating Waste\'s Hazardousness Using Fuzzy Logic and Simple Additive Weighting" in the Journal of Computer Science (JCS), 2023 — DOI: 10.3844/jcssp.2023.145.156.',
      ],
    },
    {
      degree: "Bachelor's Degree",
      school: "Bina Nusantara University",
      period: "2017 – 2021",
      notes: [
        "Focused coursework in Artificial Intelligence.",
        "Competed twice in the Indonesia National Contest (INC) using C++.",
        "Earned an A in Algorithms & Data Structures and an A- in Competitive Programming.",
      ],
    },
  ],
  caseStudies: [
    {
      id: "payment-risk-engine",
      company: "Tokopedia",
      role: "Software Engineer — Risk & Payment",
      period: "Jul 2021 – Nov 2022",
      title: "High-Throughput Payment & Risk Engine Front-End",
      tagline:
        "Front-end systems for one of Indonesia's largest e-commerce platforms, serving 50M+ users.",
      scale: "50M+ users",
      problem:
        "Sustaining 5M+ daily transactions (10B+ IDR in monthly volume) and 50,000+ requests-per-second peak flash-sale loads across the Risk and Payment flows — where a single regression could stall checkout for millions of shoppers simultaneously.",
      decisions: [
        {
          heading: "100% strictly typed TypeScript",
          detail:
            "Delivered a fully typed codebase backed by comprehensive Jest test coverage, cutting production bugs by roughly 15% and catching payment-logic regressions before they reached customers.",
        },
        {
          heading: "Pluggable payment-method architecture",
          detail:
            "Designed a composable, pluggable component system so squads could ship new payment methods (e-wallets, virtual accounts, cards) independently, accelerating delivery by roughly 20% across teams.",
        },
        {
          heading: "Real-time APM & anomaly detection",
          detail:
            "Instrumented New Relic telemetry across checkout and risk flows to surface latency spikes and suspicious activity in real time, keeping the platform stable through 50,000+ RPS peaks.",
        },
      ],
      metrics: [
        { label: "Daily transactions", value: "5M+" },
        { label: "Monthly volume", value: "10B+ IDR" },
        { label: "Peak throughput", value: "50,000+ RPS" },
        { label: "Users safeguarded", value: "50M+" },
        { label: "Bug reduction", value: "~15%" },
        { label: "Faster delivery", value: "~20%" },
      ],
      stack: ["TypeScript", "React.js", "Jest", "New Relic", "REST APIs", "Webpack"],
    },
    {
      id: "realtime-ops-platform",
      company: "Xinchuan Management",
      role: "Mid-Senior Front-End Software Engineer",
      period: "Jun 2023 – Present",
      title: "Real-Time Multi-Platform Operations & Live Chat",
      tagline:
        "Unified front-end architecture across 10+ production platforms serving 30,000+ users.",
      scale: "30,000+ users",
      problem:
        "Unifying front-end architecture across 10+ production web and admin platforms — including HOKI Foods, HOKI SIM/eSIM Kiosks, Voucher E-Commerce, Rewards, and CRM & Auth — spanning Voucher, SIM Card, and Food Ordering services that handle 3,000+ daily orders, while giving internal admins instant, bidirectional visibility into mobile customer activity.",
      decisions: [
        {
          heading: "Custom Node.js + Socket.IO chat server",
          detail:
            "Built an event-driven, real-time chat server enabling instant bidirectional messaging between mobile customers and internal web admins, with room and session state management for concurrent conversations.",
        },
        {
          heading: "Vue → React platform migration",
          detail:
            "Led the end-to-end migration of the HOKI Foods Admin & Operations platform from Vue to React — covering store onboarding, Google Maps reverse-geocoding address assistance, merchant payment approvals, refunds & penalties, device rentals, and CSV/Excel report centers.",
        },
        {
          heading: "Shared RBAC authentication SDK",
          detail:
            "Engineered a platform-wide PermissionProvider SDK that centralised role-based access control and permission checks, replacing duplicated auth logic across every admin surface.",
        },
        {
          heading: "Stakeholder-driven ERD & data modelling",
          detail:
            "Translated complex client requirements into Entity-Relationship Diagrams with stakeholders, improving database design accuracy and cutting engineering rework.",
        },
      ],
      metrics: [
        { label: "Users served", value: "30,000+" },
        { label: "Daily orders", value: "3,000+" },
        { label: "Production platforms", value: "10+" },
        { label: "GitHub commits", value: "3,400+" },
        { label: "Merged pull requests", value: "315+" },
      ],
      stack: [
        "React.js",
        "Vue.js",
        "Node.js",
        "Socket.IO",
        "TypeScript",
        "ERD & Data Modeling",
      ],
    },
    {
      id: "digital-banking-onboarding",
      company: "Bank BRI — CERIA",
      role: "Frontend Web Developer",
      period: "Feb 2020 – Aug 2020",
      title: "Digital Banking Onboarding & PayLater Platform",
      tagline:
        "Consumer web banking and credit onboarding for one of Indonesia's largest state-owned banks.",
      scale: "State-owned bank",
      problem:
        "Shipping a responsive consumer web banking product from the ground up, where account onboarding and PayLater credit needed to be both bank-grade secure (OTP, password recovery) and frictionless enough for a mainstream retail audience.",
      decisions: [
        {
          heading: "Multi-step authentication state machines",
          detail:
            "Built end-to-end registration, OTP verification, login, and password-recovery flows as resilient state machines, gracefully handling edge cases like expired codes and interrupted sessions.",
        },
        {
          heading: "Resilient PayLater checkout & credit workflow",
          detail:
            "Implemented the core PayLater business flow end-to-end, from credit eligibility steps through checkout confirmation, on a fully responsive banking UI.",
        },
      ],
      metrics: [
        { label: "Core flows shipped", value: "4" },
        { label: "Platform", value: "Responsive Web" },
        { label: "Product", value: "PayLater Credit" },
      ],
      stack: ["JavaScript", "React.js", "REST APIs", "CSS"],
    },
  ],
} as const;
