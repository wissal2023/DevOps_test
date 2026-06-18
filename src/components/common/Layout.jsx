// src/components/common/Layout.jsx
import React from 'react';
import Header from './Header';
import Breadcrumb from '../propos/Breadcrumb';
import Mailing from '../propos/Mailing';
import Footer from './Footer';

const Layout = ({ 
  children, 
  showBreadcrumb = false, 
  breadcrumbTitle = "À Propos De Nous",
  breadcrumbText = "À Propos de nous"
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {showBreadcrumb && <Breadcrumb title={breadcrumbTitle} breadcrumb={breadcrumbText} />}
      <main>
        {children}
      </main>
      <Mailing />
      <Footer />
    </div>
  );
};

export default Layout;