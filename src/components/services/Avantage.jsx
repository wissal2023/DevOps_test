import React from 'react';
import { motion } from 'framer-motion';
import projectImg1 from '../../assets/img/project-img1.png'; 
import projectImg2 from '../../assets/img/project-img2.png';

const cardContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      mass: 0.8,
    }
  }
};

const overlayVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    rotateX: 10,
  },
  show: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 18,
      delay: 0.2,
    }
  }
};

const imageVariants = {
  hidden: { scale: 1.1 },
  show: { 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    }
  }
};

const Avantage = () => {
  const features = [
    {
      id: 1,
      image: projectImg1,
      title: "Réseau de fournisseurs qualifiés",
      description: "Nous collaborons avec un large réseau de fournisseurs nationaux et internationaux sélectionnés selon des critères de qualité, de fiabilité et de performance. Cette diversité nous permet de répondre efficacement aux besoins de nos partenaires tout en sécurisant les approvisionnements."
    },
    {
      id: 2,
      image: projectImg2,
      title: "Plateforme digitale performante",
      description: "Notre portail B2B centralise l'ensemble des opérations d'approvisionnement sur une plateforme moderne et intuitive. Les partenaires peuvent consulter le catalogue, demander des devis, suivre leurs commandes et accéder à leurs documents en quelques clics."
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1,
      }
    }
  };

  const pillVariants = {
    hidden: { scale: 0, opacity: 0 },
    show: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      }
    }
  };

  return (
    <motion.section 
      className="py-20 bg-bg-light overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-left mb-12 max-w-5xl mx-auto"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={pillVariants}
            className="inline-block bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-medium mb-4"
          >
            Nos Avantages
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold leading-tight text-primary-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Une Vision Tournée Vers La Performance
          </motion.h2>

          <motion.p 
            className="text-text-gray-custom text-paragraph-20 leading-relaxed max-w-5xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            En choisissant Global Leaders Trade, vous bénéficiez d'un partenaire stratégique capable d'optimiser chaque étape de votre chaîne d'approvisionnement.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto pb-40"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id}
              variants={cardVariants}
              className="group relative rounded-[2.5rem] overflow-visible transition-all duration-500"
            >
              {/* Image Container */}
              <motion.div 
                className="relative rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                variants={imageVariants}
                initial="hidden"
                whileInView="show"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <img 
                  src={feature.image}
                  alt={feature.title} 
                  className="w-full h-[420px] object-cover" 
                />
                
                {/* Dark Overlay on Image */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
              
              {/* Card Overlay */}
              <motion.div 
                className="absolute bottom-[-120px] left-0 right-0 flex justify-center px-4"
                variants={overlayVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-bg-light rounded-3xl p-8 w-[95%] max-w-md mx-auto shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                  whileHover={{ 
                    boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
                  }}
                >
                  <motion.h3 
                    className="text-2xl font-bold text-primary-dark mb-3 group-hover:text-custom-red transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-text-gray-custom leading-relaxed text-sm"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Avantage;