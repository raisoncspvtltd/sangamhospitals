import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const CalendlyButton = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    // Load Calendly styles
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Clean up
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/sangamhospitals2025/book-an-appointment?hide_gdpr_banner=1'
      });
    } else {
      // Fallback in case Calendly doesn't load
      window.open('https://calendly.com/sangamhospitals2025/book-an-appointment', '_blank');
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className=" text-blue-600 font-semibold py-3 px-8 rounded-lg"
      onClick={openCalendly}
    >
      Book Appointment
    </motion.button>
  );
};

export default CalendlyButton;