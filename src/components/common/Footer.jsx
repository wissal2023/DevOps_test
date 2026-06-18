import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.footer 
      className="bg-bg-light"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={footerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Column 1 - About */}
          <motion.div variants={columnVariants}>
            <p className="text-gray-custom text-sm leading-relaxed">
              Global Leaders Trade est une société de commerce en gros, filiale du Groupe Leaders, 
              spécialisée dans l'approvisionnement B2B à grande échelle.
            </p>           
          </motion.div>

          {/* Column 2 - Company */}
          <motion.div variants={columnVariants}>
            <h4 className="text-lg font-semibold text-dark mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-custom hover:text-custom-red transition">Accueil</a></li>
              <li><a href="#" className="text-gray-custom hover:text-custom-red transition">À propos</a></li>
              <li><a href="#" className="text-gray-custom hover:text-custom-red transition">Nos services</a></li>
              <li><a href="#" className="text-gray-custom hover:text-custom-red transition">Notre catalogue</a></li>
              <li><a href="#" className="text-gray-custom hover:text-custom-red transition">Contact</a></li>
            </ul>
          </motion.div>

          {/* Column 3 - Useful Links */}
          <motion.div variants={columnVariants}>
            <h4 className="text-lg font-semibold text-dark mb-4">Liens Utiles</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-custom hover:text-custom-red transition">Demande de devis</a></li>
              <li><a href="#" className="text-gray-custom hover:text-custom-red transition">Espace Partenaire</a></li>
            </ul>
          </motion.div>

          {/* Column 4 - Newsletter */}
          <motion.div variants={columnVariants}>
            <h4 className="text-lg font-semibold text-dark mb-4">
              S'abonner Au Notre Newsletter
            </h4>
            <p className="text-gray-custom text-sm mb-4">
              Restez informé de nos dernières actualités et nouveautés.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="flex-1 px-4 py-3 rounded-lg bg-white text-[#757575] placeholder-[#757575] border-0 focus:outline-none focus:ring-2 focus:ring-custom-red"
              />
              <motion.button 
                type="submit" 
                className="inline-flex items-center gap-2 bg-custom-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                S'abonner
                <FontAwesomeIcon icon={faArrowRight} size="sm" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-300 mt-12 pt-4 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-custom text-sm">© Global Leaders Trade</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <motion.a 
              href="#" 
              className="text-gray-custom hover:text-custom-red transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-custom hover:text-custom-red transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;