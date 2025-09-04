import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaClinicMedical } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if current location is home
  const isHome =
    location.pathname === "/" &&
    (!location.hash || location.hash === "#" || location.hash === "#home");

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-white/80 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <FaClinicMedical className="text-3xl text-blue-500" />
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
          >
            Sangam Hospital
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              smooth
              className={`font-medium px-3 py-2 rounded-lg transition-colors ${
                isHome
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              smooth
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/#doctors"
              smooth
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
            >
              Doctors
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-2xl text-blue-600 focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-sm border-t border-gray-100">
              <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/"
                  smooth
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 font-medium rounded-lg transition-all ${
                    isHome
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Home
                </Link>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  smooth
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                >
                  Contact Us
                </Link>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/#doctors"
                  smooth
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                >
                  Doctors
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;