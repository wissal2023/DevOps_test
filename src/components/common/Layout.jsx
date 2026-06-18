import React from 'react';
import { motion } from 'framer-motion';
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
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      {showBreadcrumb && <Breadcrumb title={breadcrumbTitle} breadcrumb={breadcrumbText} />}
      <main>
        {children}
      </main>
      <Mailing />
      <Footer />
    </motion.div>
  );
};

export default Layout;