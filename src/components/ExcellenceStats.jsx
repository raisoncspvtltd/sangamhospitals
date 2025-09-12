import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUserFriends, FaBed, FaAward, FaUserNurse, FaUserMd } from "react-icons/fa";

const stats = [
  { title: "Trusted Patients", value: 10000, icon: <FaUserFriends className="text-blue-500" /> },
  { title: "Hospital Beds", value: 100, icon: <FaBed className="text-blue-500" /> },
  { title: "Years of Excellence", value: 1, icon: <FaAward className="text-blue-500" /> },
  { title: "Medical Staff", value: 50, icon: <FaUserNurse className="text-blue-500" /> },
  { title: "Super Specialists", value: 10, icon: <FaUserMd className="text-blue-500" /> },
];

const ExcellenceStats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

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
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-10 animate-float1"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-blue-300 rounded-full opacity-10 animate-float2"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-blue-400 rounded-full opacity-10 animate-float3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Our <span className="text-blue-600">Milestones</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Years of trust and excellence in healthcare services
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6"
        >
          {stats.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 rounded-xl -m-0.5 p-0.5 blur-md transition-opacity duration-300"></div>

              <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col items-center">
                <div className="text-3xl mb-3 p-3 bg-blue-50 rounded-full">{itemData.icon}</div>
                
                <div className="text-4xl font-extrabold text-blue-600 mb-2">
                  {inView ? (
                    <CountUp
                      end={itemData.title === "Trusted Patients" ? itemData.value / 10 : itemData.value}
                      duration={2.5}
                      delay={index * 0.2}
                      separator=","
                      suffix={itemData.title === "Trusted Patients" ? "+" : "+"}
                    />
                  ) : (
                    <>0+</>
                  )}
                </div>

                <p className="mt-2 text-gray-600 font-medium text-center">
                  {itemData.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExcellenceStats;