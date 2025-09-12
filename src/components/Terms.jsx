import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="py-36 bg-blue-50">
      <section className="max-w-4xl mx-auto px-6 bg-white shadow-md rounded-lg p-8">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center"
        >
          Terms & Conditions
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-gray-600 mb-6 text-center"
        >
          These Terms & Conditions govern the use of services, facilities, and
          the website of <span className="font-semibold">Sangam Super Specialty Hospitals</span>.
          Please read them carefully.
        </motion.p>

        {/* Document Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using our services, you agree to comply with these
              Terms & Conditions. If you do not agree, you should discontinue
              use immediately.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              2. Medical Services
            </h2>
            <p>
              Our hospital provides healthcare services intended for patient care
              and treatment only. All medical decisions are based on the judgment
              of qualified healthcare professionals.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              3. Patient Responsibilities
            </h2>
            <p>
              Patients must provide accurate personal and medical information,
              follow medical advice, respect hospital staff, and comply with all
              hospital policies during treatment.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              4. Privacy & Confidentiality
            </h2>
            <p>
              We respect your privacy. All personal and medical information will
              be handled in accordance with our{" "}
              <a href="/privacy-policy" className="text-blue-600 underline">
                Privacy Policy
              </a>.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              While we strive to deliver the best care, Sangam Super Specialty
              Hospitals shall not be held responsible for indirect losses,
              unforeseen complications, or outcomes beyond our reasonable
              control.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              6. Amendments
            </h2>
            <p>
              These Terms & Conditions may be updated from time to time. Patients
              are encouraged to review them periodically to stay informed.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              7. Contact Information
            </h2>
            <p>
              For any questions regarding these Terms & Conditions, please
              contact the hospital administration at{" "}
              <span className="font-semibold">Sangam Super Specialty Hospitals, Lucknow</span>.
            </p>
          </motion.div>
        </div>

        {/* Agreement Footer */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-gray-600 mt-10 text-sm text-center"
        >
          By using our services, you acknowledge that you have read, understood,
          and agreed to these Terms & Conditions.
        </motion.p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
