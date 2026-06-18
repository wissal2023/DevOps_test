import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot,
  faPaperPlane 
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className="py-20 bg-primary-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-12">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="pt-14">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contactez - Nous
              </h2>
            </div>

            <motion.p 
              className="text-white text-[20px] leading-relaxed mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Une question, un besoin d'approvisionnement ou un projet de partenariat ? 
              Notre équipe est à votre écoute pour vous accompagner et répondre à vos demandes dans les meilleurs délais.
            </motion.p>

            {/* Contact Info - Staggered */}
            <div className="space-y-4">
              {[
                { icon: faPhone, text: "+216 00 000 000" },
                { icon: faEnvelope, text: "globalleaderstrade@support.com" },
                { icon: faLocationDot, text: "Les berges du lac 2, en face de clinique hannibla" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="text-custom-red text-xl w-8 text-center">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div>
                    <p className="text-white text-lg font-medium">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form Card */}
          <motion.div 
            className="bg-white rounded-3xl p-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary-dark mb-6 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Parlons de votre projet
            </motion.h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Votre Nom" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-200 text-primary-dark placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-custom-red"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Votre Prénom" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-200 text-primary-dark placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-custom-red"
                  />
                </div>
              </div>

              <div>
                <input 
                  type="email" 
                  placeholder="Votre Email" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-200 text-primary-dark placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-custom-red"
                />
              </div>

              <div>
                <textarea 
                  rows="4" 
                  placeholder="Votre Message" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-200 text-primary-dark placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-custom-red resize-none"
                ></textarea>
              </div>

              <motion.button 
                type="submit" 
                className="inline-flex items-center gap-3 bg-custom-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer Votre Message
                <FontAwesomeIcon icon={faPaperPlane} className="group-hover:translate-x-1 transition" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;