import React from 'react';
import { Header, Footer, Inner, ContactPageContent } from '../components';
import SEO from '../SEO';

const Contact = () => {
  return (
    <>
      {/* کامپوننت SEO */}
      <SEO 
        title="Contact"
        description="Get in touch with Farham Aghdasi for programming inquiries, projects, or collaborations."
        url={window.location.href} // URL کنونی صفحه
      />

      <Header />
      <Inner title="Get In Touch" first="Home" secend="Contact" contact="Yes" />
      <ContactPageContent />
      <Footer />
    </>
  );
}

export default Contact;
