import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import actionBg from '../../assets/img/newsletter.png';

const Action = () => {
  return (
    <motion.section 
      className="relative py-24 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img 
          src={actionBg}
          alt="Rejoignez Le Réseau" 
          className="w-full h-full object-cover" 
        />
      </motion.div>      

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Left - Heading */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-tight">
              Rejoignez Le Réseau D'approvisionnement Du Groupe Leaders
            </h2>
          </motion.div>

          {/* Right - Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <motion.button 
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-custom-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all group text-lg whitespace-nowrap"
            >
              Demander Un Devis
              <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition" />
            </motion.button>
            <motion.button 
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all group text-lg whitespace-nowrap"
            >
              Devenir Partenaire
              <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Action;