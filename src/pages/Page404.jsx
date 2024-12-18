import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, Inner } from '../components';
import SEO from '../SEO';

const NotFoundPage = () => {
  return (
    <>
      {/* کامپوننت SEO با noIndex */}
      <SEO 
        title="404 Not Found"
        description="The page you are looking for does not exist."
        url={window.location.href}
        noIndex={true} // فعال کردن noindex برای این صفحه
      />
      <Header />
      <Inner 
        title="404" 
        first="Home" 
        secend="404 Error" 
        cpage={<p>Oopps! The page you are looking for does not exist <br /> Back To <Link to="/">Home</Link></p>}
        noimage={true}
      />
      <Footer />
    </>
  );
};

export default NotFoundPage;
