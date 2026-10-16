import { useState } from 'react';
import { ExternalLink, Layers, Sparkles, X } from 'lucide-react';
import './Projects.css';

export default function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <span className="dot" />
            <span>Showcase & Work</span>
          </div>
          <h2>Featured Creations & Platforms</h2>
          <p>
            Explore real-world implementations demonstrating high-performance React architectures and clean design principles.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ '--accent-glow': project.accentColor }}
            >
              <div className="project-card-header">
                <span className="project-category">{project.category}</span>
                <span className="project-metric">{project.metrics}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech-stack">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <button 
                  className="btn-project-action"
                  onClick={() => setSelectedProject(project)}
                >
                  <span>Quick Overview</span>
                  <Sparkles size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Details */}
      {selectedProject && (
        <div className="project-modal-backdrop animate-fade-in" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <X size={20} />
            </button>
            <div className="modal-badge">{selectedProject.category}</div>
            <h2 className="modal-title">{selectedProject.title}</h2>
            <p className="modal-desc">{selectedProject.description}</p>
            
            <div className="modal-meta-box">
              <div className="modal-meta-item">
                <span className="meta-label">Performance Metric</span>
                <span className="meta-val">{selectedProject.metrics}</span>
              </div>
              <div className="modal-meta-item">
                <span className="meta-label">Tech Stack</span>
                <span className="meta-val">{selectedProject.tech.join(' • ')}</span>
              </div>
            </div>

            <div className="modal-footer-cta">
              <button className="btn btn-primary" onClick={() => setSelectedProject(null)}>
                <span>Close Preview</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
