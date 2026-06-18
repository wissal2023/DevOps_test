import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHandshake } from '@fortawesome/free-solid-svg-icons';
import whyChooseImage from '../../assets/img/about1-image.png'; 
const WhyChooseUs = () => {
  return (
    <section id="pourquoi" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
            <div className="inline-block bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-medium">
                Pourquoi nous choisir?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary-dark">
                Pourquoi Choisir <br/> Global Leaders Trade ?
            </h2>
            <p className="text-gray-custom leading-relaxed text-[17px]">
                Nous mettons notre expertise, notre réseau et nos outils digitaux au service de la performance de nos partenaires. En centralisant les achats et en optimisant les opérations, nous aidons les entreprises à gagner en compétitivité, en efficacité et en visibilité sur leurs approvisionnements.
            </p>
            <div>
                <h3 className="font-semibold text-lg text-primary-dark">
                    Mutualisation des achats
                </h3>
                <p className="text-gray-custom leading-relaxed text-[15px] -mt-1">
                    Grâce à la centralisation des besoins du Groupe Leaders et de ses partenaires, nous consolidons les volumes d'achat afin d'obtenir les meilleures conditions auprès des fournisseurs. Cette approche permet de réduire les coûts, d'optimiser les budgets et de renforcer le pouvoir de négociation.
                </p>
            </div>
          <button className="mt-6 flex items-center gap-3 bg-custom-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all group">
            Voir Tous Nos Services
            <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition" />
          </button>
        </div>

        {/* Right Image */}
        <div className="rounded-[2.5rem] overflow-hidden">
          <img 
            src={whyChooseImage}
            alt="Pourquoi choisir Global Leaders Trade" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;