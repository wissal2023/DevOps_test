import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildrenFast, cardReveal } from '../../utils/animations';

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
    <section className="py-20 bg-primary-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-6"
            variants={staggerChildrenFast}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 
              variants={fadeInUp}
              className="text-text-light text-paragraph-24 font-semibold"
            >
              Processus De Commande
            </motion.h3>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl md:text-4xl text-text-light leading-tight font-semibold"
            >
              Un Processus Simple, Rapide Et Entièrement Digitalisé
            </motion.h2>

            <motion.p 
              variants={fadeInUp}
              className="text-text-gray-custom text-lg leading-relaxed"
            >
              Chez Global Leaders Trade, nous avons conçu un parcours d'approvisionnement fluide permettant à nos partenaires de gérer leurs achats en toute simplicité, depuis la demande jusqu'à la livraison.
            </motion.p>
            
            <motion.p 
              variants={fadeInUp}
              className="text-text-gray-custom text-lg leading-relaxed"
            >
              De l'inscription à la réception des produits, chaque étape a été pensée pour offrir aux partenaires une expérience simple, transparente et efficace, tout en garantissant un contrôle total sur leurs opérations d'approvisionnement.
            </motion.p>

            <motion.button 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-primary-dark px-9 py-3 rounded-full font-bold transition-all group"
            >
              Rejoignez Nous
            </motion.button>
          </motion.div>

          {/* Right Column - Steps Cards in 2x2 Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            variants={staggerChildrenFast}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {steps.map((step) => (
              <motion.div 
                key={step.id}
                variants={cardReveal}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-card-dark rounded-2xl p-9 flex flex-col items-center justify-center gap-2 hover:bg-card-dark/80 transition-all duration-300 group text-center min-h-[150px]"
              >       
                <div>
                  <div className="text-bg-light text-heading-44 font-semibold mb-1">
                    {step.title}
                  </div>
                  <h3 className="text-text-gray-custom font-semibold text-base leading-tight">
                    {step.subtitle}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Processus;