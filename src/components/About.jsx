import { CheckCircle, ShieldCheck, HeartHandshake, Zap } from 'lucide-react';
import './About.css';

export default function About({ about }) {
  const valueIcons = [ShieldCheck, HeartHandshake, Zap];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column */}
          <div className="about-narrative">
            <div className="badge-pill">
              <span className="dot" />
              <span>Philosophy & Engineering</span>
            </div>
            <h2 className="about-heading">{about.title}</h2>
            <p className="about-bio">{about.bio}</p>

            <div className="values-stack">
              {about.values.map((v, i) => {
                const IconComponent = valueIcons[i % valueIcons.length];
                return (
                  <div key={i} className="value-item">
                    <div className="value-icon-box">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="value-title">{v.title}</h4>
                      <p className="value-desc">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Code & Architecture Card */}
          <div className="about-card-box">
            <div className="glass-summary-card">
              <div className="card-glance-badge">Framework Spec</div>
              <h3 className="card-glance-title">Modern React Standards</h3>
              <ul className="spec-list">
                <li>
                  <CheckCircle size={16} className="spec-icon" />
                  <span>React 19 Hooks & Concurrency</span>
                </li>
                <li>
                  <CheckCircle size={16} className="spec-icon" />
                  <span>Vite Build Pipeline & Instant HMR</span>
                </li>
                <li>
                  <CheckCircle size={16} className="spec-icon" />
                  <span>Semantic HTML5 & Accessible Navigation</span>
                </li>
                <li>
                  <CheckCircle size={16} className="spec-icon" />
                  <span>High-Performance CSS without heavy libraries</span>
                </li>
                <li>
                  <CheckCircle size={16} className="spec-icon" />
                  <span>Organized for rapid scaling & maintainability</span>
                </li>
              </ul>
              
              <div className="framework-quote">
                "Simple code, elevated aesthetics, unwavering reliability."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
