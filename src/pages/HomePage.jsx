import React from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Chiffres from '../components/home/Chiffres';
import Avantage from '../components/home/Avantage';
import Action from '../components/home/Action';
import Contact from '../components/home/Contact';
import Footer from '../components/common/Footer';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <WhyChooseUs />
      <Chiffres />
      <Avantage />
      <Action />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;