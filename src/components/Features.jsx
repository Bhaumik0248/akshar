import { 
  Code2, 
  Palette, 
  Zap, 
  FolderGit2, 
  Smartphone, 
  ShieldCheck 
} from 'lucide-react';
import './Features.css';

const ICON_MAP = {
  Code2: Code2,
  Palette: Palette,
  Zap: Zap,
  FolderGit2: FolderGit2,
  Smartphone: Smartphone,
  ShieldCheck: ShieldCheck
};

export default function Features({ features }) {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <span className="dot" />
            <span>Architecture & Capabilities</span>
          </div>
          <h2>Engineered for Modern Web Workflows</h2>
          <p>
            Every module in Akshar is crafted to provide a strong foundation for scalable React web development.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => {
            const IconComponent = ICON_MAP[feature.icon] || Code2;
            return (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon-wrapper">
                  <IconComponent size={24} className="feature-icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
                <div className="feature-tags">
                  {feature.tags.map((tag, idx) => (
                    <span key={idx} className="feature-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
