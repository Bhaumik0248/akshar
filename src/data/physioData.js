/**
 * @file physioData.js
 * @description Centralized data repository for Akshar Home Physio Care.
 * Maintained according to Clean Architecture standards for easy CMS/API substitution.
 */

export const physioData = {
  brand: {
    name: "Akshar Home Physio Care",
    shortName: "Akshar Physio",
    tagline: "Expert Rehabilitation in the Comfort of Your Home",
    establishedYear: 2014,
    emergencyHotline: "+91 98765 43210",
    email: "care@aksharphysio.com",
    headquarters: "Ahmedabad, Gujarat • Serving Metro & Suburbs",
    workingHours: "Mon - Sun: 7:00 AM - 9:00 PM (Home Visits by Appointment)",
    certification: "Certified by Indian Association of Physiotherapists (IAP)"
  },

  /** Key Clinical Track Record Metrics */
  clinicalMetrics: [
    {
      id: "patients-treated",
      value: "5,400+",
      label: "Patients Treated at Home",
      detail: "Across orthopedic, neuro & geriatric conditions",
      highlight: true
    },
    {
      id: "experience-years",
      value: "12+ Years",
      label: "Clinical Experience",
      detail: "Certified senior specialists & therapists",
      highlight: true
    },
    {
      id: "recovery-rate",
      value: "98.6%",
      label: "Successful Recovery Rate",
      detail: "Documented pain reduction & functional mobility",
      highlight: false
    },
    {
      id: "expert-physios",
      value: "25+",
      label: "Certified Physiotherapists",
      detail: "MPT / BPT certified, background-verified",
      highlight: false
    },
    {
      id: "patient-rating",
      value: "4.9 / 5.0",
      label: "Patient Satisfaction",
      detail: "From 1,600+ verified home patient reviews",
      highlight: false
    }
  ],

  /** Hero Section Highlights */
  hero: {
    badge: "Trusted In-Home Healthcare Partner",
    titleStart: "Restoring Mobility & Relieving Pain at ",
    titleGradient: "Your Doorstep",
    subtitle: "Skip hospital commutes and stressful travel. Senior physiotherapists Dr. Darshil Gandhi & Dr. Dhara Gandhi bring advanced therapeutic modalities, portable electrotherapy machines, and dedicated 1-on-1 personalized recovery directly to your living room.",
    trustBadges: [
      "100% Sanitized Hospital-Grade Portable Gear",
      "Led by Senior Specialists Dr. Darshil & Dr. Dhara",
      "Flexible Morning & Evening Home Slots Across Ahmedabad"
    ]
  },

  /** Specialized Home Treatments */
  services: [
    {
      id: "ortho-rehab",
      title: "Orthopedic & Joint Care",
      icon: "Activity",
      badge: "Most Requested",
      summary: "Targeted therapy for knee osteoarthritis, cervical spondylosis, frozen shoulder, and disc herniations.",
      conditions: ["Severe Back & Neck Pain", "Knee Osteoarthritis", "Frozen Shoulder & Rotator Cuff", "Sciatica & Slip Disc"],
      approach: "Manual mobilization, muscle strengthening, postural realignment, and portable TENS/IFT therapy."
    },
    {
      id: "neuro-rehab",
      title: "Neurological & Stroke Rehab",
      icon: "Brain",
      badge: "Specialized Care",
      summary: "Evidence-based neuro-developmental rehabilitation restoring limb motor control, balance, and independence.",
      conditions: ["Post-Stroke Hemiplegia", "Parkinson's Disease Management", "Paralysis & Nerve Palsy", "Balance & Gait Retraining"],
      approach: "PNF techniques, neuroplasticity motor re-learning, gait retraining, and fine-motor coordination."
    },
    {
      id: "post-surgery",
      title: "Post-Surgical Rehabilitation",
      icon: "Stethoscope",
      badge: "Hospital Recovery",
      summary: "Safe transition from hospital to home after orthopedic surgeries and joint replacements.",
      conditions: ["Total Knee / Hip Replacement (TKR/THR)", "Fracture Fixation & Plaster Removal", "Spinal Fusion Recovery", "Ligament (ACL/PCL) Reconstruction"],
      approach: "Edema management, progressive weight bearing, scar mobilization, and functional movement drills."
    },
    {
      id: "geriatric-care",
      title: "Geriatric & Senior Mobility",
      icon: "HeartPulse",
      badge: "Elder Friendly",
      summary: "Gentle, compassionate physical therapy designed specifically for elderly seniors to prevent falls and retain dignity.",
      conditions: ["Fall Prevention & Dynamic Balance", "Age-related Muscle Weakness", "Bedridden Patient Care", "Osteoporosis Support"],
      approach: "Gentle joint range-of-motion, safe transfer training, balance drills, and caregiver education."
    },
    {
      id: "sports-injury",
      title: "Sports Injury & Muscle Rehab",
      icon: "Flame",
      badge: "Athletic Focus",
      summary: "Fast-track recovery for athletic strains, sprains, ligament tears, and biomechanical dysfunctions.",
      conditions: ["Ankle & Knee Sprains", "Hamstring & Quadriceps Tears", "Tennis / Golfer's Elbow", "Shoulder Impingement"],
      approach: "Therapeutic ultrasound, dry needling assistance, isometric strengthening, and return-to-sport protocols."
    },
    {
      id: "chest-cardio",
      title: "Chest & Pulmonary Physio",
      icon: "Wind",
      badge: "Respiratory Health",
      summary: "Clearing airway secretions and improving lung vital capacity for post-ICU and respiratory recovery.",
      conditions: ["Post-Pneumonia / Bronchitis", "Post-ICU Weakness", "COPD Management", "Breathing Distress Assistance"],
      approach: "Chest percussions, postural drainage, spirometer training, and diaphragmatic breathing patterns."
    }
  ],

  /** 4-Step Home Care Journey */
  careJourney: [
    {
      step: "01",
      title: "Book Consultation",
      desc: "Call our emergency helpline or submit your details online. We match you with the right specialist based on the condition."
    },
    {
      step: "02",
      title: "In-Home Assessment",
      desc: "A senior physiotherapist arrives with medical diagnostic equipment for a comprehensive clinical assessment of joint range, pain, and posture."
    },
    {
      step: "03",
      title: "Personalized Protocol",
      desc: "We formulate a customized recovery plan combining hands-on manual therapy, electrotherapy, and progressive home exercises."
    },
    {
      step: "04",
      title: "Tracked Pain Relief & Recovery",
      desc: "Daily or alternate-day supervised visits with weekly progress reports until functional independence is fully restored."
    }
  ],

  /** Lead Clinical Doctors */
  doctors: [
    {
      id: "dr-darshil",
      name: "Dr. Darshil Gandhi (PT)",
      image: "/images/dr-darshil-gandhi.jpg",
      qualifications: "MPT (Orthopedics & Sports Rehab), BPT, MIAP",
      role: "Co-Founder & Chief Orthopedic Physiotherapist",
      experience: "12+ Years Clinical & Post-Surgical Experience",
      bio: "With over 12 years of clinical excellence in leading multi-specialty hospitals and in-home rehabilitation, Dr. Darshil specializes in accelerated post-operative knee & hip replacement recovery, advanced manual joint mobilization, and chronic spine pain relief.",
      specializations: [
        "Total Knee & Hip Replacement (TKR/THR) Rehab",
        "Spine Decompression (Slip Disc & Sciatica)",
        "Advanced Manual Joint Mobilization (Maitland / Mulligan)",
        "Sports Injury & ACL Ligament Rehabilitation"
      ],
      memberships: [
        "Life Member of Indian Association of Physiotherapists (MIAP)",
        "Registered with Gujarat State Council for Physiotherapy (GSCPT)"
      ]
    },
    {
      id: "dr-dhara",
      name: "Dr. Dhara Gandhi (PT)",
      image: "/images/dr-dhara-gandhi.jpg",
      qualifications: "MPT (Neurology & Geriatric Rehab), BPT, MIAP",
      role: "Co-Founder & Chief Neuro-Physiotherapist",
      experience: "10+ Years Clinical & Neuro-Rehab Experience",
      bio: "A specialist in neuro-rehabilitation and geriatric physical therapy, Dr. Dhara has transformed the recovery of over 2,500 stroke and senior citizen patients. She is passionate about restoring independent mobility, preventing falls in elderly patients, and compassionate home care.",
      specializations: [
        "Stroke Paralysis & Hemiplegia Neuroplasticity Rehab",
        "Parkinson's Disease Gait & Balance Retraining",
        "Elderly Fall Prevention & Core Stability Drills",
        "Female Musculoskeletal Health & Ergonomics"
      ],
      memberships: [
        "Life Member of Indian Association of Physiotherapists (MIAP)",
        "Certified Neuro-Developmental Therapist (NDT / PNF)"
      ]
    }
  ],

  /** Real Patient Success Stories */
  testimonials: [
    {
      id: 1,
      patientName: "Rameshchandra Shah (68 yrs)",
      relation: "Treated by Dr. Darshil Gandhi",
      condition: "Post-Total Knee Replacement (TKR)",
      story: "After my knee replacement surgery, climbing stairs or traveling to a clinic seemed impossible. Dr. Darshil visited my home within 24 hours. In just 3 weeks of gentle, supervised exercises and electrotherapy, I gained 115-degree knee bend and walked unassisted.",
      rating: 5,
      recoveryPeriod: "3 Weeks at Home"
    },
    {
      id: 2,
      patientName: "Meenakshi V. (44 yrs)",
      relation: "Corporate Professional",
      condition: "Chronic Cervical Spondylosis & Sciatica",
      story: "Severe radiating pain had made sitting for even 20 minutes excruciating. Dr. Darshil and Dr. Dhara's combined protocol of manual traction, IFT electrotherapy, and postural core exercises relieved my sciatica completely without surgery.",
      rating: 5,
      recoveryPeriod: "15 Days Protocol"
    },
    {
      id: 3,
      patientName: "Family of Harish Bhai (72 yrs)",
      relation: "Daughter's Feedback for Dr. Dhara Gandhi",
      condition: "Post-Stroke Hemiplegia Rehab",
      story: "My father lost right-side limb mobility following a stroke. Dr. Dhara Gandhi's patience, compassion, and neuro-retraining during daily home sessions were miraculous. Today he walks independently with confidence.",
      rating: 5,
      recoveryPeriod: "2 Months Intensive"
    }
  ],

  /** Frequently Asked Questions */
  faqs: [
    {
      q: "What equipment do Dr. Darshil and Dr. Dhara bring for home sessions?",
      a: "Our doctors bring medical-grade portable electrotherapy units (TENS, IFT, Ultrasound, Muscle Stimulator), therapeutic resistance bands, mobilization belts, hot/cold therapy packs, and sanitization kits. You do not need to buy any machinery."
    },
    {
      q: "How long does each home physiotherapy session take?",
      a: "Each home visit lasts 45 to 60 minutes of dedicated, undivided 1-on-1 therapy, including initial vitals check, active treatment, and supervised therapeutic exercises."
    },
    {
      q: "Can I choose between Dr. Darshil Gandhi and Dr. Dhara Gandhi?",
      a: "Yes! Depending on your condition (Orthopedic / Neuro / Geriatric) or preference for male/female therapists, you can request Dr. Darshil Gandhi or Dr. Dhara Gandhi directly when booking."
    },
    {
      q: "How soon can a physiotherapist visit my home?",
      a: "We provide same-day or next-morning appointments across Ahmedabad and suburbs. For acute pain or post-hospital discharge patients, priority emergency slots are available."
    },
    {
      q: "Do you coordinate with my operating surgeon or neurologist?",
      a: "Yes. Both Dr. Darshil Gandhi and Dr. Dhara Gandhi strictly adhere to your orthopedic surgeon or neurologist's post-op protocol and share periodic progress reports."
    }
  ]
};
