import { useState, useEffect } from 'react';
import { Menu, X, HeartPulse, PhoneCall, Calendar, Stethoscope } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ brand, onOpenDoctorPortal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Treatments", href: "#treatments" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Our Doctors", href: "#doctors" },
    { label: "Patient Reviews", href: "#testimonials" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-sticky' : ''}`}>
      <div className="container nav-inner">
        {/* Brand Monogram */}
        <a href="#overview" className="nav-brand">
          <div className="brand-cross-icon">
            <HeartPulse size={22} className="pulse-heart" />
          </div>
          <div className="brand-naming">
            <span className="brand-main">{brand.name}</span>
            <span className="brand-sub">Certified In-Home Physical Therapy</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-menu desktop-menu">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-item">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button: Primary Patient CTA */}
        <div className="nav-cta-box desktop-menu">
          <a href="#book-visit" className="btn btn-primary btn-book-cta">
            <Calendar size={16} />
            <span>Book Home Visit</span>
          </a>
        </div>

        {/* Mobile / Tablet Toggle Button */}
        <button
          className="mobile-btn mobile-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer (Responsive on all phones & tablets) */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-view animate-fade-in mobile-menu">
          <nav className="mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-link-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="mobile-actions">
              <a
                href="#book-visit"
                className="btn btn-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar size={16} />
                <span>Book Home Visit</span>
              </a>

              <a
                href={`tel:${brand.emergencyHotline.replace(/\s+/g, '')}`}
                className="btn btn-secondary hotline-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <PhoneCall size={16} />
                <span>Emergency Helpline: {brand.emergencyHotline}</span>
              </a>

              <button
                type="button"
                className="btn btn-secondary doctor-portal-mobile-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDoctorPortal();
                }}
              >
                <Stethoscope size={16} className="text-cyan" />
                <span>Doctor & Staff Portal</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
