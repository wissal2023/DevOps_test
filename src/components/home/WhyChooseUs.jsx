import React from 'react';
import { motion } from 'framer-motion';
import { glassPop, fadeInLeft, fadeInRight, staggerChildren, buttonReveal } from '../../utils/animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import whyChooseImage from '../../assets/img/about1-image.png';

const WhyChooseUs = () => {
  return (
    <section id="pourquoi" className="py-20 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        
        {/* Left Content - Staggered */}
        <motion.div 
          className="space-y-6"
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            variants={glassPop}
            className="inline-block bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-medium"
          >
            Pourquoi nous choisir?
          </motion.div>

          <motion.h2 
            variants={fadeInLeft}
            className="text-4xl md:text-5xl font-bold leading-tight text-primary-dark"
          >
            Pourquoi Choisir <br/> Global Leaders Trade ?
          </motion.h2>

          <motion.p 
            variants={fadeInLeft}
            className="text-gray-custom leading-relaxed text-[17px]"
          >
            Nous mettons notre expertise, notre réseau et nos outils digitaux au service de la performance de nos partenaires. En centralisant les achats et en optimisant les opérations, nous aidons les entreprises à gagner en compétitivité, en efficacité et en visibilité sur leurs approvisionnements.
          </motion.p>

          <motion.div variants={fadeInLeft}>
            <h3 className="font-semibold text-lg text-primary-dark">
              Mutualisation des achats
            </h3>
            <p className="text-gray-custom leading-relaxed text-[15px] -mt-1">
              Grâce à la centralisation des besoins du Groupe Leaders et de ses partenaires, nous consolidons les volumes d'achat afin d'obtenir les meilleures conditions auprès des fournisseurs. Cette approche permet de réduire les coûts, d'optimiser les budgets et de renforcer le pouvoir de négociation.
            </p>
          </motion.div>

          <motion.button 
            variants={buttonReveal}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 flex items-center gap-3 bg-custom-red bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold transition-all group"
          >
            Voir Tous Nos Services
            <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition" />
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="rounded-[2.5rem] overflow-hidden"
          initial={{ opacity: 0, x: 16, scale: 1.02 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img 
            src={whyChooseImage}
            alt="Pourquoi choisir Global Leaders Trade" 
            className="w-full h-full object-cover" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;