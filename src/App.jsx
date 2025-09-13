import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import  { Link } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import DoctorsSection from "./components/DoctorsSection";
import WhyChoose from "./components/WhyChoose";
import ExcellenceStats from "./components/ExcellenceStats";
import SuperSpecialities from "./components/SuperSpecialities";
import AppointmentCTA from "./components/AppointmentCTA";
import ScrollToTop from "./components/ScrollToTop";
import TechnologyAdvancements from "./components/TechnologyAdvancements";
import ServicePage from "./components/ServicesPage";
import AboutUs from "./components/AboutUs";
import CalendlyButton from "./components/CalendlyButton";
import Contact from "./pages/Contact";
import TermsAndConditions from "./components/Terms";
import PrivacyPolicy from "./components/Privacy";
import Blog from "./components/Blog";
import SinglePost from "./components/SinglePost";
import BlogList from "./components/BlogList";



function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className="bg-[#f9fafe] min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ServiceSection />
                  <WhyChoose />
                  <ExcellenceStats />
                  <DoctorsSection />
                  <AppointmentCTA />
                  <TechnologyAdvancements />
                  <SuperSpecialities />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/calendly-button" element={<CalendlyButton />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            
            <Route path="/blog/:id" element={<SinglePost />} />
            <Route path="/blog-list" element={<BlogList />} />
            
          </Routes>
          <Routes>
          
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;