// src/pages/Services.jsx
import React from 'react';
import Layout from '../components/common/Layout';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Avantage from '../components/services/Avantage';
import Catalogue from '../components/services/Catalogue';

const Services = () => {
  return (
    <Layout 
      showBreadcrumb={true}
      breadcrumbTitle="Nos Services"
      breadcrumbText="Services"
    >
    <WhyChooseUs />
    <Catalogue />
    <Avantage />
    </Layout>
  );
};

export default Services;