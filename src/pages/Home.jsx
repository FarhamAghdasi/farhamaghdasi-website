import React, { useEffect } from 'react';
import {
  Header, Footer, Blog, Skills, Hero, Work, Services
} from '../components';

const Home = () => {
  return (
    <div className='smof1'>
      <Header />
      <Hero />
      <Work />
      <Services />
      <Skills />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
