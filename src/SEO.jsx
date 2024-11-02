import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, image, url }) => {
    let date = new Date();
    let Time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  // اطلاعات Schema به صورت کامل درون کامپوننت `SEO`
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Farham Aghdasi",
    "url": "https://farhamaghdasi.ir",
    "sameAs": [
      "https://farhamaghdasi.ir/",
      "https://github.com/FarhamAghdasi/"
    ],
    "jobTitle": "Front-End Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "FarhamAghdasi | Junior Front-End Developer"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "FarhamAghdasi | Junior Front-End Developer" // نام دانشگاه خود را اینجا وارد کنید
    },
    "description": "Farham Aghdasi is a Junior Front-end developer specializing in programming and web development.",
    "image": image,
    "brand": {
      "@type": "Brand",
      "name": "Farham Aghdasi"
    },
    "foundingDate": Time,
    "founders": [
      {
        "@type": "Person",
        "name": "Farham Aghdasi"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amol",
      "addressRegion": "Mazandaran",
      "addressCountry": "Iran"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "info@farhamaghdasi.ir",
      "availableLanguage": ["English"]
    }
  };

  return (
    <Helmet>
      {/* تگ‌های سئو استاندارد */}
      <title>{title} | Farham Aghdasi</title>
      <meta name="description" content={description} />
      <meta name="language" content="en" />
      <meta name="author" content="Farham Aghdasi" />
      
      {/* Open Graph */}
      <meta property="og:title" content={`${title} | Farham Aghdasi`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Farham Aghdasi" />
      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={image} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      )}
      {/* Twitter Card */}
      <meta name="twitter:title" content={`${title} | Farham Aghdasi`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@farham_aghdasi" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
