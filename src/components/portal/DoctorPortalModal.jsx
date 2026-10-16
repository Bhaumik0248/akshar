import { useState, useEffect } from 'react';
import { 
  X, 
  Stethoscope, 
  Search, 
  Download, 
  Phone, 
  MessageCircle, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Filter, 
  UserCheck, 
  AlertTriangle,
  RefreshCw,
  MapPin
} from 'lucide-react';
import { bookingStorage } from '../../services/bookingStorage';
import './DoctorPortalModal.css';

export default function DoctorPortalModal({ isOpen, onClose }) {
  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedRecord, setSelectedRecord] = useState(null);

  // Load and listen for live booking updates
  useEffect(() => {
    if (!isOpen) return;

    const loadRecords = () => {
      setBookings(bookingStorage.getAll());
    };

    loadRecords();

    const handleUpdate = (e) => {
      setBookings(e.detail || bookingStorage.getAll());
    };

    window.addEventListener('akshar_bookings_updated', handleUpdate);
    return () => window.removeEventListener('akshar_bookings_updated', handleUpdate);
  }, [isOpen]);

  if (!isOpen) return null;

  // Filter logic
  const filteredRecords = bookings.filter((item) => {
    const matchesSearch = 
      item.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone.includes(searchQuery) ||
      item.bookingId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.condition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (bookingId, newStatus) => {
    const updated = bookingStorage.updateStatus(bookingId, newStatus);
    if (updated) {
      setBookings(updated);
      if (selectedRecord && selectedRecord.bookingId === bookingId) {
        setSelectedRecord({ ...selectedRecord, status: newStatus });
      }
    }
  };

  const handleAssignDoctor = (bookingId, doctorName) => {
    const updated = bookingStorage.updateStatus(bookingId, 'Assigned', doctorName);
    if (updated) {
      setBookings(updated);
      if (selectedRecord && selectedRecord.bookingId === bookingId) {
        setSelectedRecord({ ...selectedRecord, status: 'Assigned', assignedDoctor: doctorName });
      }
    }
  };

  const newCount = bookings.filter((b) => b.status === 'New Request').length;
  const inTreatmentCount = bookings.filter((b) => b.status === 'In Treatment').length;
  const priorityCount = bookings.filter((b) => b.urgency?.includes('Priority')).length;

  return (
    <div className="portal-overlay animate-fade-in" onClick={onClose}>
      <div className="portal-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header Bar */}
        <div className="portal-top-bar">
          <div className="portal-title-area">
            <div className="portal-logo-gem">
              <Stethoscope size={22} />
            </div>
            <div>
              <div className="portal-kicker">
                <span className="live-pulse-dot" />
                <span>Clinical Operations Dashboard</span>
              </div>
              <h2 className="portal-main-heading">Doctor & Care Coordinator Portal</h2>
            </div>
          </div>

          <div className="portal-top-actions">
            <button 
              className="btn btn-secondary btn-sm"
              onClick={() => bookingStorage.exportToCSV()}
              title="Export all records as CSV spreadsheet"
            >
              <Download size={14} />
              <span>Export CSV</span>
            </button>
            <button className="portal-close-icon" onClick={onClose} aria-label="Close portal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Metrics Counter Bar */}
        <div className="portal-metrics-ribbon">
          <div className="ribbon-card">
            <span className="ribbon-num">{bookings.length}</span>
            <span className="ribbon-label">Total Patient Inquiries</span>
          </div>
          <div className="ribbon-card highlight-urgent">
            <span className="ribbon-num text-cyan">{newCount}</span>
            <span className="ribbon-label">New Requests (Pending Call)</span>
          </div>
          <div className="ribbon-card">
            <span className="ribbon-num text-teal">{inTreatmentCount}</span>
            <span className="ribbon-label">Active In Treatment</span>
          </div>
          <div className="ribbon-card">
            <span className="ribbon-num text-rose">{priorityCount}</span>
            <span className="ribbon-label">Urgent / Priority Visits</span>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="portal-toolbar">
          <div className="portal-search-box">
            <Search size={16} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search by Patient Name, Phone, ID (APC-XXXXXX), or Area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>×</button>
            )}
          </div>

          <div className="portal-filters">
            <Filter size={15} className="filter-icon" />
            {['ALL', 'New Request', 'Assigned', 'In Treatment', 'Completed'].map((st) => (
              <button
                key={st}
                className={`filter-tab ${statusFilter === st ? 'active' : ''}`}
                onClick={() => setStatusFilter(st)}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Records Table & Details View */}
        <div className="portal-content-grid">
          {/* Left Table / List */}
          <div className="records-table-wrapper">
            {filteredRecords.length === 0 ? (
              <div className="empty-records-box">
                <AlertTriangle size={32} className="text-muted" />
                <p>No patient entries found matching your query.</p>
              </div>
            ) : (
              <table className="portal-table">
                <thead>
                  <tr>
                    <th>Patient & Age</th>
                    <th>Condition</th>
                    <th>Area & Slot</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.map((item) => {
                    const isSelected = selectedRecord?.bookingId === item.bookingId;
                    const cleanPhone = item.phone.replace(/[^0-9]/g, '');

                    return (
                      <tr 
                        key={item.bookingId} 
                        className={`table-row ${isSelected ? 'selected' : ''}`}
                        onClick={() => setSelectedRecord(item)}
                      >
                        <td>
                          <div className="patient-cell-name">
                            <strong>{item.patientName}</strong>
                            {item.urgency?.includes('Priority') && (
                              <span className="urgent-tag">URGENT</span>
                            )}
                          </div>
                          <div className="patient-cell-meta">
                            <span>{item.age}</span> • <span className="ref-id-mono">{item.bookingId}</span>
                          </div>
                        </td>

                        <td>
                          <div className="condition-cell-text">{item.condition}</div>
                          {item.hasAttachment && (
                            <span className="attachment-badge">
                              <FileText size={12} />
                              <span>Report Attached</span>
                            </span>
                          )}
                        </td>

                        <td>
                          <div className="slot-cell-text">{item.preferredTime}</div>
                          <div className="address-cell-truncate" title={item.address}>
                            {item.address}
                          </div>
                        </td>

                        <td>
                          <span className={`status-pill status-${item.status.toLowerCase().replace(/\s+/g, '-')}`}>
                            {item.status}
                          </span>
                        </td>

                        <td>
                          <div className="quick-action-btns" onClick={(e) => e.stopPropagation()}>
                            <a 
                              href={`tel:${cleanPhone}`} 
                              className="action-icon-btn call-action"
                              title={`Call ${item.patientName}`}
                            >
                              <Phone size={14} />
                            </a>
                            <a 
                              href={`https://wa.me/${cleanPhone}?text=Hello%20${encodeURIComponent(item.patientName)},%20this%20is%20Dr.%20Akshar's%20team%20regarding%20your%20home%20physiotherapy%20booking%20${item.bookingId}.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="action-icon-btn whatsapp-action"
                              title="Chat on WhatsApp"
                            >
                              <MessageCircle size={14} />
                            </a>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>

          {/* Right Detailed Patient Profile Drawer */}
          <div className="record-detail-drawer">
            {selectedRecord ? (
              <div className="drawer-inner animate-fade-in">
                <div className="drawer-header">
                  <div>
                    <span className="drawer-ref">{selectedRecord.bookingId}</span>
                    <h3 className="drawer-patient-name">{selectedRecord.patientName}</h3>
                    <span className="drawer-patient-age">{selectedRecord.age}</span>
                  </div>
                  <span className={`status-pill status-${selectedRecord.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {selectedRecord.status}
                  </span>
                </div>

                {/* Direct Action Hub */}
                <div className="drawer-call-hub">
                  <a 
                    href={`tel:${selectedRecord.phone.replace(/[^0-9]/g, '')}`} 
                    className="btn btn-primary btn-sm btn-contact"
                  >
                    <Phone size={15} />
                    <span>Call {selectedRecord.phone}</span>
                  </a>
                  <a 
                    href={`https://wa.me/${selectedRecord.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedRecord.patientName)},%20this%20is%20Dr.%20Akshar's%20clinical%20team%20confirming%20your%20in-home%20physiotherapy%20visit.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm btn-contact whatsapp-color"
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Detail Fields */}
                <div className="drawer-fields-list">
                  <div className="drawer-field">
                    <span className="field-title">Primary Diagnosis / Condition</span>
                    <strong className="field-content">{selectedRecord.condition}</strong>
                  </div>

                  <div className="drawer-field">
                    <span className="field-title">Home Address & Landmark</span>
                    <div className="address-box">
                      <MapPin size={15} className="text-emerald" />
                      <span>{selectedRecord.address}</span>
                    </div>
                  </div>

                  <div className="drawer-field">
                    <span className="field-title">Preferred Visit Time</span>
                    <span className="field-content">{selectedRecord.preferredTime}</span>
                  </div>

                  <div className="drawer-field">
                    <span className="field-title">Clinical Urgency</span>
                    <span className="field-content">{selectedRecord.urgency}</span>
                  </div>

                  <div className="drawer-field">
                    <span className="field-title">Patient / Caregiver Notes</span>
                    <p className="drawer-notes">{selectedRecord.notes}</p>
                  </div>

                  {selectedRecord.fileName && (
                    <div className="drawer-field">
                      <span className="field-title">Uploaded Prescription / Scan</span>
                      <div className="attachment-file-box">
                        <FileText size={18} className="text-cyan" />
                        <div>
                          <strong>{selectedRecord.fileName}</strong>
                          <span className="file-sub-txt">Prescription or Imaging Report</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Operational Controls */}
                  <div className="drawer-controls-box">
                    <span className="field-title">Assign Therapist</span>
                    <select
                      className="drawer-select"
                      value={selectedRecord.assignedDoctor || 'Unassigned'}
                      onChange={(e) => handleAssignDoctor(selectedRecord.bookingId, e.target.value)}
                    >
                      <option value="Unassigned">Unassigned</option>
                      <option value="Dr. Darshil Gandhi (MPT Ortho & Sports)">Dr. Darshil Gandhi (MPT Ortho & Sports)</option>
                      <option value="Dr. Dhara Gandhi (MPT Neuro & Geriatric)">Dr. Dhara Gandhi (MPT Neuro & Geriatric)</option>
                      <option value="Specialist Clinical Associate">Specialist Clinical Associate</option>
                    </select>

                    <span className="field-title" style={{ marginTop: '0.75rem' }}>Update Clinical Status</span>
                    <select
                      className="drawer-select"
                      value={selectedRecord.status}
                      onChange={(e) => handleStatusChange(selectedRecord.bookingId, e.target.value)}
                    >
                      <option value="New Request">New Request</option>
                      <option value="Assigned">Assigned</option>
                      <option value="In Treatment">In Treatment</option>
                      <option value="Completed">Completed / Recovered</option>
                    </select>
                  </div>
                </div>
              </div>
            ) : (
              <div className="drawer-placeholder">
                <UserCheck size={36} className="text-muted" />
                <p>Select any patient record from the list to view full clinical details, prescription, and triage actions.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
