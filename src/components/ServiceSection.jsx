import React from "react";
import { motion } from "framer-motion";
import {
  FaStethoscope,
  FaAmbulance,
  FaUserNurse,
  FaSyringe,
  FaXRay,
  FaHeartbeat,
} from "react-icons/fa";

const services = [
  {
    icon: <FaStethoscope className="text-3xl" />,
    title: "General Checkup",
    description: "Routine health checkups and consultations by experienced physicians.",
    color: "bg-blue-100",
  },
  {
    icon: <FaAmbulance className="text-3xl" />,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency services with fully equipped ambulances.",
    color: "bg-red-100",
  },
  {
    icon: <FaUserNurse className="text-3xl" />,
    title: "Nursing Care",
    description: "Well-trained nursing staff ensuring top-notch care and patient comfort.",
    color: "bg-green-100",
  },
  {
    icon: <FaSyringe className="text-3xl" />,
    title: "Vaccination",
    description: "Safe and up-to-date vaccination for children and adults.",
    color: "bg-yellow-100",
  },
  {
    icon: <FaXRay className="text-3xl" />,
    title: "Diagnostic Imaging",
    description: "Modern facilities including X-ray, ultrasound, and pathology labs.",
    color: "bg-purple-100",
  },
  {
    icon: <FaHeartbeat className="text-3xl" />,
    title: "Cardiology",
    description: "Heart specialists available for ECG, stress test, and cardiac care.",
    color: "bg-pink-100",
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-[#f0f6ff] to-[#e6f0ff] py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare services with cutting-edge technology and compassionate care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <motion.div
                whileHover={{
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.03,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`${service.color} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col items-center text-center relative overflow-hidden`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300"></div>
                <div className="mb-6 p-4 rounded-full bg-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >

        </motion.div>
      </div>
    </section>
  );
};

export default Services;