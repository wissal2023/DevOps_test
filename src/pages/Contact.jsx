import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/common/Layout';
import ContactForm from '../components/contact/ContactForm';
import Map from '../components/contact/Map';

const Contact = () => {
  return (
    <Layout 
      showBreadcrumb={true}
      breadcrumbTitle="Contactez-Nous"
      breadcrumbText="Contact"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ContactForm />
        <Map />
      </motion.div>
    </Layout>
  );
};

export default Contact;