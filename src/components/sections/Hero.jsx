import { useState } from 'react';
import { 
  PhoneCall, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  HeartPulse,
  Clock,
  Activity,
  Users
} from 'lucide-react';
import './Hero.css';

const QUICK_CONDITIONS = [
  {
    label: "Knee Replacement",
    protocol: "Post-Surgical Joint Mobilization & Gait Retraining",
    sessions: "15 - 20 Home Sessions",
    focus: "Restoring 110° flexion & unassisted walking",
    doctor: "Dr. Darshil Gandhi (Ortho)"
  },
  {
    label: "Slip Disc / Sciatica",
    protocol: "Targeted Electrotherapy (IFT) & Spine Decompression",
    sessions: "10 - 14 Home Sessions",
    focus: "Immediate radiating nerve pain relief",
    doctor: "Dr. Darshil Gandhi (Spine)"
  },
  {
    label: "Stroke Paralysis",
    protocol: "Neuroplasticity PNF Retraining & Limb Motor Recovery",
    sessions: "30+ Supervised Sessions",
    focus: "Regaining daily self-care & limb mobility",
    doctor: "Dr. Dhara Gandhi (Neuro)"
  },
  {
    label: "Senior Fall Prevention",
    protocol: "Geriatric Core Stability & Dynamic Balance Drills",
    sessions: "8 - 12 Home Sessions",
    focus: "Safe indoor walking & preventing hip fractures",
    doctor: "Dr. Dhara Gandhi (Geriatric)"
  }
];

export default function Hero({ hero, brand }) {
  const [selectedCondition, setSelectedCondition] = useState(QUICK_CONDITIONS[0]);

  return (
    <section id="overview" className="physio-hero-section">
      {/* Ambient Medical Glows */}
      <div className="ambient-teal-glow animate-pulse-glow" />
      <div className="ambient-cyan-glow animate-pulse-glow" />

      <div className="container physio-hero-container">
        {/* Left Column: Copy & Actions */}
        <div className="hero-text-block">
          <div className="badge-pill">
            <span className="dot" />
            <span>{hero.badge}</span>
          </div>

          <h1 className="physio-hero-title">
            {hero.titleStart}
            <span className="gradient-text">{hero.titleGradient}</span>
          </h1>

          <p className="physio-hero-subtitle">{hero.subtitle}</p>

          {/* Quick Action CTAs */}
          <div className="physio-hero-cta">
            <a href="#book-visit" className="btn btn-primary">
              <Calendar size={17} />
              <span>Book In-Home Assessment</span>
            </a>
            <a href={`tel:${brand.emergencyHotline.replace(/\s+/g, '')}`} className="btn btn-secondary hotline-cta-btn">
              <PhoneCall size={17} className="pulse-icon text-rose" />
              <span>Call Helpline: {brand.emergencyHotline}</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="hero-trust-list">
            {hero.trustBadges.map((badge, idx) => (
              <div key={idx} className="trust-item">
                <CheckCircle2 size={16} className="text-teal" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Visual Frame with Real In-Home Photo & Live Protocol Finder */}
        <div className="hero-visual-showcase">
          <div className="hero-photo-card">
            <img 
              src="/images/home-care-hero.jpg" 
              alt="Dr. Darshil and Dr. Dhara Gandhi certified physiotherapy session at home"
              className="hero-main-photo"
            />
            
            {/* Floating Live Badge Over Photo */}
            <div className="photo-floating-badge">
              <span className="live-therapist-dot" />
              <span>Active In-Home Visits In Progress</span>
            </div>

            {/* Bottom Interactive Triage Widget */}
            <div className="hero-condition-dock">
              <div className="dock-header">
                <div className="dock-title">
                  <Activity size={15} className="text-cyan" />
                  <span>Quick Recovery Protocol Finder</span>
                </div>
                <span className="dock-badge">Instant Preview</span>
              </div>

              <div className="dock-chips">
                {QUICK_CONDITIONS.map((cond) => (
                  <button
                    key={cond.label}
                    className={`dock-chip ${selectedCondition.label === cond.label ? 'active' : ''}`}
                    onClick={() => setSelectedCondition(cond)}
                  >
                    {cond.label}
                  </button>
                ))}
              </div>

              <div className="dock-preview animate-fade-in" key={selectedCondition.label}>
                <div className="dock-preview-line">
                  <span className="dock-label">Protocol:</span>
                  <strong>{selectedCondition.protocol}</strong>
                </div>
                <div className="dock-meta-row">
                  <div className="meta-pill">
                    <Clock size={13} className="text-teal" />
                    <span>{selectedCondition.sessions}</span>
                  </div>
                  <div className="meta-pill">
                    <HeartPulse size={13} className="text-cyan" />
                    <span>{selectedCondition.focus}</span>
                  </div>
                  <div className="meta-pill doctor-tag">
                    <Users size={13} className="text-emerald" />
                    <span>Lead: {selectedCondition.doctor}</span>
                  </div>
                </div>
              </div>

              <div className="dock-action-row">
                <a href="#book-visit" className="btn btn-primary btn-sm btn-dock-book">
                  <span>Book Visit For {selectedCondition.label}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
