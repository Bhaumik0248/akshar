import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import './CareProcess.css';

export default function CareProcess({ steps }) {
  return (
    <section id="how-it-works" className="care-process-section">
      <div className="container">
        <SectionHeader 
          badge="Seamless Care Experience"
          title="How Akshar Home Care Restores Your Mobility"
          subtitle="From your first phone call to pain-free daily movement, our structured 4-step clinical pathway ensures safety, comfort, and measurable recovery."
        />

        <div className="steps-timeline-grid">
          {steps.map((item, index) => (
            <div key={item.step} className="step-process-card">
              <div className="step-top-row">
                <span className="step-badge-number">{item.step}</span>
                {index < steps.length - 1 && (
                  <div className="step-connector-line" />
                )}
              </div>
              <h3 className="step-card-title">{item.title}</h3>
              <p className="step-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="process-bottom-banner">
          <div className="banner-badge-group">
            <span className="live-dot" />
            <span>Dedicated Female Physiotherapists Available Upon Request for Female & Elderly Patients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
