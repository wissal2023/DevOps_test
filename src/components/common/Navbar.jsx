import React, { useEffect, useState } from 'react';

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
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-custom-red rounded-lg flex items-center justify-center text-white font-bold text-xl">
            GL
          </div>
          <div>
            <div className={`font-bold text-lg tracking-tight transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Global Leaders Trade
            </div>
            <div className={`text-[10px] -mt-1 transition-colors ${
              isScrolled ? 'text-gray-500' : 'text-white/70'
            }`}>
              GROUPE LEADERS
            </div>
          </div>
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

         {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            className={`px-7 py-2.5 bg-custom-red hover:bg-red-700 text-white rounded-full font-semibold transition text-sm ${
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