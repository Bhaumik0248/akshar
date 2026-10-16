import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ brand, navigation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#overview" className="navbar-brand">
          <div className="brand-logo-gem">
            <Sparkles size={18} className="gem-icon" />
          </div>
          <div className="brand-text">
            <span className="brand-name">{brand.name}</span>
            <span className="brand-status-dot" title={brand.status} />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-only">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="navbar-actions desktop-only">
          <a href="#contact" className="btn btn-primary btn-sm">
            <span>Get Started</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle-btn mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in mobile-only">
          <nav className="mobile-nav-list">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ marginTop: '1rem', width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Get Started</span>
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
