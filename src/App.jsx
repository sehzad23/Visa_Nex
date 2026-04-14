import React from 'react'
import Navbar from "./components/layout/Navbar";
import Reveal from './components/common/Reveal'
import HeroSection from "./components/sections/HeroSection";
import StatsSection from "./components/sections/StatsSection";
import ServicesSection from "./components/sections/ServicesSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";
import FAQSection from "./components/sections/FAQSection";
import AboutSection from "./components/sections/AboutSection";
import GlobalNetworkSection from "./components/sections/GlobalNetworkSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";
const App = () => {
  return (
    <div>
     <Reveal />
     <Navbar />
     <HeroSection />
     <AboutSection />
     <StatsSection />
     <ServicesSection />
     <TestimonialsSection />
     <WhyChooseUsSection />
     <FAQSection />
     <GlobalNetworkSection />
     <ContactSection />
     <Footer />
    </div>
  )
}

export default App