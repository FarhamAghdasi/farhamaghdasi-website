import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import { Header, Footer, Inner } from '../components';
import SEO from '../SEO'; // Import the SEO component

gsap.registerPlugin(ScrollTrigger);

const HtmlTemplates = () => {
  const cardsRef = useRef([]);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch('https://farhamaghdasi.ir/api/wp-json/wp/v2/html_template', {
          headers: {
            'domain': 'farhamaghdasi.ir',
          },
        });
        const data = await response.json();
        setTemplates(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching templates:', error);
        setTemplates([]);
      }
    };
    fetchTemplates();
  }, []);

  // Transform API link to React-friendly link
  const transformLink = (apiLink) => {
    const path = apiLink.replace('https://farhamaghdasi.ir/api/html-templates/', '');
    return `https://farhamaghdasi.ir/html-templates/${path}`;
  };

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
              templates.map((portfolio, index) => (
                <div
                  className="card-item"
                  ref={(el) => (cardsRef.current[index] = el)}
                  key={portfolio.id}
                >
                  <div className="d-lg-flex align-items-end">
                    <div>
                      <div className="tags">
                        {portfolio.portfolio_category && portfolio.portfolio_category.length > 0 ? (
                          portfolio.portfolio_category.map((cat, idx) => (
                            <a href="#" key={idx}>
                              {cat}
                            </a>
                          ))
                        ) : (
                          <span>No Tags</span>
                        )}
                      </div>
                      <h3 className="title">
                        <a href={transformLink(portfolio.link)}>{portfolio.title.rendered}</a>
                      </h3>
                    </div>
                    <div className="ml-auto">
                      <a
                        href={transformLink(portfolio.link)}
                        className="butn butn-md butn-bord butn-rounded"
                      >
                        <div className="d-flex align-items-center">
                          <span>View Project</span>
                          <span className="icon invert ml-10">
                            <img src={common_imgs_iconsarrow_top_right} alt="" />
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="img fit-img mt-30">
                    <img
                      src={portfolio.featured_image_url || 'default_image_url.jpg'}
                      alt={portfolio.title.rendered}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="no-data-message">No Portfolio found.</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};


export default HtmlTemplates;
