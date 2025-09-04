import React from "react";
import { motion } from "framer-motion";
import neuro from "../assets/specialities/neuro.png";
import cardio from "../assets/specialities/cardiology.png";
import medicine from "../assets/specialities/medicine.png";
import ortho from "../assets/specialities/ortho.png";
import oncology from "../assets/specialities/oncology.png";
import gastro from "../assets/specialities/gastro.png";

const specialities = [
  { 
    image: neuro, 
    title: "Neurology & Neuro Surgery",
    description: "Advanced treatments for brain and nervous system disorders"
  },
  { 
    image: cardio, 
    title: "Cardiology & Cardiac Surgery",
    description: "Comprehensive heart care with cutting-edge procedures"
  },
  { 
    image: medicine, 
    title: "General Medicine",
    description: "Holistic healthcare for all your medical needs"
  },
  { 
    image: ortho, 
    title: "Orthopaedics & Joint Replacement",
    description: "Expert care for bones, joints and musculoskeletal system"
  },
  { 
    image: oncology, 
    title: "Oncology & Cancer Surgery",
    description: "Multidisciplinary cancer care with modern therapies"
  },
  { 
    image: gastro, 
    title: "Gastroenterology & GI Surgery",
    description: "Specialized care for digestive system disorders"
  },
];

const SuperSpecialities = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-10 animate-float1"></div>
        <div className="absolute bottom-1/4 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-10 animate-float2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Our <span className="text-blue-600">Super Specialities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            World-class medical expertise across multiple specialties
          </p>
        </motion.div>

        {/* Specialities Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {specialities.map((spec, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 rounded-xl -m-0.5 p-0.5 blur-md transition-opacity duration-300"></div>
              
              <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <motion.img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-70 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{spec.title}</h3>
                <p className="text-gray-600 mb-4">{spec.description}</p>
                <div className="mt-auto">
                  
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    
    </section>
  );
};

export default SuperSpecialities;