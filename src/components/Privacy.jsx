import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="py-36 bg-blue-50">
      <section className="max-w-4xl mx-auto px-20 bg-white shadow-md rounded-lg p-8">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center"
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-gray-600 mb-6 text-center"
        >
          At <span className="font-semibold">Sangam Super Specialty Hospitals</span>, 
          we are committed to safeguarding the privacy and confidentiality of our patients, 
          visitors, and website users. This Privacy Policy explains how we collect, use, and protect your information.
        </motion.p>

        {/* Document Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal details such as name, age, contact information, 
              medical history, appointment records, and billing details to provide effective healthcare services.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              The information we collect is used for medical treatment, appointment scheduling, 
              billing, communication, internal record-keeping, and to improve the quality of our services.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              3. Data Security
            </h2>
            <p>
              We implement strict technical and organizational measures to protect your 
              personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              4. Sharing of Information
            </h2>
            <p>
              We do not sell or rent your personal data. Information may only be shared with authorized 
              healthcare professionals or required by law for medical and legal purposes.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              5. Patient Rights
            </h2>
            <p>
              You have the right to access, update, or request deletion of your personal information. 
              Requests can be made by contacting our hospital administration.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              6. Cookies & Website Usage
            </h2>
            <p>
              Our website may use cookies to enhance user experience and collect non-identifiable 
              information such as IP addresses and browser types for analytics.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              7. Updates to Policy
            </h2>
            <p>
              This Privacy Policy may be updated periodically. We encourage patients and users 
              to review it regularly to stay informed of any changes.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              8. Contact Information
            </h2>
            <p>
              For questions or concerns regarding this Privacy Policy, please contact 
              <span className="font-semibold"> Sangam Super Specialty Hospitals, Lucknow</span>.
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
          By using our services or visiting our website, you acknowledge that you 
          have read, understood, and agreed to this Privacy Policy.
        </motion.p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
