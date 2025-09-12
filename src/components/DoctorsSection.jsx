import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaClinicMedical, FaTimes, FaPhone, FaCalendarAlt } from "react-icons/fa";
import doctor1 from "/rajeev.png";
import doctor2 from "/vivek.png";
import doctor3 from "/prasiddhi.png";
import doctor4 from "/jitendra.png";
import doctor5 from "/amit.png";
import doctor6 from "/mohit.png";



const doctors = [
  {
    name: "Dr. Rajeev Jha",
    specialty: "Cardiologist",
    experience: "12+ Years",
    rating: 4.9,
    image: doctor1,
    education: "MD (Cardiology) – MBBS , Patna",
    languages: "English, Hindi",
    bio: "Experienced Interventional Cardiologist specializing in angioplasty, echocardiography, and preventive heart care."
  },
  {
    name: "Dr. Vivek Kumar Singh",
    specialty: "Laparoscopic & General Surgeon",
    experience: "10+ Years",
    rating: 4.8,
    image: doctor2,
    education: "MBBS (General Surgery) – Dr. B.R. Ambedkar University, Agra",
    languages: "English, Hindi",
    bio: "Expert in laparoscopic (minimally invasive) surgeries including gallbladder, appendix, hernia repair, and gastrointestinal procedures."
  },
  {
    name: "Dr. Prasiddhi",
    specialty: "Cardiologist",
    experience: "2+ Years",
    rating: 4.7,
    image: doctor3,
    education: "DM (Cardiology) – NIMHANS, Bangalore",
    languages: "English, Hindi",
    bio: "Specializes in managing hypertension, coronary artery disease, heart failure, and preventive cardiology with a patient-centered approach."
  },
  {
    name: "Dr. Jitendra Kumar Singh",
    specialty: "Pediatrician",
    experience: "7+ Years",
    rating: 4.9,
    image: doctor4,
    education: "MD (Pediatrics) – G.S.V.M. University, Kanpur",
    languages: "English, Hindi",
    bio: "Dedicated to child health and wellness, with expertise in neonatal care, child growth monitoring, and immunization."
  },
  {
  name: "Dr. Amit Singh",
  specialty: "BHMS , Homeopathy Specialist",
  experience: "6+ Years",
  rating: 4.7,
  image: doctor5,
  education: "BHMS, Barkatullah Vishwavidyalaya, Bhopal",
  languages: "English, Hindi",
  bio: "Experienced in classical homeopathy treatments for chronic illnesses and holistic healing."
},
  {
    name: "Dr. Mohit Kumar Singh",
    specialty: "Orthopedic Surgeon",
    experience: "7+ Years",
    rating: 4.6,
    image: doctor6,
    education: "MS (Orthopedics) , Uttar Pradesh University of Medical Sciences, Saifai",
    languages: "English, Hindi",
    bio: "Expert in bone and joint surgeries, fracture management, and sports injury treatment using minimally invasive techniques."
  },
];


const DoctorsSection = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section id="doctors" className="bg-gradient-to-b from-blue-50 to-white py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-10 animate-float1"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-10 animate-float2"></div>
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
            Meet Our <span className="text-blue-600">Specialists</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Highly qualified doctors dedicated to your health and wellness
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 rounded-xl -m-0.5 p-0.5 blur-md transition-opacity duration-300"></div>
              
              <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col items-center">
                <div className="relative mb-6">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-blue-100 group-hover:border-blue-200 transition-all duration-300"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full flex items-center text-sm font-medium">
                    <FaStar className="text-yellow-300 mr-1" />
                    {doctor.rating}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                <p className="text-gray-500 mb-4 flex items-center">
                  <FaClinicMedical className="mr-2 text-blue-400" />
                  {doctor.experience} Experience
                </p>
                
                <div className="mt-auto w-full">
                  <button 
                    onClick={() => openModal(doctor)}
                    className="w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Doctor Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedDoctor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-xl  max-w-[75vh] max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-6">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <FaTimes className="text-2xl" />
                </button>

                <div className=" flex md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={selectedDoctor.image}
                      alt={selectedDoctor.name}
                      className="w-40 h-40 object-cover rounded-full border-4 border-blue-100 mx-auto"
                    />
                    <div className="mt-4 flex justify-center">
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full flex items-center text-sm font-medium">
                        <FaStar className="text-yellow-300 mr-1" />
                        {selectedDoctor.rating}
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{selectedDoctor.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{selectedDoctor.specialty}</p>
                    <p className="text-gray-500 mb-4 flex items-center">
                      <FaClinicMedical className="mr-2 text-blue-400" />
                      {selectedDoctor.experience} Experience
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800">Education</h4>
                        <p className="text-gray-600">{selectedDoctor.education}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Languages Spoken</h4>
                        <p className="text-gray-600">{selectedDoctor.languages}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">About Doctor</h4>
                        <p className="text-gray-600">{selectedDoctor.bio}</p>
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    
    </section>
  );
};

export default DoctorsSection;