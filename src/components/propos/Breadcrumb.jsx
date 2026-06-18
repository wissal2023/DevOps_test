// src/components/propos/Breadcrumb.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';
import headerBg from '../../assets/img/header.png';

const Breadcrumb = ({ title = "À Propos De Nous", breadcrumb = "À Propos de nous" }) => {
  return (
    <section 
      className="relative pt-32 pb-12 overflow-hidden"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left pl-8 md:pl-16 lg:pl-24">
        {/* Page Header */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-text-light mb-1 drop-shadow-lg">
            {title}
          </h1>
        </div>
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
          <Link to="/" className="text-text-light/80 hover:text-custom-red transition flex items-center gap-1">
            <FontAwesomeIcon icon={faHome} size="sm" />
            <span>Accueil</span>
          </Link>
          <FontAwesomeIcon icon={faChevronRight} className="text-text-light/60 text-xs" />
          <span className="text-text-light font-medium">{breadcrumb}</span>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumb;