import React from "react";
import { motion } from "framer-motion";
import CalendlyButton from "./CalendlyButton";
import { Link } from "react-router-dom";
import { FaUserMd, FaAward, FaHeart, FaUsers, FaClinicMedical, FaAmbulance } from "react-icons/fa";

const AboutUs = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };



  // Values data
  const values = [
    { icon: <FaHeart className="text-3xl text-red-500" />, title: "Compassionate Care", description: "We treat every patient with empathy, respect, and kindness." },
    { icon: <FaAward className="text-3xl text-blue-500" />, title: "Excellence", description: "We strive for the highest standards in medical care and patient safety." },
    { icon: <FaUsers className="text-3xl text-green-500" />, title: "Teamwork", description: "Our multidisciplinary team works together for your wellbeing." },
    { icon: <FaClinicMedical className="text-3xl text-purple-500" />, title: "Innovation", description: "We embrace the latest medical technologies and treatments." }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4  relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-blue-800 mb-4"
            >
              About <span className="text-blue-600">Sangam Hospitals</span>
            </motion.h1>
            <motion.div 
              variants={fadeIn}
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"
            ></motion.div>
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Providing exceptional healthcare with compassion and cutting-edge technology for over 1 years.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Established in 2025, Sangam Superspecialty Hospital has been at the forefront of providing comprehensive healthcare services to the community of Lucknow and beyond. What started as a modest healthcare facility has now grown into a multi-specialty hospital equipped with state-of-the-art technology and staffed by experienced medical professionals.
                </p>
                <p className="text-gray-600 mb-4">
                  Our name "Sangam" represents the confluence of cutting-edge technology, compassionate care, and medical expertise. We believe in treating not just the illness, but the whole person - with dignity, respect, and empathy.
                </p>
                <p className="text-gray-600">
                  Over the years, we have built a reputation for clinical excellence, patient-centric approach, and ethical practices. Our team of dedicated healthcare professionals works tirelessly to ensure the best possible outcomes for our patients.
                </p>
              </div>
              <div className="h-64 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" 
                  alt="Hospital building" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaClinicMedical className="text-2xl text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide accessible, high-quality healthcare services that meet the needs of our community through clinical excellence, compassionate care, and continuous innovation. We are committed to improving the health and wellbeing of those we serve by delivering patient-centered care in a safe and healing environment.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaAward className="text-2xl text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading healthcare institution in the region, recognized for clinical excellence, innovative treatments, and exceptional patient experiences. We aspire to set new standards in healthcare delivery through continuous improvement, research, and education while maintaining our commitment to ethical practices and community service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={staggerChildren}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold text-blue-800 mb-4">Our Values</motion.h2>
            <motion.div variants={fadeIn} className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></motion.div>
            <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Sangam Hospital
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-xl p-6 text-center"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Experience the Sangam Difference</h2>
            <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
              Whether you need routine medical care or specialized treatment, our team is here to provide you with the highest quality healthcare in a compassionate environment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl shadow-md"
              >
                <CalendlyButton />
              </motion.button>
              
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;