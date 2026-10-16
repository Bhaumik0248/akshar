import { useState } from 'react';
import { physioData } from './data/physioData';
import EmergencyBanner from './components/layout/EmergencyBanner';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import StatsStrip from './components/sections/StatsStrip';
import Services from './components/sections/Services';
import CareProcess from './components/sections/CareProcess';
import AboutDoctor from './components/sections/AboutDoctor';
import Testimonials from './components/sections/Testimonials';
import Faq from './components/sections/Faq';
import BookingForm from './components/sections/BookingForm';
import Footer from './components/layout/Footer';
import FloatingCallPill from './components/ui/FloatingCallPill';
import DoctorPortalModal from './components/portal/DoctorPortalModal';
import './App.css';

/**
 * Root Application Component for Akshar Home Physio Care
 * Architected with clean separation of concerns, modular layout,
 * and high-availability clinical triage UI.
 */
function App() {
  const { 
    brand, 
    clinicalMetrics, 
    hero, 
    services, 
    careJourney, 
    doctors, 
    testimonials, 
    faqs 
  } = physioData;

  const [isDoctorPortalOpen, setIsDoctorPortalOpen] = useState(false);

  return (
    <div className="app-root">
      {/* Top Clinical Accreditation & Emergency Bar with Doctor Portal Trigger */}
      <EmergencyBanner 
        brand={brand} 
        onOpenDoctorPortal={() => setIsDoctorPortalOpen(true)}
      />

      {/* Main Hospital Navigation Header */}
      <Navbar 
        brand={brand} 
        onOpenDoctorPortal={() => setIsDoctorPortalOpen(true)} 
      />

      <main id="main-content">
        {/* Hero Section with In-Home Photo & Quick Condition Finder */}
        <Hero hero={hero} brand={brand} />

        {/* Clinical Track Record: Patients Treated, Experience, Recovery with Scroll Count-Up */}
        <StatsStrip metrics={clinicalMetrics} />

        {/* Specialized In-Home Treatments & Modalities */}
        <Services services={services} />

        {/* 4-Step Care Journey */}
        <CareProcess steps={careJourney} />

        {/* Both Senior Consultants: Dr. Darshil Gandhi & Dr. Dhara Gandhi */}
        <AboutDoctor doctors={doctors} />

        {/* Patient Recovery Case Studies */}
        <Testimonials testimonials={testimonials} />

        {/* Frequently Asked Questions */}
        <Faq faqs={faqs} />

        {/* In-Home Assessment Booking Form with File Upload & Direct Doctor Sync */}
        <BookingForm 
          brand={brand} 
          onOpenDoctorPortal={() => setIsDoctorPortalOpen(true)}
        />
      </main>

      {/* Medical Disclosures & Regional Coverage Footer */}
      <Footer brand={brand} />

      {/* Floating Instant Call & WhatsApp Care Contact */}
      <FloatingCallPill phone={brand.emergencyHotline} />

      {/* Doctor & Clinical Coordinator Operations Portal */}
      <DoctorPortalModal 
        isOpen={isDoctorPortalOpen} 
        onClose={() => setIsDoctorPortalOpen(false)} 
      />
    </div>
  );
}

export default App;
