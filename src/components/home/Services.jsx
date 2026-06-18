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
        "Nous regroupons les volumes d'achat des différentes entités du Groupe Leaders afin de négocier des conditions tarifaires plus avantageuses et de standardiser les références stratégiques. Cette mutualisation permet de réduire les coûts, sécuriser les approvisionnements et améliorer le pouvoir de négociation auprès des fournisseurs.",
      icon: <FontAwesomeIcon icon={faShoppingBag} size="2x" />,
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      hoverBg: 'group-hover:bg-blue-500',
    },
    {
      id: 2,
      title: "Approvisionnement B2B",
      description:
        "Nous assurons l'achat et la distribution de produits, équipements et matériaux destinés aux professionnels, distributeurs et partenaires du réseau. Notre rôle est de garantir la disponibilité, traçabilité et continuité d'approvisionnement pour les opérations du groupe.",
      icon: <FontAwesomeIcon icon={faTruck} size="2x" />,
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      hoverBg: 'group-hover:bg-blue-500',
    },
    {
      id: 3,
      title: "Gestion des Devis",
      description:
        "Le portail digital permet de soumettre des demandes de devis en ligne, d'accélérer les validations et de transformer rapidement les demandes en bons de commande. L'objectif est de réduire les délais administratifs et d'améliorer la réactivité commerciale.",
      icon: <FontAwesomeIcon icon={faFileInvoice} size="2x" />,
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      hoverBg: 'group-hover:bg-blue-500',
    },
    {
      id: 4,
      title: "Logistique Centralisée",
      description:
        "Nous coordonnons le stockage, la préparation et la distribution afin d'alimenter l'ensemble du réseau du Groupe Leaders depuis un dispositif logistique centralisé. Cette organisation vise à réduire les ruptures, optimiser les flux et garantir des délais maîtrisés.",
      icon: <FontAwesomeIcon icon={faBox} size="2x" />,
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      hoverBg: 'group-hover:bg-blue-500',
    },
  ];

  return (
    <section className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-6xl mx-auto px-4 sm:px-8">
          {/* Inline pill-style title */}
          <div className="flex justify-center mb-6">
            <div className="inline-block bg-white text-primary-dark px-6 py-2 rounded-full text-sm font-medium">
              Nos services
            </div>
          </div>

          {/* section name */}
          <h2 className="text-heading-44 font-bold leading-52 text-white capitalize max-w-6xl mx-auto mb-4">
            L'excellence Opérationnelle Au Service De Vos Achats.
          </h2>

        <p className="text-paragraph-24 text-white max-w-5xl mx-auto leading-relaxed">
          Global Leaders Trade accompagne les enseignes du Groupe Leaders, les
          distributeurs agréés et les partenaires professionnels à travers une
          offre complète couvrant l'achat, l'approvisionnement, la gestion des
          demandes et la logistique.
        </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card-dark rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:transform hover:-translate-y-1">
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div
                  className={`${service.iconBg} p-4 rounded-2xl ${service.iconColor} transition-all duration-300 ${service.hoverBg} group-hover:text-white`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center gap-3 bg-custom-red hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all group">
            Voir Tous Nos Services
            <span className="group-hover:translate-x-1 transition">
              <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

