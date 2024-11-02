import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import { Header, Footer, Inner } from '../components';

gsap.registerPlugin(ScrollTrigger);

const HtmlTemplates = () => {
  const cardsRef = useRef([]);
  const [templates, setTemplates] = useState([]); // State for fetched data

  useEffect(() => {
    // Fetch templates data
    const fetchTemplates = async () => {
      try {
        const response = await fetch('https://farhamaghdasi.ir/api/wp-json/wp/v2/html_template', {
          headers: {
            'domain': 'farhamaghdasi.ir' // اضافه کردن هدر domain
          }
        });
        const data = await response.json();
        setTemplates(Array.isArray(data) ? data : []); // Check if data is an array
      } catch (error) {
        console.error('Error fetching templates:', error);
        setTemplates([]); // Set templates to an empty array in case of error
      }
    };
    fetchTemplates();
  }, []);

  useEffect(() => {
    if (templates.length > 0) {
      const cards = cardsRef.current;
      const scrollTriggers = [];
      let stickDistance = 0;

      const firstCardST = ScrollTrigger.create({
        trigger: cards[0],
        start: "center center",
      });

      const lastCardST = ScrollTrigger.create({
        trigger: cards[cards.length - 1],
        start: "bottom bottom",
      });

      scrollTriggers.push(firstCardST, lastCardST);

      cards.forEach((card, index) => {
        const scale = 1 - (cards.length - index) * 0.025;
        const scaleDown = gsap.to(card, {
          scale: scale,
          'transform-origin': '50% ' + (lastCardST.start + stickDistance),
        });

        const cardST = ScrollTrigger.create({
          trigger: card,
          start: "center center",
          end: () => lastCardST.start + stickDistance,
          pin: true,
          pinSpacing: false,
          ease: "none",
          animation: scaleDown,
          toggleActions: "restart none none reverse",
        });

        scrollTriggers.push(cardST);
      });

      return () => {
        scrollTriggers.forEach(st => st.kill());
      };
    }
  }, [templates]);

  return (
    <>
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
                  key={template.id}
                >
                  <div className="d-lg-flex align-items-end">
                    <div>
                      <div className="tags">
                        {template.tags.map((tag) => (
                          <a href={`#tag-${tag}`} key={tag.id}>{tag.name}</a>
                        ))}
                      </div>
                      <h3 className="title">
                        <a href={template.link}>{template.title.rendered}</a>
                      </h3>
                    </div>
                    <div className="ml-auto">
                      <a href={template.link} className="butn butn-md butn-bord butn-rounded">
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
                    <img src={template.featured_image_url} alt={template.title.rendered} />
                  </div>
                </div>
              ))
            ) : (
              <p className="no-data-message">No HTML templates found.</p> // نمایش پیام در صورت نبود داده
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HtmlTemplates;
