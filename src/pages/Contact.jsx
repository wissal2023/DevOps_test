// src/pages/Contact.jsx
import React from 'react';
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
      <ContactForm />
      <Map />
    </Layout>
  );
};

export default Contact;