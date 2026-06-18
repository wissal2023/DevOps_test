import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Mailing = () => {
  return (
    <section className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Left - Heading */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
              Restez Informé De Nos Dernières Actualités Et Nouveautés.
            </h3>
          </div>

          {/* Right - Form */}
          <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-[55%]">
            <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full pl-14 pr-6 py-4 rounded-full bg-white text-primary-dark placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-custom-red text-base"
              />
            </div>
            <button 
              type="submit" 
              className="inline-flex items-center justify-center gap-2 bg-custom-red hover:bg-red-700 text-white px-10 py-4 rounded-full font-semibold transition whitespace-nowrap text-base"
            >
              S'abonner
              <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Mailing;