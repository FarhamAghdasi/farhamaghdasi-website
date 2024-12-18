import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, image, url, type = "website", noIndex = false }) => {
  const date = new Date();
  const Time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  const schemaData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebSite",
    "name": "Farham Aghdasi",
    "url": "https://farhamaghdasi.ir",
    "sameAs": [
      "https://farhamaghdasi.ir/",
      "https://github.com/FarhamAghdasi/"
    ],
    "description": description || "Farham Aghdasi is a Junior Front-end developer specializing in programming and web development.",
    "image": image,
    "publisher": {
      "@type": "Organization",
      "name": "Farham Aghdasi | Junior Front-End Developer"
    },
    "mainEntityOfPage": url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.google.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "foundingDate": Time,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "info@farhamaghdasi.ir",
      "availableLanguage": ["English"]
    }
  }), [description, image, url, Time, type]);

  const metaTags = [
    { name: "description", content: description },
    { name: "author", content: "Farham Aghdasi" },
    { property: "og:title", content: `${title} | Farham Aghdasi` },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: type === "article" ? "article" : "website" },
    { property: "og:locale", content: "en_US" },
    { property: "og:site_name", content: "Farham Aghdasi" },
    { name: "twitter:title", content: `${title} | Farham Aghdasi` },
    { name: "twitter:description", content: description },
    { name: "twitter:site", content: "@farham_aghdasi" },
    { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow" }
  ];

  if (image) {
    metaTags.push(
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" }
    );
  }

  return (
    <Helmet>
      <title>{title} | Farham Aghdasi</title>
      {metaTags.map((tag, index) => (
        tag.name ? (
          <meta key={index} name={tag.name} content={tag.content} />
        ) : (
          <meta key={index} property={tag.property} content={tag.content} />
        )
      ))}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SEO;
