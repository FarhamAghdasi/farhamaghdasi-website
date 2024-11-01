import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import assets_imgs_portfolio_works31 from '../assets/imgs/portfolio/works3/1.jpg';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    const scrollTriggers = []; // آرایه برای ذخیره ScrollTrigger ها

    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: "center center",
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: "bottom bottom",
    });

    scrollTriggers.push(firstCardST, lastCardST); // ذخیره ScrollTrigger ها

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

      scrollTriggers.push(cardST); // ذخیره ScrollTrigger کارت‌ها
    });

    // Cleanup function
    return () => {
      scrollTriggers.forEach(st => st.kill()); // کشتن هر ScrollTrigger
    };
  }, []);

  return (
    <section className="work-card section-padding pt-0">
      <div className="container">
        <div className="cards">
          <div
            className="card-item"
            ref={el => cardsRef.current[0] = el} // Store reference to the first card
          >
            <div className="d-lg-flex align-items-end">
              <div>
                <div className="tags">
                  <a href="portfolio-cards.html#0">FullStack</a>
                  <a href="portfolio-cards.html#0">PHP, Jquery, gsap</a>
                  <a href="portfolio-cards.html#0">Dashboard</a>
                </div>
                <h3 className="title">
                  <a href="inner_pages/project-details.html">
                    khooshesanat Website
                  </a>
                </h3>
              </div>
              <div className="ml-auto">
                <a
                  href="about.html"
                  className="butn butn-md butn-bord butn-rounded"
                >
                  <div className="d-flex align-items-center">
                    <span>View Project</span>
                    <span className="icon invert ml-10">
                      <img src={common_imgs_iconsarrow_top_right} alt=""   />
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="img fit-img mt-30">
              <img src={assets_imgs_portfolio_works31} alt=""   />
            </div>
          </div>
          <div
            className="card-item"
            ref={el => cardsRef.current[0] = el} // Store reference to the first card
          >
            <div className="d-lg-flex align-items-end">
              <div>
                <div className="tags">
                  <a href="portfolio-cards.html#0">FullStack</a>
                  <a href="portfolio-cards.html#0">PHP, Jquery, gsap</a>
                  <a href="portfolio-cards.html#0">Dashboard</a>
                </div>
                <h3 className="title">
                  <a href="inner_pages/project-details.html">
                    khooshesanat Website
                  </a>
                </h3>
              </div>
              <div className="ml-auto">
                <a
                  href="about.html"
                  className="butn butn-md butn-bord butn-rounded"
                >
                  <div className="d-flex align-items-center">
                    <span>View Project</span>
                    <span className="icon invert ml-10">
                      <img src={common_imgs_iconsarrow_top_right} alt=""   />
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="img fit-img mt-30">
              <img src={assets_imgs_portfolio_works31} alt=""   />
            </div>
          </div>
          {/* You can add more card items here */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;