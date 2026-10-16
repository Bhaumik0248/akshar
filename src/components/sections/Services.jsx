import { useState } from 'react';
import { 
  Activity, 
  Brain, 
  Stethoscope, 
  HeartPulse, 
  Flame, 
  Wind,
  CheckCircle2,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import './Services.css';

const ICON_MAP = {
  Activity: Activity,
  Brain: Brain,
  Stethoscope: Stethoscope,
  HeartPulse: HeartPulse,
  Flame: Flame,
  Wind: Wind
};

export default function Services({ services }) {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="treatments" className="services-section">
      <div className="container">
        <SectionHeader 
          badge="Specialized Clinical Disciplines"
          title="Hospital-Grade Physiotherapy in Your Home"
          subtitle="Our senior therapists bring specialized portable electrotherapy equipment, manual therapy expertise, and structured protocols for every major condition."
        />

        {/* Services Showcase Layout */}
        <div className="services-layout-grid">
          {/* Left Grid: Service Selection Cards */}
          <div className="services-cards-column">
            {services.map((item) => {
              const Icon = ICON_MAP[item.icon] || Activity;
              const isSelected = activeService.id === item.id;

              return (
                <div
                  key={item.id}
                  className={`service-mini-card ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveService(item)}
                >
                  <div className="service-mini-icon">
                    <Icon size={20} />
                  </div>
                  <div className="service-mini-text">
                    <div className="service-mini-top">
                      <h3 className="service-mini-title">{item.title}</h3>
                      <span className="service-mini-badge">{item.badge}</span>
                    </div>
                    <p className="service-mini-summary">{item.summary}</p>
                  </div>
                  <ChevronRight size={18} className="service-mini-arrow" />
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Treatment Protocol Deep-Dive */}
          <div className="services-detail-column">
            <div className="detail-glass-card animate-fade-in" key={activeService.id}>
              <div className="detail-badge-row">
                <span className="badge-pill">
                  <span className="dot" />
                  <span>{activeService.badge}</span>
                </span>
                <span className="detail-sessions-note">100% In-Home Supervised</span>
              </div>

              <h3 className="detail-title">{activeService.title}</h3>
              <p className="detail-desc">{activeService.summary}</p>

              <div className="detail-conditions-box">
                <h4 className="detail-section-title">Common Conditions Treated:</h4>
                <ul className="conditions-checklist">
                  {activeService.conditions.map((cond, idx) => (
                    <li key={idx} className="condition-item">
                      <CheckCircle2 size={16} className="text-teal" />
                      <span>{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail-approach-box">
                <h4 className="detail-section-title">Clinical Therapeutic Approach:</h4>
                <p className="approach-text">{activeService.approach}</p>
              </div>

              <div className="detail-cta-row">
                <a href="#book-visit" className="btn btn-primary">
                  <span>Schedule Assessment for {activeService.title}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
