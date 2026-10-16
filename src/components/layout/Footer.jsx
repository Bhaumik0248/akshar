import { HeartPulse, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import './Footer.css';

export default function Footer({ brand }) {
  return (
    <footer className="physio-footer">
      <div className="container footer-container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="footer-icon">
                <HeartPulse size={20} />
              </div>
              <span className="footer-brand-title">{brand.name}</span>
            </div>
            <p className="footer-bio">{brand.tagline}</p>
            <div className="footer-cert-note">
              <ShieldCheck size={16} className="text-teal" />
              <span>{brand.certification}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Treatments</h4>
            <ul className="footer-links">
              <li><a href="#treatments">Orthopedic & Joint Care</a></li>
              <li><a href="#treatments">Stroke & Neuro Rehabilitation</a></li>
              <li><a href="#treatments">Post-Surgical Knee / Hip Rehab</a></li>
              <li><a href="#treatments">Geriatric Senior Balance Care</a></li>
              <li><a href="#treatments">Sciatica & Cervical Spondylosis</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="footer-col">
            <h4 className="footer-col-title">Areas Covered</h4>
            <ul className="footer-links">
              <li><span>Satellite & Bodakdev</span></li>
              <li><span>Vastrapur & Prahlad Nagar</span></li>
              <li><span>Navrangpura & CG Road</span></li>
              <li><span>Bopal & South Bopal</span></li>
              <li><span>Thaltej & SG Highway Suburbs</span></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="footer-col">
            <h4 className="footer-col-title">Emergency Helpline</h4>
            <div className="footer-contact-items">
              <a href={`tel:${brand.emergencyHotline.replace(/\s+/g, '')}`} className="footer-hotline-card">
                <Phone size={16} />
                <span>{brand.emergencyHotline}</span>
              </a>
              <div className="footer-contact-line">
                <Mail size={14} className="text-cyan" />
                <span>{brand.email}</span>
              </div>
              <div className="footer-contact-line">
                <MapPin size={14} className="text-emerald" />
                <span>{brand.headquarters}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} {brand.name}. All rights reserved. Providing compassionate, evidence-based physical therapy in home comfort.
          </p>
          <p className="medical-disclaimer">
            * Medical Notice: In-home physiotherapy is conducted according to physician/surgeon prescription and clinical standards.
          </p>
        </div>
      </div>
    </footer>
  );
}
