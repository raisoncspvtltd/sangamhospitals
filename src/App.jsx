import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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



// Pages
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#f9fafe] min-h-screen">

        <Navbar />

        {/* Routes */}
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;