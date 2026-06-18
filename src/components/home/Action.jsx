import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import actionBg from '../../assets/img/newsletter.png';

const Action = () => {
  return (
    <section className="relative py-24 text-white overflow-hidden">
      {/* Background Image */}
      <img 
        src={actionBg}
        alt="Rejoignez Le Réseau" 
        className="absolute inset-0 w-full h-full object-cover" 
      />      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8">
          {/* Left - Heading */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-tight">
              Rejoignez Le Réseau D'approvisionnement Du Groupe Leaders
            </h2>
          </div>

          {/* Right - Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <button className="inline-flex items-center gap-3 bg-custom-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all group text-lg whitespace-nowrap">
              Demander Un Devis
              <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition" />
            </button>
            <button className="inline-flex items-center gap-3 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all group text-lg whitespace-nowrap">
              Devenir Partenaire
              <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;