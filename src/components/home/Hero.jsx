import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, staggerChildren } from '../../utils/animations';
import hero from '../../assets/img/Hero.png';

const Hero = () => {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with scale reveal */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <img 
          src={hero}
          alt="Warehouse" 
          className="w-full h-full object-cover" 
        />
      </motion.div>
      
      {/* Overlay fade in */}
      <motion.div 
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Content with stagger */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto text-center px-6"
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h1 
          variants={fadeInDown}
          className="text-6xl md:text-7xl font-bold leading-tight mb-6 text-white"
        >
          Votre Centrale D'Achat<br />Du Groupe Leaders
        </motion.h1>
        
        <motion.p 
          variants={fadeInUp}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-100"
        >
          Global Leaders Trade accompagne les entreprises avec des solutions d'approvisionnement 
          fiables, des coûts optimisés et une gestion digitale complète de leurs achats.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={staggerChildren}
        >
          <motion.button 
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-custom-red bg-yellow-600 rounded-full text-lg font-semibold transition shadow-md hover:shadow-lg"
          >
            Demander Un Devis
          </motion.button>
          <motion.button 
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-white hover:bg-white/10 rounded-full text-lg font-semibold transition"
          >
            Accès Partenaire
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;