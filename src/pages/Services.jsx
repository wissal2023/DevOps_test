import React from 'react';
import { motion } from 'framer-motion';
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <WhyChooseUs />
        <Catalogue />
        <Avantage />
      </motion.div>
    </Layout>
  );
};

export default Services;