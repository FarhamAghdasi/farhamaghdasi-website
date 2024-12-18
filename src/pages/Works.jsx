import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import { Header, Footer, Inner } from '../components';
import SEO from '../SEO';

gsap.registerPlugin(ScrollTrigger);

const WorksPage = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch('https://api.farhamaghdasi.ir/portfolios', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // بررسی وضعیت پاسخ قبل از پردازش داده‌ها
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio data');
        }

        const data = await response.json();

        // فرض می‌کنیم که داده‌ها در آرایه 'portfolio' قرار دارند
        setPortfolioData(data.portfolio || []); // بررسی آرایه‌ی 'portfolio'
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    };

    fetchPortfolioData();

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

  // Transform API link to React-friendly link
  const transformLink = (apiLink) => {
    const path = apiLink.replace('https://api.farhamaghdasi.ir/portfolios', '');
    return `https://farhamaghdasi.ir/portfolio/${path}/`;
  };

  return (
    <>
      <SEO 
        title="My Works"
        description="Explore the portfolio of Farham Aghdasi showcasing various projects and HTML templates."
        url={window.location.href}
      />
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
                  key={portfolio.title}
                >
                  <div className="d-lg-flex align-items-end">
                    <div>
                      <div className="tags">
                        {/* نمایش دسته‌بندی یا نشان دادن "بدون برچسب" */}
                        <a href="#">{portfolio.category}</a>
                      </div>
                      <h3 className="title">
                        <a href={transformLink(portfolio.url)}>{portfolio.title}</a>
                      </h3>
                    </div>
                    <div className="ml-auto">
                      <a
                        href={transformLink(portfolio.url)}
                        className="butn butn-md butn-bord butn-rounded"
                      >
                        <div className="d-flex align-items-center">
                          <span>View Project</span>
                          <span className="icon invert ml-10 n">
                            <img src={common_imgs_iconsarrow_top_right} alt="" />
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="img fit-img mt-30">
                    {/* استفاده از تصویر بندانگشتی */}
                    <img
                      src={`https://api.farhamaghdasi.ir/backend/${portfolio.thumbnail}`}
                      alt={portfolio.title}
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
