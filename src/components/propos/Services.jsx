import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBag,
  faTruck,
  faBox,
  faArrowRight,
  faFileInvoice,
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Centrale d'Achat",
      description:
        "Nous regroupons les volumes d'achat des différentes entités du Groupe Leaders afin de négocier des conditions tarifaires plus avantageuses et de standardiser les références stratégiques. Cette mutualisation permet de réduire les coûts, sécuriser les approvisionnements et améliorer le pouvoir de négociation auprès des fournisseurs.",    },
    {
      id: 2,
      title: "Approvisionnement B2B",
      description:
        "Nous assurons l'achat et la distribution de produits, équipements et matériaux destinés aux professionnels, distributeurs et partenaires du réseau. Notre rôle est de garantir la disponibilité, traçabilité et continuité d'approvisionnement pour les opérations du groupe.",
       },
    {
      id: 3,
      title: "Gestion des Devis",
      description:
        "Le portail digital permet de soumettre des demandes de devis en ligne, d'accélérer les validations et de transformer rapidement les demandes en bons de commande. L'objectif est de réduire les délais administratifs et d'améliorer la réactivité commerciale.",
    },
    {
      id: 4,
      title: "Logistique Centralisée",
      description:
        "Nous coordonnons le stockage, la préparation et la distribution afin d'alimenter l'ensemble du réseau du Groupe Leaders depuis un dispositif logistique centralisé. Cette organisation vise à réduire les ruptures, optimiser les flux et garantir des délais maîtrisés.",
    },
  ];

  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-6xl mx-auto px-4 sm:px-8">
          {/* Inline pill-style title - Inverted */}
          <div className="flex justify-center mb-6">
            <div className="inline-block bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-medium">
              Nos services
            </div>
          </div>

          {/* section name - Inverted: text-primary-dark instead of white */}
          <h2 className="text-heading-44 font-bold leading-52 text-primary-dark capitalize max-w-6xl mx-auto mb-4">
            Transformez vos achats en levier de performance.
          </h2>

          {/* Description - Inverted: text-primary-dark instead of white */}
          <p className="text-paragraph-24 text-primary-dark max-w-5xl mx-auto leading-relaxed">
            Nous simplifions vos achats pour que vous puissiez vous concentrer sur votre activité.
          </p>
        </div>

        {/* Services Grid - Inverted: cards now white with dark text */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-primary-dark rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start gap-5">   
                {/* Content - Inverted: text-primary-dark instead of white */}
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-text-light mb-3">
                    {service.title}
                  </h4>
                  <p className="text-text-gray-custom leading-relaxed text-justify">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button - Inverted: white button with red text */}
        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center gap-3 bg-custom-red text-text-light border-2 border-custom-red px-8 py-3 rounded-full font-semibold transition-all group">
            Voir Tous Nos Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;