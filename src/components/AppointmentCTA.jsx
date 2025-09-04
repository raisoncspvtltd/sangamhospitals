import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaCalendarAlt, FaTimes, FaUser, FaBirthdayCake, FaNotesMedical } from "react-icons/fa";
import Swal from "sweetalert2";

const AppointmentCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    concern: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call or form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      
      console.log("Appointment Request:", formData);
      
      // Show success alert
      Swal.fire({
        title: "Success!",
        text: "Your appointment has been booked successfully!",
        icon: "success",
        confirmButtonColor: "#3b82f6",
        confirmButtonText: "OK"
      });
      
      // Reset form and close modal
      setFormData({
        name: "",
        age: "",
        phone: "",
        concern: "",
        date: "",
        time: ""
      });
      setIsOpen(false);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an error submitting your appointment. Please try again.",
        icon: "error",
        confirmButtonColor: "#3b82f6"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Book Appointment Now
          </motion.button>
        </motion.div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-xl w-full max-w-md shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
                disabled={isSubmitting}
              >
                <FaTimes className="text-2xl" />
              </button>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
                  <FaCalendarAlt className="mr-3 text-blue-600" />
                  Book Your Appointment
                </h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full border border-gray-300 text-gray-800 pl-10 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <FaBirthdayCake className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        required
                        min="0"
                        max="120"
                        value={formData.age}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full border border-gray-300 text-gray-800 pl-10 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70"
                      />
                    </div>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full border border-gray-300 text-gray-800 pl-10 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full border border-gray-300 text-gray-800 pl-10 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70"
                    />
                    <input
                      type="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full border border-gray-300 text-gray-800 pl-10 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70"
                    />
                  </div>

                  <div className="relative">
                    <FaNotesMedical className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                      name="concern"
                      placeholder="Describe your medical concern" text-blue
                      rows="3"
                      value={formData.concern}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full border border-gray-300 text-gray-800 pl-10 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Confirm Appointment"
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AppointmentCTA;