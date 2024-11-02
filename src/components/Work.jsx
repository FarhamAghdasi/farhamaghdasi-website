import React, { useEffect, useState } from 'react';
import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import assets_imgs_works1 from '../assets/imgs/works/1.webp'; // می‌توانید این را به صورت داینامیک بارگذاری کنید

const Work = () => {
  const [htmlTemplates, setHtmlTemplates] = useState([]);
  const [portfolios, setPortfolios] = useState([]);

  // دامنه
  const domain = "farhamaghdasi.ir";

  // تابع برای دریافت قالب‌های HTML
  const fetchHtmlTemplates = async () => {
    try {
      const response = await fetch(`https://farhamaghdasi.ir/api/wp-json/wp/v2/html_template`, {
        method: 'GET',
        headers: {
          'domain': domain, // کلید دامنه در هدر
        },
      });
      const data = await response.json();
      setHtmlTemplates(data);
    } catch (error) {
      console.error('Error fetching HTML templates:', error);
    }
  };

  // تابع برای دریافت نمونه کارها
  const fetchPortfolios = async () => {
    try {
      const response = await fetch(`https://farhamaghdasi.ir/api/wp-json/wp/v2/portfolio`, {
        method: 'GET',
        headers: {
          'domain': domain, // کلید دامنه در هدر
        },
      });
      const data = await response.json();
      setPortfolios(data);
    } catch (error) {
      console.error('Error fetching portfolios:', error);
    }
  };

  useEffect(() => {
    fetchHtmlTemplates();
    fetchPortfolios();
  }, []);

  return (
    <section className="work-min ontop bord-thin-top-light">
      <div className="container pt-30 bord-thin-top-light">
        <div className="sec-head mb-80">
          <div className="d-flex">
            <div>
              <span className="sub-head">Top Works</span>
            </div>
            <div className="ml-auto">
              <div className="bract">
                {"{"} <span /> {"}"}
              </div>
            </div>
          </div>
          <div className="row mt-30">
            <div className="col-lg-5 offset-lg-3 col-md-7">
              <div className="sm-mb30">
                <h2>
                  My New Front-End <br /> Develops
                </h2>
                <a href="#0" className="butn-under mt-15">
                  View All Works{" "}
                  <span className="icon invert">
                    <img src={common_imgs_iconsarrow_top_right} alt="" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="text">
                <span>
                  Creating awesome websites <br />
                  <span className="opacity-5 mt-10">Check It Now ! With ❤️</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* نمایش نمونه کارها */}
          {portfolios.length > 0 ? (
            portfolios.slice(0, 2).map((portfolio) => (
              <div className="col-lg-6" key={portfolio.id}>
                <div className="item md-mb50">
                  <div className="img fit-img">
                    <img src={portfolio.image_url || assets_imgs_works1} alt={portfolio.title.rendered} />
                  </div>
                  <div className="cont mt-30">
                    <div className="info">
                      <span className="date">{new Date(portfolio.date).getFullYear()}</span>
                      <span className="tag">{portfolio.category || 'Portfolio'}</span>
                    </div>
                    <h5>{portfolio.title.rendered}</h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-lg-12">
              <p>No portfolios available at the moment.</p>
            </div>
          )}
          {/* نمایش قالب‌های HTML */}
          {htmlTemplates.length > 0 ? (
            htmlTemplates.slice(0, 2).map((template) => (
              <div className="col-lg-6" key={template.id}>
                <div className="item md-mb50">
                  <div className="img fit-img">
                    <img src={template.image_url || assets_imgs_works1} alt={template.title.rendered} />
                  </div>
                  <div className="cont mt-30">
                    <div className="info">
                      <span className="date">{new Date(template.date).getFullYear()}</span>
                      <span className="tag">{template.category || 'HTML Template'}</span>
                    </div>
                    <h5>{template.title.rendered}</h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-lg-12">
              <p>No HTML templates available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Work
