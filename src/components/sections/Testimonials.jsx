import { Star, Quote, Clock, CheckCircle } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import './Testimonials.css';

export default function Testimonials({ testimonials }) {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <SectionHeader 
          badge="Verified Patient Recovery"
          title="Real Stories of Restored Mobility & Independence"
          subtitle="Read how patients and families experienced personalized in-home physiotherapy across Ahmedabad and suburbs."
        />

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="card-stars-row">
                <div className="stars-group">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} className="star-filled" fill="var(--accent-amber)" />
                  ))}
                </div>
                <div className="recovery-tag">
                  <Clock size={13} className="text-teal" />
                  <span>{item.recoveryPeriod}</span>
                </div>
              </div>

              <div className="condition-highlight-pill">
                <span>Condition: <strong>{item.condition}</strong></span>
              </div>

              <p className="testimonial-quote">
                "{item.story}"
              </p>

              <div className="patient-meta-bottom">
                <div className="patient-avatar-letter">
                  {item.patientName[0]}
                </div>
                <div>
                  <h4 className="patient-full-name">{item.patientName}</h4>
                  <span className="patient-sub-relation">{item.relation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
