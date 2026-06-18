import React from 'react';
import { motion } from 'framer-motion';
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
        {/* Section Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">Chiffres Clés</h2>
          <p className="text-lg text-gray-200 max-w-6xl text-left">
            Chaque chiffre reflète notre capacité à créer de la valeur pour nos partenaires 
            et à optimiser leur chaîne d'approvisionnement.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id} 
              className="relative"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Horizontal Line Animation */}
              <motion.div 
                className="w-full h-px bg-white/30 mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                viewport={{ once: true }}
                style={{ transformOrigin: 'left' }}
              ></motion.div>
              
              {/* Stat Value and Label */}
              <div className="flex items-baseline gap-4">
                <motion.div 
                  className="text-5xl font-bold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <motion.div 
                  className="text-xl font-medium text-gray-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {stat.label}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chiffres;