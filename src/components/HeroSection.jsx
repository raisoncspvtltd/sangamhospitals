import React from "react";
import { motion } from "framer-motion";
import doctorImg from "../assets/doctor.png";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import hospitalBg from "../assets/hospital-bg.jpg";
import CalendlyButton from "./CalendlyButton";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    exit: {
      x: -50,
      opacity: 0,
      transition: {
        ease: "easeIn"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5
      }
    },
    exit: {
      x: 50,
      opacity: 0,
      transition: {
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.section 
      className="relative pt-28 pb-20 md:pb-24 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(240, 246, 255, 0.9)), url(${hospitalBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Animated floating elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-20 animate-float1"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-15 animate-float2"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-blue-300 rounded-full opacity-10 animate-float3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div 
          className="text-center md:text-left"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-5 leading-tight"
            variants={itemVariants}
          >
            Your Health, <br className="hidden md:block" />
            <span className="text-blue-600">Our Priority</span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-700 text-lg md:text-xl mb-8 max-w-lg"
            variants={itemVariants}
          >
            Trusted healthcare at your doorstep. We offer 24/7 emergency care,
            expert doctors, and modern facilities with compassionate service.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.a
              href="tel:+91 522 336 6782"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhoneAlt className="text-white" />
              Emergency Call
            </motion.a>
            
            <motion.a
              
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-full transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendarAlt className="text-blue-600" />
              <CalendlyButton />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Doctor Image with floating effect */}
        <motion.div 
          className="flex justify-center relative"
          variants={imageVariants}
        >
          <div className="relative">

            <motion.img
              src={doctorImg}
              alt="Professional Doctor"
              className="w-full max-w-md drop-shadow-2xl animate-float"
              whileHover={{ scale: 1.02 }}
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-10 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full opacity-10 -z-10"></div>
          </div>
        </motion.div>
      </div>

      {/* Single-pass ECG line animation */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
        <svg 
          viewBox="0 0 1200 100" 
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <motion.path
            d="M0,50 L50,50 L60,30 L120,70 L180,20 L240,80 L300,50 L360,50 L420,30 L480,70 L540,20 L600,80 L660,50 L720,50 L780,30 L840,70 L900,20 L960,80 L1020,50 L1080,50 L1140,30 L1200,70"
            stroke="red"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              transition: {
                duration: 3,
                ease: "linear"
              }
            }}
          />
        </svg>
      </div>
    </motion.section>
  );
};

export default HeroSection;