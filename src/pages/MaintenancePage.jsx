import React from 'react';
import { Link , useNavigate  } from 'react-router-dom';
import { Header, Footer, Inner } from '../components';
import SEO from '../SEO';

const NotFoundPage = () => {
    const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // این دستور کاربر را به صفحه قبلی برمی‌گرداند
  };
  return (
    <>
      {/* کامپوننت SEO با noIndex */}
      <SEO 
        title="We're Currently Under Maintenance"
        description="Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patience! If you need immediate assistance."
        url={window.location.href}
        noIndex={true} // فعال کردن noindex برای این صفحه
      />
      <Inner 
        title="We're Currently Under Maintenance" 
        cpage={<p>Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patience! If you need immediate assistance, please <a href="mailto:info@farhamaghdasi.ir">contact us</a>. <br /><a className='active' onClick={handleBack}>Go Back</a> Or <Link className='active' to="/">Home</Link> </p>}
        noimage={true}
      />
    </>
  );
};

export default NotFoundPage;
