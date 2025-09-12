import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaLinkedin,
  FaClock,
  FaAmbulance,
  FaYoutube
} from "react-icons/fa";
import { db } from "../firebaseConfig"; // Adjust path as needed
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Validation
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill all required fields.");
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address.");
      }
      
      // Add to Firestore
      await addDoc(collection(db, "contacts"), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || "",
        message: formData.message.trim(),
        createdAt: serverTimestamp(),
      });
      
      // Success message
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Your message has been sent successfully. We will get back to you soon.",
        confirmButtonColor: "#3b82f6",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err?.message || "Failed to submit. Please try again.",
        confirmButtonColor: "#3b82f6",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-blue-50 to-white py-20 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-10 animate-float1"></div>
        <div className="absolute bottom-1/4 right-20 w-24 h-24 bg-blue-300 rounded-full opacity-10 animate-float2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white flex-col rounded-xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={submitting}
                  className="w-full border border-gray-300 pl-10 pr-3 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70"
                />
                
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={submitting}
                    className="w-full border border-gray-300 pl-10 pr-3 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70"
                  />
                </div>

                <div className="relative">
                  <FaPhone className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={submitting}
                    className="w-full border border-gray-300 pl-10 pr-3 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70"
                  />
                </div>
              </div>

              <div className="relative">
                <FaComment className="absolute left-3 top-3 text-gray-400" />
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="8"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={submitting}
                  className="w-full border border-gray-300 pl-10 pr-3 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: submitting ? 1 : 1.02 }}
                whileTap={{ scale: submitting ? 1 : 0.98 }}
                disabled={submitting}
                className={`w-full ${
                  submitting
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-blue-500"
                } text-white py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2`}
              >
                <FaPaperPlane />
                {submitting ? "Submitting..." : "Send Message"}
              </motion.button>
            </form>
            <div className="flex justify-center mt-6 ml-4 space-x-4">
                          <motion.a
                            whileHover={{ y: -3 }}
                            href="https://www.facebook.com/profile.php?id=61578293412381"
                            className="bg-blue-800 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                          >
                            <FaFacebookF />
                          </motion.a>
                          <motion.a
                            whileHover={{ y: -3 }}
                            href="https://www.instagram.com/sangamhospitals.lko/?hl=en"
                            className="bg-pink-500 hover:bg-pink-500 text-white p-2 rounded-full transition-colors"
                          >
                            <FaInstagram />
                          </motion.a>
                          <motion.a
                            whileHover={{ y: -3 }}
                            href="https://x.com/sangamhospitals"
                            className="bg-blue-500 hover:bg-blue-500 text-white p-2 rounded-full transition-colors"
                          >
                            <FaTwitter />
                          </motion.a>
                          <motion.a
                            whileHover={{ y: -3 }}
                            href="https://www.youtube.com/@SangamSuperSpecialtyHospitals"
                            className="bg-red-600 hover:bg-red-500 text-white p-2 rounded-full transition-colors"
                          >
                            <FaYoutube />
                          </motion.a>
                        </div>
            
          </motion.div>

          {/* Contact Info + Map */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl p-8 h-full"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Our Location</h4>
                    <p className="text-gray-600">
                      53/2 Awadhpuri Colony Near Sankat Mochan Gate Khargapur Gomti Nagar Lucknow 226010
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone Numbers</h4>
                    <p className="text-gray-600">Emergency: +91 522 336 6782</p>
                    <p className="text-gray-600">Appointments: +91 90448 72872, +91 90448 72872</p>
                    
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Address</h4>
                    <p className="text-gray-600">contact@sangamhospital.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 w-full h-[300px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.972518871018!2d81.01649197443844!3d26.840826363177914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be36705161261%3A0x424bc8cb546c9c35!2sSangam%20Super%20Specialty%20Hospitals!5e0!3m2!1sen!2sin!4v1757070065169!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sangam Hospital Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;