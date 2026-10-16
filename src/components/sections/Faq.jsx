import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import './Faq.css';

export default function Faq({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <SectionHeader 
          badge="Frequently Asked Questions"
          title="Everything You Need to Know About Home Visits"
          subtitle="Answers to common queries regarding therapist safety, portable equipment, and treatment scheduling."
        />

        <div className="faq-accordion-box">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button 
                  className="faq-question-btn"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <ChevronDown size={18} className={`faq-arrow ${isOpen ? 'rotated' : ''}`} />
                </button>
                {isOpen && (
                  <div className="faq-answer-area animate-fade-in">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
