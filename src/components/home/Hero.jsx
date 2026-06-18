import React from 'react';
import { Globe, Truck, Shield, Users, TrendingUp, Clock, FileText } from 'lucide-react';
import hero from '../../assets/img/Hero.png';

const Hero = () => {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* src of the img is src\assets\img\Hero.png */}
        <img 
          src={hero}
          alt="Warehouse" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6 text-white">
            Votre Centrale D'Achat<br />Du Groupe Leaders
          </h1>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-100">
            Global Leaders Trade accompagne les entreprises avec des solutions d'approvisionnement 
            fiables, des coûts optimisés et une gestion digitale complète de leurs achats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-custom-red hover:bg-red-700 rounded-full text-lg font-semibold transition shadow-md hover:shadow-lg">
              Demander Un Devis
            </button>
            <button className="px-10 py-4 border-2 border-white hover:bg-white/10 rounded-full text-lg font-semibold transition">
              Accès Partenaire
            </button>
          </div>
        </div>
      </section>

  );
};

export default Hero;