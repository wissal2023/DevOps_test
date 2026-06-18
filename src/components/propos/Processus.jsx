import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserPlus, 
  faSearch, 
  faFileInvoice, 
  faTruck,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const Processus = () => {
  const steps = [
    {
      id: 1,
      title: "Étape 1",
      subtitle: "Création du compte partenaire",    
    },
    {
      id: 2,
      title: "Étape 2",
      subtitle: "Consultation du catalogue",
    },
    {
      id: 3,
      title: "Étape 3",
      subtitle: "Demande de devis ou commande",
    },
    {
      id: 4,
      title: "Étape 4",
      subtitle: "Livraison et suivi",     
    },
  ];

  return (
    <section className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h3 className="text-text-light text-paragraph-24 font-semibold">
              Processus De Commande
            </h3>
            <h2 className="text-2xl md:text-4xl text-text-light leading-tight font-semibold">
              Un Processus Simple, Rapide Et Entièrement Digitalisé
            </h2>

            <p className="text-text-gray-custom text-lg leading-relaxed">
              Chez Global Leaders Trade, nous avons conçu un parcours d'approvisionnement fluide permettant à nos partenaires de gérer leurs achats en toute simplicité, depuis la demande jusqu'à la livraison.
            </p>
            <p className="text-text-gray-custom text-lg leading-relaxed">
              De l'inscription à la réception des produits, chaque étape a été pensée pour offrir aux partenaires une expérience simple, transparente et efficace, tout en garantissant un contrôle total sur leurs opérations d'approvisionnement.
            </p>

            <button className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-primary-dark px-9 py-3 rounded-full font-bold transition-all group">
              Rejoignez Nous
            </button>
          </div>

          {/* Right Column - Steps Cards in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4">
            {steps.map((step) => (
              <div 
                key={step.id}
                className="bg-card-dark rounded-2xl p-9 flex flex-col items-center justify-center gap-2 hover:bg-card-dark/80 transition-all duration-300 group text-center min-h-[150px]"
              >       
                {/* Content */}
                <div>
                  <div className="text-bg-light text-heading-44 font-semibold mb-1">
                    {step.title}
                  </div>
                  <h3 className="text-text-gray-custom font-semibold text-base leading-tight">
                    {step.subtitle}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processus;