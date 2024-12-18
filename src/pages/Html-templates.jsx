import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import { Header, Footer, Inner } from '../components';
import SEO from '../SEO';

gsap.registerPlugin(ScrollTrigger);

const HtmlTemplates = () => {
  const cardsRef = useRef([]);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch('https://api.farhamaghdasi.ir/templates');
        const data = await response.json();

        if (data.templates && Array.isArray(data.templates)) {
          setTemplates(data.templates);
        } else {
          setTemplates([]);
        }
      } catch (error) {
        console.error('Error fetching templates:', error);
        setTemplates([]);
      }
    };
    fetchTemplates();
  }, []);

  // Transform URL for template details
  const transformLink = (url) => `https://farhamaghdasi.ir/html-templates/${url}/`;

  return (
    <>
      <SEO 
        title="HTML Templates"
        description="Explore a collection of HTML templates designed by Farham Aghdasi. Find various templates for your web development projects."
        url={window.location.href}
      />
      <Header />
      <Inner title="HTML Templates" first="Home" secend="HTML Templates" />
      <section className="work-card section-padding pt-0">
        <div className="container">
          <div className="cards">
            {templates.length > 0 ? (
              templates.map((template, index) => (
                <div
                  className="card-item"
                  ref={(el) => (cardsRef.current[index] = el)}
                  key={index}
                >
                  <div className="d-lg-flex align-items-end">
                    <div>
                      <div className="tags">
                        {template.category ? (
                          <a href="#">{template.category}</a>
                        ) : (
                          <span>No Category</span>
                        )}
                      </div>
                      <h3 className="title">
                        <a href={transformLink(template.url)}>{template.title}</a>
                      </h3>
                    </div>
                    <div className="ml-auto">
                      <a
                        href={template.buyLink}
                        className="mr-3 butn butn-md butn-bord butn-rounded"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="d-flex align-items-center">
                          <span>Buy Now</span>
                          <span className="icon invert ml-10 n">
                            <img src={common_imgs_iconsarrow_top_right} alt="" />
                          </span>
                        </div>
                      </a>
                      <a
                        href={transformLink(template.url)}
                        className="mr-3 butn butn-md butn-bord butn-rounded"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="d-flex align-items-center">
                          <span>View Template</span>
                          <span className="icon invert ml-10 n">
                            <img src={common_imgs_iconsarrow_top_right} alt="" />
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="img fit-img mt-30">
                    <img
                      src={`https://api.farhamaghdasi.ir/backend/${template.thumbnail}` || 'default_image_url.jpg'}
                      alt={template.title}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="no-data-message">No Templates found.</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HtmlTemplates;
