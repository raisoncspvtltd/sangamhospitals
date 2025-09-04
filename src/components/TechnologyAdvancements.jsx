import React from "react";
import { motion } from "framer-motion";
import { FaFlask, FaHeartbeat, FaXRay, FaWaveSquare } from "react-icons/fa";
import xray from "../assets/technology/xray.png";
import cathlab from "../assets/technology/cathlab.png";
import mri from "../assets/technology/mri.png";
import ultrasound from "../assets/technology/ultrasound.png";

const technologies = [
  {
    title: "Digital X-Ray",
    desc: "Advanced imaging for fast, reliable diagnostic insights with minimal radiation exposure and instant digital results.",
    image: xray,
    icon: <FaXRay className="text-blue-500 text-3xl" />,
    color: "from-blue-100 to-blue-50"
  },
  {
    title: "Advanced Cath Lab",
    desc: "State-of-the-art cardiac catheterization labs equipped with biplane imaging for precise heart diagnostics and life-saving interventions.",
    image: cathlab,
    icon: <FaHeartbeat className="text-red-500 text-3xl" />,
    color: "from-red-100 to-red-50"
  },
  {
    title: "3T MRI Scanner",
    desc: "High-resolution 3 Tesla MRI machines providing exceptional soft tissue contrast for accurate neurological and musculoskeletal diagnosis.",
    image: mri,
    icon: <FaFlask className="text-purple-500 text-3xl" />,
    color: "from-purple-100 to-purple-50"
  },
  {
    title: " Ultrasound",
    desc: "Advanced volumetric imaging using high-frequency soundwaves to create real-time 3D images for precise diagnostics and fetal monitoring.",
    image: ultrasound,
    icon: <FaWaveSquare className="text-green-500 text-3xl" />,
    color: "from-green-100 to-green-50"
  },
];

const TechnologyAdvancements = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
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
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-10 animate-float1"></div>
        <div className="absolute bottom-1/4 right-20 w-24 h-24 bg-blue-300 rounded-full opacity-10 animate-float2"></div>
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
            Cutting-Edge <span className="text-blue-600">Medical Technology</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pioneering diagnostic and treatment technologies for accurate healthcare solutions
          </p>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 rounded-xl -m-0.5 p-0.5 blur-md transition-opacity duration-300"></div>
              
              <div className={`relative bg-gradient-to-b ${tech.color} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col items-center`}>
                <div className="mb-6 p-4 bg-white rounded-full shadow-md">
                  {tech.icon}
                </div>
                
                <div className="w-full h-50 mb-6 overflow-hidden rounded-lg">
                  <motion.img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{tech.title}</h3>
                <p className="text-gray-600 text-sm text-center mb-4">{tech.desc}</p>
                

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      
    </section>
  );
};

export default TechnologyAdvancements;