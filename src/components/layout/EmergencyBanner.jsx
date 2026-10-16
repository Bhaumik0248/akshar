import { useState, useEffect } from 'react';
import { PhoneCall, Clock, ShieldCheck, MapPin, Stethoscope } from 'lucide-react';
import { bookingStorage } from '../../services/bookingStorage';
import './EmergencyBanner.css';

export default function EmergencyBanner({ brand, onOpenDoctorPortal }) {
  const [pendingCount, setPendingCount] = useState(2);

  useEffect(() => {
    const updatePending = () => {
      const all = bookingStorage.getAll();
      const count = all.filter((b) => b.status === 'New Request').length;
      setPendingCount(count);
    };
    updatePending();

    window.addEventListener('akshar_bookings_updated', updatePending);
    return () => window.removeEventListener('akshar_bookings_updated', updatePending);
  }, []);

  return (
    <div className="top-banner">
      <div className="container top-banner-container">
        <div className="banner-left">
          <span className="banner-item">
            <ShieldCheck size={14} className="banner-icon text-teal" />
            <span>IAP Certified Senior Physiotherapists</span>
          </span>
          <span className="banner-divider">•</span>
          <span className="banner-item">
            <Clock size={14} className="banner-icon text-cyan" />
            <span>Home Visits: 7 AM - 9 PM Everyday</span>
          </span>
        </div>

        <div className="banner-right">
          {/* Clinical Staff & Doctor Access */}
          <button 
            type="button"
            className="banner-doctor-btn"
            onClick={onOpenDoctorPortal}
            title="Open Doctor & Care Coordinator Portal"
          >
            <Stethoscope size={13} />
            <span>Doctor Portal</span>
            {pendingCount > 0 && (
              <span className="banner-badge">{pendingCount}</span>
            )}
          </button>

          {/* Emergency Hotline Direct Call */}
          <a href={`tel:${brand.emergencyHotline.replace(/\s+/g, '')}`} className="hotline-link">
            <PhoneCall size={13} className="phone-pulse" />
            <span>Emergency / Home Visit: {brand.emergencyHotline}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
