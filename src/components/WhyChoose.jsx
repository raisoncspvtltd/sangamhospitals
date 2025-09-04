import React from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaHospitalAlt, FaHeartbeat, FaStar } from "react-icons/fa";

const reasons = [
  {
    icon: <FaUserMd className="text-4xl" />,
    title: "Experienced Doctors",
    desc: "Our team includes highly qualified specialists with years of experience in patient care.",
    color: "from-blue-500 to-blue-400",
  },
  {
    icon: <FaHospitalAlt className="text-4xl" />,
    title: "Modern Facilities",
    desc: "Fully equipped hospital with modern diagnostic tools, operation theatres, and ICUs.",
    color: "from-purple-500 to-purple-400",
  },
  {
    icon: <FaHeartbeat className="text-4xl" />,
    title: "Compassionate Care",
    desc: "We treat patients like family, with round-the-clock support and personalized attention.",
    color: "from-pink-500 to-pink-400",
  },
  {
    icon: <FaStar className="text-4xl" />,
    title: "Trusted by Thousands",
    desc: "Thousands of patients have trusted us over the years with their health and recovery.",
    color: "from-amber-500 to-amber-400",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Why Choose <span className="text-blue-600">Sangam Hospital</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine medical excellence with compassionate care to deliver exceptional healthcare experiences.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -m-0.5 p-0.5 blur-md group-hover:blur-lg">
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} rounded-xl`}></div>
              </div>
              
              <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col items-center text-center">
                <div className={`mb-6 p-4 rounded-full bg-gradient-to-br ${reason.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600 mb-6">{reason.desc}</p>
                <div className="mt-auto w-16 h-1 bg-gradient-to-r from-gray-200 to-gray-300 group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
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

export default WhyChoose;