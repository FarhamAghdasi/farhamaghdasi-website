import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header, Footer, PortfolioPageContent } from '../components';

const PortfolioInfo = () => {
  const { slug } = useParams(); // گرفتن slug از URL
  const [portfolio, setPortfolio] = useState(null);

  const fetchPortfolio = async () => {
    try {
      const response = await fetch(`https://farhamaghdasi.ir/api/wp-json/wp/v2/portfolio?slug=${slug}`, {
        headers: {
          'domain': 'farhamaghdasi.ir', // اضافه کردن هدر domain
        },
      });
      const data = await response.json();
      if (data.length > 0) {
        setPortfolio(data[0]); // فرض بر اینکه اولین آیتم، نمونه کار مورد نظر است
      } else {
        console.error('Portfolio not found');
      }
    } catch (error) {
      console.error('Error fetching portfolio:', error);
    }
  };
  

  useEffect(() => {
    fetchPortfolio();
  }, [slug]);

  if (!portfolio) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <PortfolioPageContent portfolio={portfolio} /> {/* ارسال داده به PortfolioPageContent */}
      <Footer />
    </>
  );
};

export default PortfolioInfo;
