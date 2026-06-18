import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <p className="text-gray-custom text-sm leading-relaxed">
              Global Leaders Trade est une société de commerce en gros, filiale du Groupe Leaders, 
              spécialisée dans l'approvisionnement B2B à grande échelle.
            </p>           
          </div>

          {/* Column 2 - Company */}
          <div>
            <h4 className="text-lg font-semibold text-dark mb-4">Entreprise</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-custom hover:text-custom-red transition">Accueil</a></li>
              <li><a href="#" className="text-gray-custom hover:text-custom-red transition">À propos</a></li>
              <li><a href="#" className="text-gray-custom hover:text-custom-red transition">Nos services</a></li>
              <li><a href="#" className="text-gray-custom hover:text-custom-red transition">Notre catalogue</a></li>
              <li><a href="#" className="text-gray-custom hover:text-custom-red transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Useful Links */}
          <div>
            <h4 className="text-lg font-semibold text-dark mb-4">Liens Utiles</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-custom hover:text-custom-red transition">Demande de devis</a></li>
              <li><a href="#" className="text-gray-custom hover:text-custom-red transition">Espace Partenaire</a></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
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
                className="flex-1 px-4 py-3 rounded-lg bg-white text-[#757575] placeholder-[#757575] border-0 focus:outline-none focus:ring-0"
              />
              <button 
                type="submit" 
                className="inline-flex items-center gap-2 bg-custom-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap"
              >
                S'abonner
                <FontAwesomeIcon icon={faArrowRight} size="sm" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-custom text-sm">© Global Leaders Trade</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="text-gray-custom hover:text-custom-red transition">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="#" className="text-gray-custom hover:text-custom-red transition">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;