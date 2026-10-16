import { Phone, MessageCircle } from 'lucide-react';
import './FloatingCallPill.css';

export default function FloatingCallPill({ phone }) {
  const cleanPhone = phone.replace(/[^0-9]/g, '');

  return (
    <div className="floating-action-cluster">
      {/* WhatsApp Direct */}
      <a 
        href={`https://wa.me/${cleanPhone}?text=Hello%20Dr.%20Akshar,%20I%20would%20like%20to%20inquire%20about%20a%20home%20physiotherapy%20visit.`}
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-btn whatsapp-pill"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={20} />
        <span className="pill-text">WhatsApp</span>
      </a>

      {/* Emergency Call */}
      <a 
        href={`tel:${cleanPhone}`} 
        className="floating-btn call-pill"
        title="Call Helpline"
        aria-label="Call Helpline"
      >
        <Phone size={19} className="phone-wobble" />
        <span className="pill-text">Instant Call</span>
      </a>
    </div>
  );
}
