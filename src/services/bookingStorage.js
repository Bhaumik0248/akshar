/**
 * @file bookingStorage.js
 * @description Local persistent storage repository for patient home visit bookings.
 * Emulates clinical database persistence via localStorage with custom event dispatching
 * so the Doctor Portal updates immediately without page reloads.
 */

const STORAGE_KEY = 'akshar_physio_bookings';

const INITIAL_MOCK_BOOKINGS = [
  {
    bookingId: 'APC-849201',
    patientName: 'Rameshchandra Shah',
    age: '68 yrs / Male',
    phone: '+91 98250 12345',
    condition: 'Post-Surgical Rehab (TKR / THR / Fracture)',
    address: 'B-402, Shivalik Heights, Opp. Iscon Temple, Satellite, Ahmedabad',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    urgency: 'Priority (Today / Urgent)',
    notes: 'Total Knee Replacement surgery done 6 days ago. Needs gentle bending and gait retraining.',
    hasAttachment: true,
    fileName: 'Hospital_Discharge_Summary_TKR.pdf',
    status: 'Assigned',
    assignedDoctor: 'Dr. Akshar Patel (PT)',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
  },
  {
    bookingId: 'APC-712390',
    patientName: 'Meenakshi Verma',
    age: '44 yrs / Female',
    phone: '+91 98980 67890',
    condition: 'Severe Cervical / Sciatica Back Pain',
    address: 'Row House 12, Rosewood Estate, Near Judges Bungalow, Bodakdev',
    preferredTime: 'Evening (4:00 PM - 8:30 PM)',
    urgency: 'Standard (Within 24 Hours)',
    notes: 'Severe radiating nerve pain in right leg for 2 weeks. MRI confirms L4-L5 slip disc. Female therapist requested if possible.',
    hasAttachment: true,
    fileName: 'MRI_Lumbo_Sacral_Spine.pdf',
    status: 'New Request',
    assignedDoctor: 'Unassigned',
    createdAt: new Date(Date.now() - 3600000 * 1).toISOString()
  },
  {
    bookingId: 'APC-553198',
    patientName: 'Harish Bhai Parekh',
    age: '72 yrs / Male',
    phone: '+91 97270 34567',
    condition: 'Neurological Rehab (Stroke / Paralysis)',
    address: '15, Shanti Niketan Society, Behind Vastrapur Lake, Vastrapur',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    urgency: 'Standard (Within 24 Hours)',
    notes: 'Post-stroke hemiparesis on right side. Difficulty holding objects and balance while standing.',
    hasAttachment: false,
    fileName: null,
    status: 'In Treatment',
    assignedDoctor: 'Dr. Priya Shah (MPT Neuro)',
    createdAt: new Date(Date.now() - 3600000 * 28).toISOString()
  }
];

export const bookingStorage = {
  /**
   * Retrieves all patient bookings from localStorage, seeding initial records if empty.
   */
  getAll() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MOCK_BOOKINGS));
        return INITIAL_MOCK_BOOKINGS;
      }
      return JSON.parse(data);
    } catch (err) {
      console.error('Failed to read bookings from localStorage', err);
      return INITIAL_MOCK_BOOKINGS;
    }
  },

  /**
   * Saves a new patient booking entry and broadcasts a custom event.
   */
  addBooking(bookingData) {
    try {
      const current = this.getAll();
      const updated = [bookingData, ...current];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('akshar_bookings_updated', { detail: updated }));
      return bookingData;
    } catch (err) {
      console.error('Failed to save booking', err);
      return null;
    }
  },

  /**
   * Updates booking status (e.g., 'New Request' -> 'Assigned' -> 'In Treatment' -> 'Completed').
   */
  updateStatus(bookingId, newStatus, assignedDoctor = null) {
    try {
      const current = this.getAll();
      const updated = current.map((b) => {
        if (b.bookingId === bookingId) {
          return {
            ...b,
            status: newStatus,
            ...(assignedDoctor ? { assignedDoctor } : {})
          };
        }
        return b;
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('akshar_bookings_updated', { detail: updated }));
      return updated;
    } catch (err) {
      console.error('Failed to update status', err);
      return null;
    }
  },

  /**
   * Exports bookings as downloadable CSV file for hospital/doctor records.
   */
  exportToCSV() {
    const records = this.getAll();
    if (!records.length) return;

    const headers = ['Booking ID', 'Patient Name', 'Age', 'Phone', 'Condition', 'Time Slot', 'Urgency', 'Address', 'Status', 'Assigned Doctor', 'Created At'];
    const rows = records.map((r) => [
      r.bookingId,
      `"${r.patientName}"`,
      `"${r.age}"`,
      `"${r.phone}"`,
      `"${r.condition}"`,
      `"${r.preferredTime}"`,
      `"${r.urgency}"`,
      `"${r.address.replace(/"/g, '""')}"`,
      r.status,
      `"${r.assignedDoctor || 'Unassigned'}"`,
      r.createdAt
    ]);

    const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Akshar_Physio_Patients_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
