import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHelmetSafety,
  faPersonDigging,
  faHammer,
  faScrewdriverWrench,
  faChair,
  faLightbulb,
  faFaucet,
  faPaintRoller,
  faWrench,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const Catalogue = () => {
  const categories = [
    {
      id: 1,
      name: "BTP",
      description: "Gros œuvre, structure et fondations.",
      icon: <FontAwesomeIcon icon={faHelmetSafety} size="2x" />,
    },
    {
      id: 2,
      name: "Ciment",
      description: "Ciment gris, blanc et produits spécialisés.",
      icon: <FontAwesomeIcon icon={faPersonDigging} size="2x" />,
    },
    {
      id: 3,
      name: "Fer",
      description: "Acier, ferraille et métaux ferreux.",
      icon: <FontAwesomeIcon icon={faHammer} size="2x" />,
    },
    {
      id: 4,
      name: "Aluminium",
      description: "Profilés, menuiseries et alliages.",
      icon: <FontAwesomeIcon icon={faScrewdriverWrench} size="2x" />,
    },
    {
      id: 5,
      name: "Bois",
      description: "Bois massif, panneaux et contreplaqués.",
      icon: <FontAwesomeIcon icon={faChair} size="2x" />,
    },
    {
      id: 6,
      name: "Électricité",
      description: "Câbles, tableaux et équipements électriques.",
      icon: <FontAwesomeIcon icon={faLightbulb} size="2x" />,
    },
    {
      id: 7,
      name: "Sanitaire",
      description: "Plomberie, robinetterie et équipements sanitaires.",
      icon: <FontAwesomeIcon icon={faFaucet} size="2x" />,
    },
    {
      id: 8,
      name: "Peinture",
      description: "Peintures décoratives et revêtements.",
      icon: <FontAwesomeIcon icon={faPaintRoller} size="2x" />,
    },
    {
      id: 9,
      name: "Outillage",
      description: "Outils professionnels et équipements techniques.",
      icon: <FontAwesomeIcon icon={faWrench} size="2x" />,
    },
  ];

  // Split categories into two rows
  const firstRow = categories.slice(0, 5);
  const secondRow = categories.slice(5);

  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Nos Familles d'Achats
          </h2>
          <p className="text-gray-custom text-lg max-w-7xl mx-auto">
            Une offre complète couvrant les principaux besoins en matériaux, équipements et fournitures des sociétés du Groupe Leaders et de leurs partenaires.
          </p>
        </div>

        {/* First Row - 5 Cards */}
        <div className="grid grid-cols-5 gap-6 mb-6">
          {firstRow.map((category) => (
            <div 
              key={category.id}
              className="bg-primary-dark rounded-3xl p-4 hover:shadow-lg transition-all duration-300 group hover:transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-2xl text-text-light group-hover:bg-custom-red group-hover:text-white transition-all duration-300 mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-text-light mb-2">
                  {category.name}
                </h3>
                <p className="text-text-gray-custom text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 4 Cards Centered */}
        <div className="grid grid-cols-4 gap-6 max-w-5xl mx-auto">
          {secondRow.map((category) => (
            <div 
              key={category.id}
              className="bg-primary-dark rounded-3xl p-4 hover:shadow-lg transition-all duration-300 group hover:transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-2xl text-text-light group-hover:bg-custom-red group-hover:text-white transition-all duration-300 mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-text-light mb-2">
                  {category.name}
                </h3>
                <p className="text-text-gray-custom text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;