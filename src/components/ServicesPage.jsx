import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

// Service items data
const facilities = [
  "Trauma and Emergency",
  "ICU/ICCU with Ventilator",
  "Specialised Dialysis Unit",
  "Medicine",
  "Maternity (Delivery)",
  "Obstetric & Gynecology",
  "Pediatrics & Neonatology",
  "Dentistry",
  "Endoscopy",
  "Pathology",
  "X-Ray/Ultra Sound/ECG",
  "9 Inch-C-Arm (HF)",
  "Image Intensifier",
  "Central Oxygen & Gas Supply",
  "Physiotherapy & Rehabilitation Unit"
];

const superSpecialities = [
  "Neurology/Neuro Surgery",
  "Plastic & Cosmetic Surgery",
  "Cardiology",
  "Nephrology",
  "Gastroenterology",
  "Gastro Surgery",
  "Endocrine & Breast Surgery",
  "Uro Surgery",
  "Orthopaedics & Joint Replacement",
  "Laproscopic Surgery",
  "Pulmonology/TB Chest",
  "Pediatric Surgery",
  "Dental & Maxillofacial Surgery",
  "Oncology & Specialised Cancer Treatment",
  "E.N.T.",
  "Ophthalmology/Rheumatology",
  "Psychiatry",
  "Liposuction",
  "Skin & V.D."
];

// Animated component
const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16 py-20">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Our <span className="text-blue-600">Medical Services</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sangam Superspecialty Hospital offers comprehensive healthcare services with state-of-the-art facilities and expert medical professionals.
          </p>
        </AnimatedSection>
      </div>

      {/* Hospital Info Card */}
      <AnimatedSection delay={0.2}>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-16 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">SANGAM SUPERSPECIALTY HOSPITAL</h2>
            <p className="text-gray-600 mb-1">
              <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
              53/2, Avadhpuri Colony, Near Sankat Mochan Gate, Khargapur, Gomti Nagar, Lucknow-226010
            </p>
            <p className="text-gray-600 mb-1">
              <i className="fas fa-phone-alt text-blue-500 mr-2"></i>
              Emergency: +91 522 336 6782 | Appointments: +91 90448 72872
            </p>
            <p className="text-gray-600">
              <i className="fas fa-envelope text-blue-500 mr-2"></i>
              hospitals05@gmail.com
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Facilities Section */}
        <AnimatedSection delay={0.3}>
          <div className="bg-white rounded-xl shadow-lg p-8 h-full">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full text-blue-600 mb-4">
                <i className="fas fa-procedures text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-blue-800">Medical Facilities</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-2 rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <i className="fas fa-check text-blue-600 text-xs"></i>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">{facility}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Super Specialities Section */}
        <AnimatedSection delay={0.4}>
          <div className="bg-white rounded-xl shadow-lg p-8 h-full">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full text-blue-600 mb-4">
                <i className="fas fa-stethoscope text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-blue-800">Super Specialities</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-2 rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              {superSpecialities.map((speciality, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <i className="fas fa-check text-blue-600 text-xs"></i>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">{speciality}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Emergency Banner */}
      <AnimatedSection delay={0.5}>
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-lg p-8 text-center text-white">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">24X7 EMERGENCY</div>
              <div className="text-xl mb-4">Immediate medical attention when you need it most</div>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <i className="fas fa-phone-alt text-2xl mr-2"></i>
                  <span className="text-lg">+91 522 336 6782</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-ambulance text-2xl mr-2"></i>
                  <span className="text-lg">Emergency Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Financial Services */}
      <AnimatedSection delay={0.6}>
        <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">FINANCIAL SERVICES</h3>
          <p className="mb-4">We offer various financial assistance options and payment plans</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
              <i className="fas fa-credit-card text-3xl mb-2"></i>
              <p>Easy EMI Options</p>
            </div>
            <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
              <i className="fas fa-hand-holding-usd text-3xl mb-2"></i>
              <p>Insurance Support</p>
            </div>
            <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
              <i className="fas fa-file-invoice-dollar text-3xl mb-2"></i>
              <p>Transparent Pricing</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ServicesPage;