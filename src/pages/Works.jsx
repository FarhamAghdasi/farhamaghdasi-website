import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import { Header, Footer, Inner } from '../components';

gsap.registerPlugin(ScrollTrigger);

const WorksPage = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Fetch data from the portfolio API
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch('https://farhamaghdasi.ir/api/wp-json/wp/v2/portfolio', {
          headers: {
            'domain': 'farhamaghdasi.ir', // اضافه کردن دامنه در هدر
          },
        });
        const data = await response.json();
        setPortfolioData(data); // ذخیره داده‌ها در استیت
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    };
    
    fetchPortfolioData();

    // ScrollTrigger animations
    const cards = cardsRef.current;
    const scrollTriggers = [];

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    scrollTriggers.push(firstCardST, lastCardST);

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        'transform-origin': '50% ' + (lastCardST.start + 0),
      });

      const cardST = ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });

      scrollTriggers.push(cardST);
    });

    return () => {
      scrollTriggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <Inner
        title="My Works"
        first="Home"
        secend="Works"
        paragraph="Also You Can See My"
        links="HTML Templates"
      />
      <section className="work-card section-padding pt-0">
        <div className="container">
          <div className="cards">
            {portfolioData.length > 0 ? (
              portfolioData.map((portfolio, index) => (
                <div
                  className="card-item"
                  ref={(el) => (cardsRef.current[index] = el)}
                  key={portfolio.id}
                >
                  <div className="d-lg-flex align-items-end">
                    <div>
                      <div className="tags">
                        {portfolio.tags.map((tag, idx) => (
                          <a href={`#`} key={idx}>
                            {tag}
                          </a>
                        ))}
                      </div>
                      <h3 className="title">
                        <a href={portfolio.link}>{portfolio.title.rendered}</a>
                      </h3>
                    </div>
                    <div className="ml-auto">
                      <a
                        href={portfolio.link}
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
                      src={portfolio.featured_image_url}
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

export default WorksPage;
