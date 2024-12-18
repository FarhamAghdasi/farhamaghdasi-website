import React from 'react';
import {
  Header, Footer, Blog, Skills, Hero, Work, Services
} from '../components';
import SEO from '../SEO'; // Import the SEO component

const Home = () => {
  return (
    <>
        <SEO 
        title="Front-end Developer"
        description="Welcome to my personal website. I am Farham Aghdasi, a programmer specializing in web development and software solutions."
        url={window.location.href}
      />
      <Header />
      <Hero />
      <Work />
      <Services />
      <Skills />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
