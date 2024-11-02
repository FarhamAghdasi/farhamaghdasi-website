import React from 'react';
import {
    Header, Footer, ServicesLine, Inner, Faq, Bio
} from '../components';
import SEO from '../SEO';

const ServicesPage = () => {
  return (
    <>
      {/* کامپوننت SEO */}
      <SEO 
        title="Services"
        description="Explore the various programming services offered by Farham Aghdasi, specializing in web development and software solutions."
        url={window.location.href} // لینک صفحه خدمات
      />
      
      <Header />
      <Inner title="Services" first="Home" secend="Services" />
      <Bio />
      <ServicesLine />
      <Faq />
      <Footer />
    </>
  );
}

export default ServicesPage;
