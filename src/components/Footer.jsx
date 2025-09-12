import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaClock,
  FaAmbulance,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-10 pb-5 mt-15">
      <div className="max-w-7.5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10"
        >
          {/* Hospital Info */}
          <motion.div variants={item}>
            <div className="flex items-center mb-4">
              <img
                src="/sangam_orignal.png"
                alt="Sangam Hospital Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 object-contain"
              />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                Sangam Super
                <br />
                <span className="text-lg font-medium text-white">
                  Speciality Hospitals
                </span>
              </h2>
            </div>
            <p className="text-blue-100 mb-4">
              Sangam Superspecialty Hospital – delivering advanced healthcare,
              24x7 emergency, and multi-specialty services with compassion and
              care.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.facebook.com/profile.php?id=61578293412381"
                className="bg-blue-800 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.instagram.com/sangamhospitals.lko/?hl=en"
                className="bg-blue-800 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://x.com/sangamhospitals"
                className="bg-blue-800 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.youtube.com/@SangamSuperSpecialtyHospitals"
                className="bg-blue-800 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
              >
                <FaYoutube />
              </motion.a>
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div variants={item}>
            <h3 className="text-xl font-semibold mb-4 border-b border-blue-800 pb-2">
              Useful Links
            </h3>
            <ul className="space-y-3 text-blue-100">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  className="hover:text-blue-400 transition-colors"
                >
                  Doctors
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div variants={item}>
            <h3 className="text-xl font-semibold mb-4 border-b border-blue-800 pb-2">
              Opening Hours
            </h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex justify-between">
                <span className="flex items-center gap-2">
                  <FaClock className="text-blue-300" /> Monday - Friday
                </span>
                <span>8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="flex items-center gap-2">
                  <FaClock className="text-blue-300" /> Saturday
                </span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="flex items-center gap-2">
                  <FaClock className="text-blue-300" /> Sunday
                </span>
                <span>Emergency Only</span>
              </li>
              <li className="pt-4 text-sm italic">
                24/7 Emergency Services Available
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item}>
            <h3 className="text-xl font-semibold mb-4 border-b border-blue-800 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-blue-300" />
                <div>
                  <p>Emergency: +91 522 336 6782</p>
                  <p>Appointments: +91 9044872872</p>
                </div>
                
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-blue-300" />
                <span>info@sangamhospitals.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-300" />
                <span>
                  53/2 Awadhpuri Colony Sankat Mochan<br/> Gate Khargapur Gomti
                  Nagar Lucknow
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaAmbulance className="mt-1 text-blue-300" />
                <span>Ambulance: 108</span>
              </li>
            </ul>
          </motion.div>

          
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-blue-300 text-sm border-t border-blue-800 pt-4"
        >
          <p>
            © {new Date().getFullYear()} Sangam Hospital. All Rights Reserved.
          </p>
          <p> <a href="/terms" className="hover:text-blue-400 transition-colors underline">Terms  Conditions </a> & <a href="/privacy-policy" className="hover:text-blue-400 transition-colors underline">Privacy Policy</a> </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
