import React, { useEffect, useState } from 'react';
import logo_black from '../../assets/img/logo_black.png'; 
import logo from '../../assets/img/logo.png'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-white border-gray-200 shadow-lg'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo when scrolled changes to logo.png */}
        <div className="flex items-center gap-3">
          <img
            src={isScrolled ? logo : logo_black}
            alt="Global Leaders Trade Logo"
            className="h-10 w-auto"
          />
        </div>


        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a 
            href="/"
            className={`transition-colors font-medium ${
              isScrolled ? 'text-gray-700 hover:text-custom-red' : 'text-white hover:text-custom-red'
            }`}
          >
            Accueil
          </a>
          <a 
            href="/propos" 
            className={`transition-colors font-medium ${
              isScrolled ? 'text-gray-700 hover:text-custom-red' : 'text-white hover:text-custom-red'
            }`}
          >
            À Propos de nous
          </a>
          <a 
            href="/services" 
            className={`transition-colors font-medium ${
              isScrolled ? 'text-gray-700 hover:text-custom-red' : 'text-white hover:text-custom-red'
            }`}
          >
            Services
          </a>
          <a 
            href="/contact" 
            className={`transition-colors font-medium ${
              isScrolled ? 'text-gray-700 hover:text-custom-red' : 'text-white hover:text-custom-red'
            }`}
          >
            Contact
          </a>
        </div>

         {/* Buttons: changed color from red to 'custom-red': '#e3af4b', change the hover color */}
        <div className="flex items-center gap-3">

          <button
            className={`px-7 py-2.5 bg-custom-red hover:bg-yellow-600 text-white rounded-full font-semibold transition text-sm ${
              isScrolled
                ? 'border-white/30 hover:bg-white/10 text-white'
                : 'border-white/30 hover:bg-white/10 text-white'
            }`}
          >
            Espace Client
          </button>
          <button className="px-6 py-2.5 text-sm font-medium border-2 border-custom-red text-custom-red rounded-full transition-all duration-300 hover:bg-custom-red hover:text-white hover:shadow-lg transform hover:scale-105">
            Demander Un Devis
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;