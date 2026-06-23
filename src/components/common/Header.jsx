import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.png'; 

const Header = () => {
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
      : 'bg-white border-gray-100 shadow-sm'
  }`}
>
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="Global Leaders Trade Logo"
        className="h-10 w-auto"
      />
      
    </div>

    {/* Menu */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
      <a 
        href="/"
        className="text-gray-700 hover:text-custom-red transition-colors font-medium"
      >
        Accueil
      </a>
      <a 
        href="/propos" 
        className="text-gray-700 hover:text-custom-red transition-colors font-medium"
      >
        À Propos de nous
      </a>
      <a 
        href="/services" 
        className="text-gray-700 hover:text-custom-red transition-colors font-medium"
      >
        Services
      </a>
      <a 
        href="/contact" 
        className="text-gray-700 hover:text-custom-red transition-colors font-medium"
      >
        Contact
      </a>
    </div>

    {/* Buttons */}
    <div className="flex items-center gap-3">
      <button className="bg-custom-red hover:bg-yellow-600 text-white px-7 py-2.5 rounded-full font-semibold transition text-sm shadow-md hover:shadow-lg">
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

export default Header;