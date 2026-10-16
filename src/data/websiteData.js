export const websiteData = {
  brand: {
    name: "Akshar",
    tagline: "Digital Excellence & Creative Engineering",
    shortBio: "Building high-performance React web applications, scalable architectures, and memorable interactive experiences.",
    year: new Date().getFullYear(),
    status: "Available for new projects"
  },
  
  navigation: [
    { label: "Overview", href: "#overview" },
    { label: "Features", href: "#features" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    badge: "Next-Gen React Web Application",
    headlineStart: "Architecting the Future with ",
    headlineGradient: "Akshar Digital",
    headlineEnd: " Experience",
    subheading: "A bespoke modern React architecture engineered for speed, aesthetic finesse, and effortless scalability.",
    stats: [
      { value: "99.9%", label: "Uptime & Reliability" },
      { value: "<100ms", label: "Ultra-Fast Latency" },
      { value: "100%", label: "Modular Component Driven" },
      { value: "24/7", label: "Active Continuous Support" }
    ]
  },

  features: [
    {
      id: "fullstack-react",
      title: "Modern React Architecture",
      icon: "Code2",
      description: "Component-driven design with hooks, state isolation, and performant virtual DOM rendering out of the box.",
      tags: ["React 19", "Vite", "Modular CSS"]
    },
    {
      id: "design-system",
      title: "Curated Design System",
      icon: "Palette",
      description: "Glassmorphism styling, harmonious HSL color dynamics, smooth micro-interactions, and responsive typography.",
      tags: ["Dark Mode", "Fluid Spacing", "Glass UI"]
    },
    {
      id: "speed-optimization",
      title: "Blazing Performance",
      icon: "Zap",
      description: "Lightning-fast HMR via Vite, optimized asset bundling, and clean semantic DOM hierarchy for instant load speeds.",
      tags: ["Fast HMR", "Sub-second Load", "Clean Code"]
    },
    {
      id: "scalable-structure",
      title: "Extensible Folder Architecture",
      icon: "FolderGit2",
      description: "Organized into components, data stores, layouts, and styles so your team can scale without friction.",
      tags: ["Clean Code", "Maintainable", "Ready to Scale"]
    },
    {
      id: "mobile-responsive",
      title: "Omni-device Responsiveness",
      icon: "Smartphone",
      description: "Pixel-perfect rendering on desktop, tablet, and mobile with fluid grids and touch-optimized navigation.",
      tags: ["Mobile First", "Adaptive", "Cross-Browser"]
    },
    {
      id: "seo-accessibility",
      title: "SEO & Accessibility Ready",
      icon: "ShieldCheck",
      description: "Semantic HTML5 tags, accessible ARIA roles, descriptive metadata, and fast web vitals compliance.",
      tags: ["A11y", "Semantic HTML", "SEO Optimized"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Akshar Cloud Nexus",
      category: "Web Platform",
      description: "High-throughput cloud dashboard with real-time analytics, dynamic telemetry cards, and multi-tenant controls.",
      metrics: "50k+ Active Users",
      tech: ["React", "Analytics", "Vite"],
      accentColor: "#6366f1"
    },
    {
      id: 2,
      title: "HyperFlow Studio",
      category: "Creative Tool",
      description: "Interactive visual workflow builder with fluid drag-and-drop state machines and instant preview rendering.",
      metrics: "60 FPS Canvas",
      tech: ["Modern Hooks", "Glassmorphic UI", "SVG"],
      accentColor: "#8b5cf6"
    },
    {
      id: 3,
      title: "Apex E-Commerce Engine",
      category: "Digital Commerce",
      description: "Ultra-fast headless shopping experience equipped with instant client-side cart transitions and product search.",
      metrics: "99.8% Conversion Score",
      tech: ["React", "CSS Modules", "Responsive"],
      accentColor: "#ec4899"
    }
  ],

  about: {
    title: "Crafting impactful software that stands out",
    bio: "Akshar represents a commitment to clean craftsmanship, architectural clarity, and design elegance. Built with modern web standards, this React template empowers you to quickly deploy high-caliber websites, portfolios, or enterprise landing pages.",
    values: [
      { title: "Precision Engineering", desc: "Writing readable, clean, and maintainable code without unnecessary bloat." },
      { title: "Aesthetic Excellence", desc: "Crafting interfaces that look extraordinary and feel fluid to interact with." },
      { title: "Developer Velocity", desc: "Structuring projects so adding new features takes minutes, not hours." }
    ]
  },

  contact: {
    title: "Let's Build Something Exceptional",
    subtitle: "Have an ambitious project or want to collaborate? Send a message and let's bring your ideas to life.",
    email: "contact@akshar.dev",
    location: "Global / Remote",
    availability: "Accepting new inquiries"
  }
};
