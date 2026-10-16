import { useState } from 'react';
import { Award, ShieldCheck, HeartPulse, CheckCircle2, UserCheck, Calendar, Phone } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import './AboutDoctor.css';

export default function AboutDoctor({ doctors }) {
  return (
    <section id="doctors" className="about-doctor-section">
      <div className="container">
        <SectionHeader 
          badge="Senior Clinical Leadership"
          title="Meet Dr. Darshil Gandhi & Dr. Dhara Gandhi"
          subtitle="Experienced senior consultants dedicated to bringing hospital-standard physical therapy, pain relief, and mobility restoration directly into your home."
        />

        {/* 2-Doctor Side-by-Side Grid */}
        <div className="doctors-team-grid">
          {doctors.map((doc) => (
            <div key={doc.id} className="doctor-card-panel">
              {/* Top Banner / Avatar Header */}
              <div className="doctor-header-row">
                <div className="doctor-avatar-wrapper">
                  <img 
                    src={doc.image} 
                    alt={`${doc.name} - Senior Physiotherapist`}
                    className="doctor-headshot-img"
                  />
                  <div className="verified-shield-badge" title="IAP Certified Specialist">
                    <ShieldCheck size={18} />
                  </div>
                </div>

                <div className="doctor-header-meta">
                  <div className="doctor-tag-ribbon">
                    <span className="doc-exp-pill">{doc.experience.split('&')[0]}</span>
                    <span className="doc-miap-pill">MIAP Certified</span>
                  </div>
                  <h3 className="doctor-card-name">{doc.name}</h3>
                  <p className="doctor-card-degrees">{doc.qualifications}</p>
                  <span className="doctor-card-role">{doc.role}</span>
                </div>
              </div>

              {/* Doctor Bio */}
              <p className="doctor-card-bio">{doc.bio}</p>

              {/* Specializations & Modalities */}
              <div className="doctor-specialties-box">
                <h4 className="specialties-title">Key Clinical Specializations:</h4>
                <ul className="specialties-list">
                  {doc.specializations.map((spec, idx) => (
                    <li key={idx} className="spec-list-item">
                      <CheckCircle2 size={16} className="text-teal" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Accreditation */}
              <div className="doctor-accreditation-line">
                <Award size={16} className="text-cyan" />
                <span>{doc.memberships[0]}</span>
              </div>

              {/* Card Action */}
              <div className="doctor-card-action">
                <a href="#book-visit" className="btn btn-primary btn-block">
                  <Calendar size={15} />
                  <span>Request In-Home Visit with {doc.name.split(' ')[1]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Assurance Banner */}
        <div className="doctors-guarantee-strip">
          <div className="guarantee-inner">
            <ShieldCheck size={20} className="text-emerald" />
            <span>
              Both Dr. Darshil Gandhi and Dr. Dhara Gandhi carry valid registrations with the <strong>Indian Association of Physiotherapists (IAP)</strong> and the <strong>Gujarat State Council for Physiotherapy (GSCPT)</strong>.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
