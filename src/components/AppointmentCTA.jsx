import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaCalendarAlt, FaTimes, FaUser, FaBirthdayCake, FaNotesMedical } from "react-icons/fa";
import Swal from "sweetalert2";
import CalendlyButton from "./CalendlyButton";


const AppointmentCTA = () => {

  return (
    <section id="appointment" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500 rounded-full opacity-10 animate-float1"></div>
        <div className="absolute bottom-1/4 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-10 animate-float2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready For <span className="text-blue-200">Exceptional</span> Medical Care?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Schedule your visit with our specialists for personalized healthcare solutions.
          </p>
          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-full hover:bg-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaCalendarAlt className="inline mr-2" />
            <CalendlyButton />
          </motion.button>
        </motion.div>
      </div>

      
      
    </section>
  );
};

export default AppointmentCTA;