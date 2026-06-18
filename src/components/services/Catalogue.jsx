import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHelmetSafety,
  faPersonDigging,
  faHammer,
  faScrewdriverWrench,
  faChair,
  faLightbulb,
  faFaucet,
  faPaintRoller,
  faWrench
} from '@fortawesome/free-solid-svg-icons';

// Advanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.92,
    rotateX: 8
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      mass: 0.8,
    }
  },
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
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
  hidden: { opacity: 0, y: -30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.1
    }
  }
};

const Catalogue = () => {
  const categories = [
    {
      id: 1,
      name: "BTP",
      description: "Gros œuvre, structure et fondations.",
      icon: <FontAwesomeIcon icon={faHelmetSafety} size="2x" />,
    },
    {
      id: 2,
      name: "Ciment",
      description: "Ciment gris, blanc et produits spécialisés.",
      icon: <FontAwesomeIcon icon={faPersonDigging} size="2x" />,
    },
    {
      id: 3,
      name: "Fer",
      description: "Acier, ferraille et métaux ferreux.",
      icon: <FontAwesomeIcon icon={faHammer} size="2x" />,
    },
    {
      id: 4,
      name: "Aluminium",
      description: "Profilés, menuiseries et alliages.",
      icon: <FontAwesomeIcon icon={faScrewdriverWrench} size="2x" />,
    },
    {
      id: 5,
      name: "Bois",
      description: "Bois massif, panneaux et contreplaqués.",
      icon: <FontAwesomeIcon icon={faChair} size="2x" />,
    },
    {
      id: 6,
      name: "Électricité",
      description: "Câbles, tableaux et équipements électriques.",
      icon: <FontAwesomeIcon icon={faLightbulb} size="2x" />,
    },
    {
      id: 7,
      name: "Sanitaire",
      description: "Plomberie, robinetterie et équipements sanitaires.",
      icon: <FontAwesomeIcon icon={faFaucet} size="2x" />,
    },
    {
      id: 8,
      name: "Peinture",
      description: "Peintures décoratives et revêtements.",
      icon: <FontAwesomeIcon icon={faPaintRoller} size="2x" />,
    },
    {
      id: 9,
      name: "Outillage",
      description: "Outils professionnels et équipements techniques.",
      icon: <FontAwesomeIcon icon={faWrench} size="2x" />,
    },
  ];

  const firstRow = categories.slice(0, 5);
  const secondRow = categories.slice(5);

  return (
    <motion.section 
      className="py-20 bg-bg-light overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with advanced animation */}
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-primary-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Nos Familles d'Achats
          </motion.h2>

          <motion.p 
            className="text-gray-custom text-lg max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Une offre complète couvrant les principaux besoins en matériaux, équipements et fournitures des sociétés du Groupe Leaders et de leurs partenaires.
          </motion.p>
        </motion.div>

        {/* First Row - 5 Cards with stagger */}
        <motion.div 
          className="grid grid-cols-5 gap-6 mb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {firstRow.map((category) => (
            <motion.div 
              key={category.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-primary-dark rounded-3xl p-4 border border-gray-100 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="p-4 rounded-2xl text-text-light mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                  
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-text-light mb-2">
                  {category.name}
                </h3>
                <p className="text-text-gray-custom text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row - 4 Cards Centered with stagger */}
        <motion.div 
          className="grid grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {secondRow.map((category) => (
            <motion.div 
              key={category.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-primary-dark rounded-3xl p-4 border border-gray-100 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="p-4 rounded-2xl text-text-light mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                  
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-text-light mb-2">
                  {category.name}
                </h3>
                <p className="text-text-gray-custom text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Catalogue;