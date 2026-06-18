import React from 'react';
import chiffreBg from '../../assets/img/chiffre.png';

const Chiffres = () => {
  const stats = [
    {
      id: 1,
      value: "-20%",
      label: "Réduction Des Coûts D'achat",
    },
    {
      id: 2,
      value: "48h",
      label: "Délai Maximal De Livraison",
    },
    {
      id: 3,
      value: "100%",
      label: "Des Enseignes Du Groupe Leaders Approvisionnées",
    },
  ];

  return (
    <section className="relative py-24 text-white overflow-hidden">
      <img 
        src={chiffreBg} 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-primary-dark/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header - Left Aligned */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Chiffres Clés</h2>
          <p className="text-lg text-gray-200 max-w-6xl text-left">
            Chaque chiffre reflète notre capacité à créer de la valeur pour nos partenaires 
            et à optimiser leur chaîne d'approvisionnement.
          </p>
        </div>

        {/* Stats Grid */}
         <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
                <div key={stat.id} className="relative">
                {/* Horizontal Line - Full Width */}
                <div className="w-full h-px bg-white/30 mb-6"></div>
                
                {/* Stat Value and Label - Side by Side */}
                <div className="flex items-baseline gap-4">
                    <div className="text-5xl font-bold">{stat.value}</div>
                    <div className="text-xl font-medium text-gray-200">{stat.label}</div>
                </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Chiffres;