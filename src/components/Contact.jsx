import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';
import './Contact.css';

export default function Contact({ contact }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate interactive send
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-card-wrapper">
          <div className="contact-info-col">
            <div className="badge-pill">
              <span className="dot" />
              <span>Connect</span>
            </div>
            <h2 className="contact-heading">{contact.title}</h2>
            <p className="contact-subtitle">{contact.subtitle}</p>

            <div className="contact-details-list">
              <div className="contact-detail-row">
                <div className="contact-icon-pill">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="detail-label">Direct Email</span>
                  <a href={`mailto:${contact.email}`} className="detail-value">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-pill">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="detail-label">Headquarters</span>
                  <span className="detail-value">{contact.location}</span>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-pill">
                  <Sparkles size={18} />
                </div>
                <div>
                  <span className="detail-label">Status</span>
                  <span className="detail-value">{contact.availability}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            {submitted ? (
              <div className="submission-success-box animate-fade-in">
                <div className="success-icon-bubble">
                  <CheckCircle size={36} />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out to Akshar. We will connect with you promptly.</p>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project or Inquiry Details</label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    placeholder="Tell us about your project vision, timeline, or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
