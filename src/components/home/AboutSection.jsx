import React from 'react';
import aboutImage from '../../assets/img/about2-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        
        {/* Left Image */}
        <div className="rounded-[2.5rem] overflow-hidden">
          <img 
            src={aboutImage}
            alt="Intérieur entrepôt" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <div className="inline-block bg-[#0A2540] text-white px-6 py-2 rounded-full text-sm font-medium">
            Qui sommes-nous ?
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary-dark">
            Votre Partenaire Stratégique<br />En Approvisionnement B2B
          </h2>

          <p className="text-gray-custom leading-relaxed text-[17px]">
            Global Leaders Trade est une société de commerce en gros et une filiale du Groupe Leaders, 
            dédiée à l'approvisionnement et à la distribution de produits destinés aux entreprises, 
            enseignes et partenaires du groupe. Notre mission est de centraliser les achats, optimiser 
            les coûts et garantir un approvisionnement fiable grâce à un réseau de fournisseurs nationaux 
            et internationaux soigneusement sélectionnés.
          </p>

          <div>
            <h3 className="font-semibold text-lg mb-3 text-primary-dark">Notre vision</h3>
            <p className="text-gray-custom leading-relaxed text-[17px]">
              Devenir la centrale d'achat de référence du Groupe Leaders en mutualisant les achats, 
              en renforçant les synergies entre les différentes entités du groupe et en accélérant la 
              transformation digitale des processus d'approvisionnement.
            </p>
          </div>

          <button className="mt-6 flex items-center gap-3 bg-custom-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all group">
            À Propos De Nous
            <FontAwesomeIcon icon={faArrowRight} size="sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;