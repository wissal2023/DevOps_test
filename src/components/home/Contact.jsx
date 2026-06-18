import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot,
  faPaperPlane 
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-12">
        {/* Contact Content - 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Text and Contact Info */}
          <div className="space-y-6">
            {/* add more padding and margin to have this part of the text at the left center */}
            <div className="pt-14">
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contactez - Nous
              </h2>
            </div>

            {/* Description */}
            <p className="text-white text-[20px] leading-relaxed mb-8">
            Une question, un besoin d'approvisionnement ou un projet de partenariat ? 
            Notre équipe est à votre écoute pour vous accompagner et répondre à vos demandes dans les meilleurs délais.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-custom-red text-xl w-8 text-center">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <p className="text-white text-lg font-medium">+216 00 000 000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-custom-red text-xl w-8 text-center">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <p className="text-white text-lg font-medium">globalleaderstrade@support.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-custom-red text-xl w-8 text-center">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div>
                  <p className="text-white text-lg font-medium">Les berges du lac 2, en face de clinique hannibla</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
         <div className="bg-white rounded-3xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6 text-center">
              Parlons de votre projet
            </h2>
            
            <form className="space-y-4">
              {/* Name and First Name - Side by Side */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Votre Nom" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-200 text-white border-0 focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Votre Prénom" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-200 text-white border-0 focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <input 
                  type="email" 
                  placeholder="Votre Email" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-200 text-white placeholder:text-placeholder border-0 focus:outline-none focus:ring-0"
                />
              </div>

              {/* Message */}
              <div>
                <textarea 
                  rows="4" 
                  placeholder="Votre Message" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-200 text-white placeholder:text-placeholder border-0 focus:outline-none focus:ring-0 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
                <button type="submit" className="inline-flex items-center gap-3 bg-custom-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all group">
                Envoyer Votre Message
                    <FontAwesomeIcon icon={faPaperPlane} className="group-hover:translate-x-1 transition" />
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;