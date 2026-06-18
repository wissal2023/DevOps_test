import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Mailing = () => {
  return (
    <motion.section 
      className="py-20 bg-primary-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Left - Heading */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
              Restez Informé De Nos Dernières Actualités Et Nouveautés.
            </h3>
          </motion.div>

          {/* Right - Form */}
          <motion.form 
            className="flex flex-col sm:flex-row gap-3 w-full lg:w-[55%]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full pl-14 pr-6 py-4 rounded-full bg-white text-primary-dark placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-custom-red text-base"
              />
            </div>
            <motion.button 
              type="submit" 
              className="inline-flex items-center justify-center gap-2 bg-custom-red hover:bg-red-700 text-white px-10 py-4 rounded-full font-semibold transition whitespace-nowrap text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              S'abonner
              <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Mailing;