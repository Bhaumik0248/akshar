import { useState } from 'react';
import { ArrowRight, Sparkles, Terminal, CheckCircle2, Layers, Cpu } from 'lucide-react';
import './Hero.css';

export default function Hero({ hero }) {
  const [activeTab, setActiveTab] = useState('structure');

  return (
    <section id="overview" className="hero-section">
      {/* Background Ambient Glows */}
      <div className="glow-orb glow-orb-1 animate-pulse-glow" />
      <div className="glow-orb glow-orb-2 animate-pulse-glow" />

      <div className="container hero-container">
        {/* Left Column: Copy & CTAs */}
        <div className="hero-content">
          <div className="badge-pill animate-fade-in">
            <span className="dot" />
            <span>{hero.badge}</span>
          </div>

          <h1 className="hero-title">
            {hero.headlineStart}
            <span className="gradient-text">{hero.headlineGradient}</span>
            {hero.headlineEnd}
          </h1>

          <p className="hero-description">{hero.subheading}</p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>Explore Projects</span>
              <ArrowRight size={17} />
            </a>
            <a href="#features" className="btn btn-secondary">
              <Layers size={17} />
              <span>System Features</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="hero-stats-grid">
            {hero.stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Tech Showcase Card */}
        <div className="hero-visual">
          <div className="interactive-preview-card">
            <div className="card-top-bar">
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="card-title-bar">
                <Terminal size={13} />
                <span>akshar-architecture.config.js</span>
              </span>
            </div>

            <div className="preview-tab-controls">
              <button
                className={`tab-btn ${activeTab === 'structure' ? 'active' : ''}`}
                onClick={() => setActiveTab('structure')}
              >
                Structure
              </button>
              <button
                className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                React 19 Core
              </button>
              <button
                className={`tab-btn ${activeTab === 'metrics' ? 'active' : ''}`}
                onClick={() => setActiveTab('metrics')}
              >
                Stack
              </button>
            </div>

            <div className="card-code-area">
              {activeTab === 'structure' && (
                <div className="code-view animate-fade-in">
                  <div className="code-line"><span className="code-keyword">const</span> <span className="code-var">aksharArchitecture</span> = {'{'}</div>
                  <div className="code-line indent-1"><span className="code-prop">name:</span> <span className="code-string">"Akshar Enterprise"</span>,</div>
                  <div className="code-line indent-1"><span className="code-prop">framework:</span> <span className="code-string">"React 19 + Vite"</span>,</div>
                  <div className="code-line indent-1"><span className="code-prop">styling:</span> <span className="code-string">"Vanilla CSS (Glassmorphic)"</span>,</div>
                  <div className="code-line indent-1"><span className="code-prop">scalability:</span> <span className="code-bool">true</span>,</div>
                  <div className="code-line indent-1"><span className="code-prop">productionReady:</span> <span className="code-bool">true</span></div>
                  <div className="code-line">{'}'};</div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="feature-checklist animate-fade-in">
                  <div className="checklist-item">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>Server Components & Actions support</span>
                  </div>
                  <div className="checklist-item">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>Optimized Virtual DOM reconciliation</span>
                  </div>
                  <div className="checklist-item">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>Isolated component state and hooks</span>
                  </div>
                  <div className="checklist-item">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>Instant Hot Module Replacement</span>
                  </div>
                </div>
              )}

              {activeTab === 'metrics' && (
                <div className="stack-badges-view animate-fade-in">
                  <div className="stack-item">
                    <Cpu size={16} />
                    <div>
                      <strong>Vite 8 Core</strong>
                      <p>Instant build and bundle tooling</p>
                    </div>
                  </div>
                  <div className="stack-item">
                    <Layers size={16} />
                    <div>
                      <strong>Modular Component Layout</strong>
                      <p>Clean separations of concerns</p>
                    </div>
                  </div>
                  <div className="stack-item">
                    <Sparkles size={16} />
                    <div>
                      <strong>Rich Modern Aesthetic</strong>
                      <p>Ultra-fluid HSL glassmorphism</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="card-footer">
              <span className="live-pill">
                <span className="pulse-ping" />
                Live Status: Online & Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
