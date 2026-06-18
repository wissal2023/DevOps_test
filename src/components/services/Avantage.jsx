import React from 'react';
import projectImg1 from '../../assets/img/project-img1.png'; 
import projectImg2 from '../../assets/img/project-img2.png';

const Avantage = () => {
  const features = [
    {
      id: 1,
      image: projectImg1,
      title: "Réseau de fournisseurs qualifiés",
      description: "Nous collaborons avec un large réseau de fournisseurs nationaux et internationaux sélectionnés selon des critères de qualité, de fiabilité et de performance. Cette diversité nous permet de répondre efficacement aux besoins de nos partenaires tout en sécurisant les approvisionnements."
    },
    {
      id: 2,
      image: projectImg2,
      title: "Plateforme digitale performante",
      description: "Notre portail B2B centralise l'ensemble des opérations d'approvisionnement sur une plateforme moderne et intuitive. Les partenaires peuvent consulter le catalogue, demander des devis, suivre leurs commandes et accéder à leurs documents en quelques clics."
    },
  ];

  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left Aligned */}
        <div className="text-left mb-12 max-w-5xl mx-auto">
          <div className="inline-block bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            Nos Avantages
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary-dark mb-4">
            Une Vision Tournée Vers La Performance
          </h2>

          <p className="text-text-gray-custom text-paragraph-20 leading-relaxed max-w-5xl">
            En choisissant Global Leaders Trade, vous bénéficiez d'un partenaire stratégique capable d'optimiser chaque étape de votre chaîne d'approvisionnement.
          </p>
        </div>

        {/* Features Grid - Cards with Bottom-Center Overlay */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto pb-40">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="group relative rounded-[2.5rem] overflow-visible transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src={feature.image}
                  alt={feature.title} 
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Dark Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              
              {/* Card Overlay */}
              <div className="absolute bottom-[-120px] left-0 right-0 flex justify-center px-4">
                <div className="bg-bg-light rounded-3xl p-8 w-[95%] max-w-md mx-auto shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-primary-dark mb-3 group-hover:text-custom-red transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-text-gray-custom leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Avantage;