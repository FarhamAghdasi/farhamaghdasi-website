import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header, Footer, HTMLPageContent } from '../components';

const HtmlInfo = () => {
  const { slug } = useParams(); // گرفتن slug از URL
  const [template, setTemplate] = useState(null);

  const fetchHtmlTemplate = async () => {
    try {
      const response = await fetch(`https://farhamaghdasi.ir/api/wp-json/wp/v2/html_template?slug=${slug}`, {
        headers: {
          'domain': 'farhamaghdasi.ir', // اضافه کردن هدر domain
        },
      });
      const data = await response.json();
      if (data.length > 0) {
        setTemplate(data[0]); // فرض بر اینکه اولین آیتم، قالب HTML مورد نظر است
      } else {
        console.error('HTML template not found');
      }
    } catch (error) {
      console.error('Error fetching HTML template:', error);
    }
  };
  

  useEffect(() => {
    fetchHtmlTemplate();
  }, [slug]);

  if (!template) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <HTMLPageContent template={template} /> {/* ارسال داده به HTMLPageContent */}
      <Footer />
    </>
  );
};

export default HtmlInfo;
