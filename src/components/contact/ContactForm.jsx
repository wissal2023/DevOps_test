import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt,
  faPhone,
  faEnvelope  
} from '@fortawesome/free-solid-svg-icons';
import contactImage from '../../assets/img/contact-page-img.png.png';

const ContactForm = () => {
  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Info Cards - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Address Card */}
          <div className="bg-primary-dark rounded-3xl p-8 text-center hover:bg-card-dark transition-all duration-300 group">
            <div className="w-14 h-8 rounded-xl text-text-light flex items-center justify-center mx-auto mb-4 group-hover:text-text-light group-hover:text-white transition-all duration-300">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
            </div>
            <p className="text-white font-semibold mb-1">Adresse</p>
            <p className="text-gray-300 text-sm leading-relaxed">
                Les berges du lac 2, en face de clinique Hannibal
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-primary-dark rounded-3xl p-8 text-center hover:bg-card-dark transition-all duration-300 group">
            <div className="w-14 h-8 rounded-xl text-text-light flex items-center justify-center mx-auto mb-4 group-hover:text-text-light group-hover:text-white transition-all duration-300">
              <FontAwesomeIcon icon={faPhone} size="lg" />
            </div>
            <p className="text-white font-semibold mb-1">Numéro de téléphone</p>
            <p className="text-gray-300 text-sm leading-relaxed">(+216) 00 000 000</p>
          </div>

          {/* Email Card */}
          <div className="bg-primary-dark rounded-3xl p-8 text-center hover:bg-card-dark transition-all duration-300 group">
            <div className="w-14 h-8 rounded-xl text-text-light flex items-center justify-center mx-auto mb-4 group-hover:text-text-light group-hover:text-white transition-all duration-300">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </div>
            <p className="text-white font-semibold mb-1">Adresse Email</p>
            <p className="text-gray-300 text-sm leading-relaxed">globalleaderstrade@support.com</p>
          </div>
        </div>

       {/* Main Content - 2 Columns with Equal Height */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Image */}
          <div className="rounded-3xl overflow-hidden shadow-lg h-full">
            <img 
              src={contactImage}
              alt="Contact Global Leaders Trade" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Contact Form */}
          <div className="p-8 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4 text-left">
              Contactez-Nous
            </h2>
            <p className="text-gray-custom text-justify mb-6">
                Que vous souhaitiez demander un devis, devenir partenaire ou obtenir plus d'informations sur nos services, notre équipe est à votre disposition pour vous conseiller et vous accompagner.            
            </p>

            <form className="space-y-4 flex-1 flex flex-col">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Votre Nom" 
                    className="w-full px-4 py-3 rounded-xl bg-text-light text-white placeholder-[#757575] border-0 focus:outline-none focus:ring-2 focus:ring-custom-red"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Votre Prénom" 
                    className="w-full px-4 py-3 rounded-xl bg-text-light text-white placeholder-[#757575] border-0 focus:outline-none focus:ring-2 focus:ring-custom-red"
                  />
                </div>
              </div>

              <div>
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="w-full px-4 py-3 rounded-xl bg-text-light text-white placeholder-[#757575] border-0 focus:outline-none focus:ring-2 focus:ring-custom-red"
                />
              </div>

              <div className="flex-1">
                <textarea 
                  rows="4" 
                  placeholder="Votre Message" 
                  className="w-full h-full min-h-[100px] px-4 py-3 rounded-xl bg-text-light text-white placeholder-[#757575] border-0 focus:outline-none focus:ring-2 focus:ring-custom-red resize-none"
                ></textarea>
              </div>

              {/* Submit Button - Left Aligned */}
              <button 
                type="submit" 
                className="inline-flex items-center gap-3 bg-custom-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all group self-start"
              >
                Envoyer Votre Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;