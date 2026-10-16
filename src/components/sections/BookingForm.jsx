import { useState } from 'react';
import { 
  Calendar, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Send, 
  ShieldCheck, 
  User, 
  Upload,
  FileText,
  AlertCircle,
  ExternalLink,
  Stethoscope
} from 'lucide-react';
import { bookingStorage } from '../../services/bookingStorage';
import SectionHeader from '../common/SectionHeader';
import './BookingForm.css';

export default function BookingForm({ brand, onOpenDoctorPortal }) {
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    phone: '',
    condition: 'Orthopedic & Joint Pain',
    address: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    urgency: 'Standard (Within 24 Hours)',
    notes: '',
    fileName: ''
  });

  const [attachedFile, setAttachedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.patientName || !formData.phone || !formData.address) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newBookingRecord = {
        bookingId: `APC-${Math.floor(100000 + Math.random() * 900000)}`,
        patientName: formData.patientName,
        age: formData.age || 'Not specified',
        phone: formData.phone,
        condition: formData.condition,
        address: formData.address,
        preferredTime: formData.preferredTime,
        urgency: formData.urgency,
        notes: formData.notes || 'None provided',
        hasAttachment: !!attachedFile,
        fileName: attachedFile ? attachedFile.name : null,
        status: 'New Request',
        assignedDoctor: 'Unassigned',
        createdAt: new Date().toISOString()
      };

      // Persist in local storage repository
      bookingStorage.addBooking(newBookingRecord);

      setIsSubmitting(false);
      setConfirmedBooking(newBookingRecord);
      
      // Reset form fields
      setFormData({
        patientName: '',
        age: '',
        phone: '',
        condition: 'Orthopedic & Joint Pain',
        address: '',
        preferredTime: 'Morning (8:00 AM - 12:00 PM)',
        urgency: 'Standard (Within 24 Hours)',
        notes: '',
        fileName: ''
      });
      setAttachedFile(null);
    }, 600);
  };

  return (
    <section id="book-visit" className="booking-section">
      <div className="container">
        <SectionHeader 
          badge="In-Home Appointment"
          title="Schedule Your In-Home Clinical Assessment"
          subtitle="Fill out the details below. Our clinical coordinator and Dr. Akshar's team will instantly receive your request and assign a qualified home therapist."
        />

        <div className="booking-card-wrapper">
          {/* Left Column: Direct Contact & Guarantees */}
          <div className="booking-info-sidebar">
            <h3 className="sidebar-title">Why Patients Choose Home Care</h3>
            
            <div className="guarantees-list">
              <div className="guarantee-item">
                <div className="g-icon-wrap">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <strong>Certified & Background-Verified</strong>
                  <p>All therapists are degree-holding MPT/BPT professionals with clinical hospital experience.</p>
                </div>
              </div>

              <div className="guarantee-item">
                <div className="g-icon-wrap">
                  <Clock size={20} />
                </div>
                <div>
                  <strong>Full 45-60 Minute Therapy</strong>
                  <p>Dedicated 1-on-1 focus without the exhaustion and pain of clinic commute.</p>
                </div>
              </div>

              <div className="guarantee-item">
                <div className="g-icon-wrap">
                  <Phone size={20} />
                </div>
                <div>
                  <strong>Instant Doctor Coordinator</strong>
                  <p>Need urgent post-discharge guidance? Call our direct line <strong>{brand.emergencyHotline}</strong></p>
                </div>
              </div>
            </div>

            {/* Doctor Access Banner */}
            <div className="doctor-portal-promo-box">
              <div className="promo-badge">
                <Stethoscope size={15} />
                <span>Clinical Staff Portal</span>
              </div>
              <p className="promo-text">
                Doctors & Coordinators can view, manage, and assign all patient entries in real time.
              </p>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm promo-btn"
                onClick={onOpenDoctorPortal}
              >
                <span>Open Doctor Dashboard</span>
                <ExternalLink size={13} />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="booking-form-area">
            {confirmedBooking ? (
              <div className="confirmation-screen animate-fade-in">
                <div className="confirm-icon-circle">
                  <CheckCircle size={44} />
                </div>
                <h3 className="confirm-title">Home Visit Request Confirmed!</h3>
                <p className="confirm-text">
                  Thank you, <strong>{confirmedBooking.patientName}</strong>. Your appointment has been recorded directly into Dr. Akshar's clinical queue.
                </p>
                
                <div className="booking-ref-badge">
                  <span>Tracking ID: </span>
                  <strong>{confirmedBooking.bookingId}</strong>
                </div>
                
                <div className="confirm-details-box">
                  <div className="confirm-row">
                    <span>Condition:</span>
                    <strong>{confirmedBooking.condition}</strong>
                  </div>
                  <div className="confirm-row">
                    <span>Visit Window:</span>
                    <strong>{confirmedBooking.preferredTime}</strong>
                  </div>
                  <div className="confirm-row">
                    <span>Contact Phone:</span>
                    <strong>{confirmedBooking.phone}</strong>
                  </div>
                  <div className="confirm-row">
                    <span>Home Address:</span>
                    <strong>{confirmedBooking.address}</strong>
                  </div>
                  {confirmedBooking.fileName && (
                    <div className="confirm-row">
                      <span>Uploaded Report:</span>
                      <strong className="text-cyan">📎 {confirmedBooking.fileName}</strong>
                    </div>
                  )}
                  <div className="confirm-row">
                    <span>Current Status:</span>
                    <strong className="text-emerald">🟢 New Request (In Review)</strong>
                  </div>
                </div>

                <div className="confirm-actions-row">
                  <button 
                    className="btn btn-primary"
                    onClick={onOpenDoctorPortal}
                  >
                    <Stethoscope size={16} />
                    <span>View in Doctor Dashboard</span>
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setConfirmedBooking(null)}
                  >
                    <span>Submit Another Request</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="physio-form">
                <div className="form-row-2">
                  <div className="field-group">
                    <label htmlFor="patientName">Patient Full Name *</label>
                    <input
                      id="patientName"
                      type="text"
                      required
                      placeholder="e.g. Rameshchandra Patel"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    />
                  </div>

                  <div className="field-group">
                    <label htmlFor="age">Patient Age & Gender</label>
                    <input
                      id="age"
                      type="text"
                      placeholder="e.g. 68 yrs / Male"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="field-group">
                    <label htmlFor="phone">Phone / WhatsApp Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="field-group">
                    <label htmlFor="condition">Condition or Diagnosis *</label>
                    <select
                      id="condition"
                      value={formData.condition}
                      onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                    >
                      <option value="Orthopedic & Joint Pain">Orthopedic (Knee / Hip / Shoulder Pain)</option>
                      <option value="Post-Surgical Rehab (TKR / THR / Fracture)">Post-Surgical (Knee/Hip Replacement, Fracture)</option>
                      <option value="Neurological Rehab (Stroke / Paralysis)">Neurological (Stroke / Paralysis / Parkinson's)</option>
                      <option value="Geriatric Mobility & Fall Prevention">Geriatric (Senior Citizen Balance & Walking)</option>
                      <option value="Severe Cervical / Sciatica Back Pain">Severe Cervical / Sciatica Back Pain</option>
                      <option value="Sports Injury Rehab">Sports Injury & Ligament Tear</option>
                      <option value="Chest & Pulmonary Physiotherapy">Chest / Post-ICU Breathing Physio</option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="address">Home Address / Landmark & Area *</label>
                  <input
                    id="address"
                    type="text"
                    required
                    placeholder="e.g. Flat 402, Shivalik Heights, Opp. Iscon Temple, Satellite"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>

                <div className="form-row-2">
                  <div className="field-group">
                    <label htmlFor="preferredTime">Preferred Home Visit Slot</label>
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    >
                      <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 8:30 PM)">Evening (4:00 PM - 8:30 PM)</option>
                    </select>
                  </div>

                  <div className="field-group">
                    <label htmlFor="urgency">Urgency / Timeline</label>
                    <select
                      id="urgency"
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    >
                      <option value="Standard (Within 24 Hours)">Standard (Within 24 Hours)</option>
                      <option value="Priority (Today / Urgent)">Priority (Today / Urgent)</option>
                      <option value="Post-Hospital Discharge Booking">Scheduled Post-Hospital Discharge</option>
                    </select>
                  </div>
                </div>

                {/* Optional Prescription / Medical Report Attachment */}
                <div className="field-group">
                  <label htmlFor="reportFile" className="file-upload-label">
                    <span>Doctor's Prescription or MRI / X-Ray Report (Optional)</span>
                    <span className="file-hint">PDF, JPG, PNG up to 10MB</span>
                  </label>
                  <div className="file-input-wrapper">
                    <input
                      id="reportFile"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden-file-input"
                    />
                    <label htmlFor="reportFile" className="file-drop-btn">
                      <Upload size={16} />
                      <span>{attachedFile ? attachedFile.name : 'Choose File to Upload (Doctor Prescription / MRI)'}</span>
                    </label>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="notes">Symptoms, Surgery Date or Special Requests</label>
                  <textarea
                    id="notes"
                    rows="3"
                    placeholder="Mention post-op days, stair difficulty, bedridden status, or request for female physiotherapist..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-submit-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Registering Patient Entry...</span>
                  ) : (
                    <>
                      <span>Submit In-Home Physiotherapy Request</span>
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
