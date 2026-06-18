// src/pages/Propos.jsx
import React from 'react';
import Layout from '../components/common/Layout';
import AboutSection from '../components/home/AboutSection';
import Processus from '../components/propos/Processus';
import Services from '../components/propos/Services';

const Propos = () => {
  return (
    <Layout 
      showBreadcrumb={true}
      breadcrumbTitle="À Propos De Nous"
      breadcrumbText="À Propos de nous"
    >
      <AboutSection />
      <Processus />
      <Services />
    </Layout>
  );
};

export default Propos;