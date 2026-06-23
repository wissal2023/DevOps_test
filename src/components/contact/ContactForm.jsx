import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import contactImage from '../../assets/img/contact-page-img.png.png';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      mass: 0.8,
    }
  },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 1.05,
    x: -20,
  },
  show: { 
    opacity: 1, 
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.2,
    }
  }
};

const formVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    rotateX: 5,
  },
  show: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      delay: 0.3,
    }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  show: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.1
    }
  },
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  }
};

const inputVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    }
  }
};

const ContactForm = () => {
  return (
    <motion.section 
      className="py-20 bg-bg-light overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Info Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Address Card */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="bg-primary-dark rounded-3xl p-8 text-center cursor-pointer"
          >
            <motion.div 
              className="w-14 h-14 rounded-xl text-text-light flex items-center justify-center mx-auto mb-4"
              variants={iconVariants}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
            </motion.div>
            <p className="text-white font-semibold mb-1">Adresse</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Les berges du lac 2, en face de clinique Hannibal
            </p>
          </motion.div>

          {/* Phone Card */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="bg-primary-dark rounded-3xl p-8 text-center cursor-pointer"
          >
            <motion.div 
              className="w-14 h-14 rounded-xl text-text-light flex items-center justify-center mx-auto mb-4"
              variants={iconVariants}
            >
              <FontAwesomeIcon icon={faPhone} size="lg" />
            </motion.div>
            <p className="text-white font-semibold mb-1">Numéro de téléphone</p>
            <p className="text-gray-300 text-sm leading-relaxed">(+216) 00 000 000</p>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="bg-primary-dark rounded-3xl p-8 text-center cursor-pointer"
          >
            <motion.div 
              className="w-14 h-14 rounded-xl text-text-light flex items-center justify-center mx-auto mb-4"
              variants={iconVariants}
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </motion.div>
            <p className="text-white font-semibold mb-1">Adresse Email</p>
            <p className="text-gray-300 text-sm leading-relaxed">globalleaderstrade@support.com</p>
          </motion.div>
        </motion.div>

        {/* Main Content - 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Image */}
          <motion.div 
            className="rounded-3xl overflow-hidden shadow-lg h-full"
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img 
              src={contactImage}
              alt="Contact Global Leaders Trade" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            className="p-8 flex flex-col"
            variants={formVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary-dark mb-4 text-left"
              variants={headerVariants}
            >
              Contactez-Nous
            </motion.h2>
            
            <motion.p 
              className="text-gray-custom text-justify mb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Que vous souhaitiez demander un devis, devenir partenaire ou obtenir plus d'informations sur nos services, notre équipe est à votre disposition pour vous conseiller et vous accompagner.            
            </motion.p>

            <motion.form 
              className="space-y-4 flex-1 flex flex-col"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={inputVariants}
              >
                <div>
                  <input 
                    type="text" 
                    placeholder="Votre Nom" 
                    className="w-full px-4 py-3 rounded-xl bg-white text-primary-dark placeholder-[#757575] border-0 focus:outline-none focus:ring-2 focus:ring-custom-red transition-shadow"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Votre Prénom" 
                    className="w-full px-4 py-3 rounded-xl bg-white text-primary-dark placeholder-[#757575] border-0 focus:outline-none focus:ring-2 focus:ring-custom-red transition-shadow"
                  />
                </div>
              </motion.div>

              <motion.div variants={inputVariants}>
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="w-full px-4 py-3 rounded-xl bg-white text-primary-dark placeholder-[#757575] border-0 focus:outline-none focus:ring-2 focus:ring-custom-red transition-shadow"
                />
              </motion.div>

              <motion.div className="flex-1" variants={inputVariants}>
                <textarea 
                  rows="4" 
                  placeholder="Votre Message" 
                  className="w-full h-full min-h-[100px] px-4 py-3 rounded-xl bg-white text-primary-dark placeholder-[#757575] border-0 focus:outline-none focus:ring-2 focus:ring-custom-red resize-none transition-shadow"
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button 
                type="submit" 
                className="inline-flex items-center gap-3 bg-custom-red bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold transition-all group self-start"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(241, 63, 63, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Envoyer Votre Message
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </motion.span>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;