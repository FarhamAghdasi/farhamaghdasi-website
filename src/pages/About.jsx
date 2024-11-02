import React from 'react';
import { Header, Footer, Inner, About, Skills } from '../components';
import SEO from '../SEO';

const AboutPage = () => {
  return (
    <>
      {/* کامپوننت SEO */}
      <SEO 
        title="About"
        description="Learn more about Farham Aghdasi, a software developer specializing in web development and programming."
        url={window.location.href} // URL کنونی صفحه
      />
      
      <Header />
      <Inner title="About Me" first="Home" secend="About Farham Aghdasi" />
      <About />
      <Skills />
      <Footer />
    </>
  );
}

export default AboutPage;
