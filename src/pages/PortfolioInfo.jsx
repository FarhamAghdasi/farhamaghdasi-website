import React, { useEffect, useState } from 'react';
import { useParams , Link } from 'react-router-dom';
import { Header, Footer, PortfolioPageContent } from '../components';
import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import SEO from '../SEO';

const PortfolioInfo = () => {
  const { url } = useParams(); // گرفتن url از URL
  const [loading, setLoading] = useState(true); // وضعیت بارگذاری
  const [portfolio, setPortfolio] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  
  const handleToggle = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index)); // تغییر وضعیت فعال بودن آکاردئون
  };

  const fetchPortfolio = async () => {
    try {
      const response = await fetch(`https://api.farhamaghdasi.ir/portfolios`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      // جستجو برای پورتفوی مناسب بر اساس url
      const foundPortfolio = data.portfolio.find(item => item.url === url);

      if (foundPortfolio) {
        setPortfolio(foundPortfolio); // در صورتی که پروژه پیدا شد
        extractImages(foundPortfolio.description); 
      } else {
        console.error('Portfolio not found');
      }
    } catch (error) {
      console.error('Error fetching portfolio:', error);
    }

    const extractImages = (htmlContent) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      const images = doc.querySelectorAll('img');
      
      if (images.length > 0) {
        setImage1(images[0].src); // تصویر اول
        if (images.length > 1) {
          setImage2(images[1].src); // تصویر دوم
        }
      }
    };
    
  
  };

  useEffect(() => {
    fetchPortfolio();
  }, [url]);

  useEffect(() => {
    if (portfolio) {
      setLoading(false); // پس از دریافت داده‌ها لودر مخفی می‌شود
    }
  }, [portfolio]);

  
  if (loading) {
    return <Header loading={loading} />; // ارسال وضعیت لودر به Header
  }

  const ImagePrimary = `https://api.farhamaghdasi.ir/backend/${portfolio.thumbnail}`;

  return (
    <>
      <SEO 
        title={portfolio.title || "Portfolio"} // استفاده از title به‌طور مستقیم
        description={portfolio.description || "Portfolio"} // استفاده از description به‌طور مستقیم
        image={ImagePrimary || "/default-thumbnail.jpg"} // استفاده از thumbnail به‌عنوان تصویر پیش‌فرض
        url={window.location.href}
      />
      <Header />
      <header className="serv-hed2 section-padding pb-0">
        <div className="container">
          <div className="caption mb-80">
            <h1 className="fz-80 fw-600">{portfolio.title || 'Default Title'}</h1>
            <div className="row justify-content-end">
              <div className="col-lg-3 mt-30">
              <p>Category: <b>{portfolio.category}</b></p>
              <p>Author: <b>{portfolio.author}</b></p>
              </div>
              <div className="col-lg-5">
                <div className="text mt-30">
                  <p>{portfolio.Shortdescription || 'Default content goes here.'} <br /> You Can See Website With This <a href={portfolio.Previewurl}>Link !</a></p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="list mt-30">
                  <ul>
                      <li>{portfolio.serviceTitle1 || 'No service available'}</li>
                      <li>{portfolio.serviceTitle2 || 'No service available'}</li>
                      <li>{portfolio.serviceTitle3 || 'No service available'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="fit-img radius-15">
            <img src={ImagePrimary || 'default-image.jpg'} alt="" />
          </div>
        </div>
      </header>
      <section className="serv-details section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
            <div className="content" dangerouslySetInnerHTML={{ __html: portfolio.description || 'Default detail content goes here.' }} />

            </div>
          </div>
          <div className="row mt-80">
            <div className="col-md-6">
              <div className="img sm-mb30">
                <img src={image1 || 'default-image1.jpg'} alt="" /> {/* استفاده از image1 */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="img">
                <img src={image2 || 'default-image2.jpg'} alt="" /> {/* استفاده از image2 */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-80">
            <div className="col-lg-7">
              <div className="content">
                <h3>FAQ's</h3>
                <div class="text mt-30 mb-50">
                                        <p>Check out faq's !</p>
                                    </div>
                <div className="accordion" id="accordionExample">
 {/* آکاردئون با استفاده از اطلاعات جدید */}
 {portfolio.accordionTitle && portfolio.accordionContent ? (
                    <div className={`accordion-item ${activeIndex === 0 ? 'active' : ''}`}>
                      <h2 className="accordion-header" id="heading0">
                        <button
                          className="accordion-button"
                          type="button"
                          onClick={() => handleToggle(0)} // ارسال ایندکس به handleToggle
                          aria-expanded={activeIndex === 0}
                          aria-controls="collapse0"
                        >
                          {portfolio.accordionTitle}
                        </button>
                      </h2>
                      <div
                        id="collapse0"
                        className={`accordion-collapse collapse ${activeIndex === 0 ? 'show' : ''}`}
                        aria-labelledby="heading0"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{portfolio.accordionContent || 'Default accordion content goes here.'}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p>No accordion content available.</p>
                  )}
                </div>
                <div className="text-center">
                  <Link to="/portfolio/" className="crv-butn mt-80">
                    <div className="d-flex">
                      <span className="text">Check More Portfolios !</span>
                      <span className="icon">
                        <img src={common_imgs_iconsarrow_top_right} alt="" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PortfolioInfo;
