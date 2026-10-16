# Akshar Home Physio Care — Web Platform

> **Clinical-Grade In-Home Physical Therapy & Rehabilitation Application**  
> Architected with React 19, Vite 8, and modern modular Vanilla CSS.

---

## 🏥 Clinical Track Record & Highlights

- **5,400+** Patients Treated at Home
- **12+ Years** Clinical & Post-Surgical Experience
- **98.6%** Documented Functional Recovery Rate
- **25+** MPT/BPT Certified, Background-Verified Physiotherapists
- **4.9 / 5.0** Patient Satisfaction Score (1,600+ Verified Reviews)
- **IAP Certified** (Indian Association of Physiotherapists)

---

## 🏛️ Senior Software Engineering Architecture

```text
akshar-physio-care/
├── index.html                   # SEO, OpenGraph tags, Google Fonts (Outfit & Plus Jakarta Sans)
├── vite.config.js               # Optimized Vite configuration
├── package.json                 # React 19 + lucide-react dependencies
├── public/
│   └── favicon.svg              # Medical rehabilitation emblem favicon
└── src/
    ├── data/
    │   └── physioData.js        # Single Source of Truth: metrics, treatments, team, testimonials, FAQs
    ├── styles/
    │   ├── variables.css        # Clinical color tokens (deep navy, medical teal, vital cyan)
    │   ├── animations.css       # Micro-animations, float, glow, and fade-in keyframes
    │   └── index.css            # Base resets, typography, container, custom scrollbar
    ├── components/
    │   ├── common/              # Atomic UI components
    │   │   ├── SectionHeader.jsx
    │   │   └── SectionHeader.css
    │   ├── layout/              # High-availability layouts
    │   │   ├── EmergencyBanner.jsx & .css   # Top clinical accreditation & instant helpline
    │   │   ├── Navbar.jsx & .css            # Glassmorphic header with mobile drawer
    │   │   └── Footer.jsx & .css            # Medical disclaimer & regional coverage
    │   ├── sections/            # Feature & business sections
    │   │   ├── Hero.jsx & .css              # Dynamic headline & interactive condition protocol finder
    │   │   ├── StatsStrip.jsx & .css        # Highlight strip: patients treated, experience, recovery
    │   │   ├── Services.jsx & .css          # 6 clinical disciplines with interactive protocols
    │   │   ├── CareProcess.jsx & .css       # 4-step home therapy workflow
    │   │   ├── AboutDoctor.jsx & .css       # Lead consultant Dr. Akshar Patel profile & credentials
    │   │   ├── Testimonials.jsx & .css      # Verified patient stories with recovery timelines
    │   │   ├── Faq.jsx & .css               # Interactive accordion with common queries
    │   │   └── BookingForm.jsx & .css       # In-home appointment form with reference ID confirmation
    │   └── ui/
    │       ├── FloatingCallPill.jsx & .css  # Instant WhatsApp & Phone call quick actions
    ├── App.jsx                  # Main orchestration component
    ├── App.css                  # Layout container styles
    └── main.jsx                 # Application entry point
```

---

## ⚙️ Prerequisites & System Requirements

> [!IMPORTANT]
> To run and build this application without compatibility errors, ensure your environment meets the minimum version criteria:

| Component | Required Version | Tested Environment | Purpose |
| :--- | :--- | :--- | :--- |
| **Node.js** | **`^20.19.0` or `>=22.12.0`** (Node 22 LTS recommended) | `v22.18.0` | Required by Vite 8 native ESM runtime |
| **npm** | **`>=10.0.0`** | `10.9.3` | Package manager |
| **React** | **`^19.2.0`** | `19.2.8` | Core UI library |
| **Vite** | **`^8.3.0`** | `8.3.4` | Development server and bundler |

> **Check your installed versions:**
> ```bash
> node -v
> npm -v
> ```
> *If your Node version is older than 20.19.0, upgrade via [nodejs.org](https://nodejs.org/) or use nvm: `nvm install 22 && nvm use 22`.*

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 📱 Features Included

1. **Interactive Condition Finder (Hero)**: Real-time protocol, session estimate, and recovery focus based on condition selection.
2. **Clinical Metrics Dashboard**: Instant credibility display for patients and families.
3. **In-Home Assessment Booking Form**: Multi-field triage (Condition, Age, Slot, Urgency, Landmark, Doctor Notes) with automatic booking reference generation (`APC-XXXXXX`).
4. **Floating Instant Support**: 1-click WhatsApp consultation & direct phone call.
5. **Mobile-First Responsive Design**: Optimized for elderly family members browsing on mobile devices.
