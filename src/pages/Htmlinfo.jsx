import React, { useEffect, useState } from 'react';
import { useParams , Link } from 'react-router-dom';
import SEO from '../SEO';
import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import { Header, Footer } from '../components';

const HtmlInfo = () => {
  const { url } = useParams(); // گرفتن url از URL
  const [template, setTemplate] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);

    const handleToggle = (index) => {
      setActiveIndex(prevIndex => (prevIndex === index ? null : index)); // تغییر وضعیت فعال بودن آکاردئون
    };

  const fetchHtmlTemplate = async () => {
    try {
      const response = await fetch(`https://api.farhamaghdasi.ir/templates`);
      const data = await response.json();

      if (data.templates && data.templates.length > 0) {
        setTemplate(data.templates[0]); // اولین قالب موجود
      } else {
        console.error('HTML template not found');
      }
    } catch (error) {
      console.error('Error fetching HTML template:', error);
    }
  };

  useEffect(() => {
    fetchHtmlTemplate();
  }, [url]);

  if (!template) return;

  const ImagePrimary = `https://api.farhamaghdasi.ir/backend/${template.thumbnail}`;


  return (
    <>
      <SEO 
        title={template.title || "template"} // استفاده از title به‌طور مستقیم
        description={template.description || "template"} // استفاده از description به‌طور مستقیم
        image={ImagePrimary || "/default-thumbnail.jpg"} // استفاده از thumbnail به‌عنوان تصویر پیش‌فرض
        url={window.location.href}
      />
      <Header />
      <header className="serv-hed2 section-padding pb-0">
        <div className="container">
          <div className="caption mb-80">
            <h1 className="fz-80 fw-600">{template.title || 'Default Title'}</h1>
            <div className="row justify-content-end">
              <div className="col-lg-3 mt-30">
              <p>Category: <b>{template.category}</b></p>
              <p>Author: <b>{template.author}</b></p>
              </div>
              <div className="col-lg-5">
                <div className="text mt-30">
                  <p>{template.Shortdescription || 'Default content goes here.'} <br /> You Can See Website With This <a href={template.Previewurl}>Link !</a></p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="list mt-30">
                  <ul>
                      <li>{template.serviceTitle1 || 'No service available'}</li>
                      <li>{template.serviceTitle2 || 'No service available'}</li>
                      <li>{template.serviceTitle3 || 'No service available'}</li>
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
            <div className="content" dangerouslySetInnerHTML={{ __html: template.description || 'Default detail content goes here.' }} />

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
 {template.accordionTitle && template.accordionContent ? (
                    <div className={`accordion-item ${activeIndex === 0 ? 'active' : ''}`}>
                      <h2 className="accordion-header" id="heading0">
                        <button
                          className="accordion-button"
                          type="button"
                          onClick={() => handleToggle(0)} // ارسال ایندکس به handleToggle
                          aria-expanded={activeIndex === 0}
                          aria-controls="collapse0"
                        >
                          {template.accordionTitle}
                        </button>
                      </h2>
                      <div
                        id="collapse0"
                        className={`accordion-collapse collapse ${activeIndex === 0 ? 'show' : ''}`}
                        aria-labelledby="heading0"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{template.accordionContent || 'Default accordion content goes here.'}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p>No accordion content available.</p>
                  )}
                </div>
                <div className="text-center">
                  <Link to="/template/" className="crv-butn mt-80">
                    <div className="d-flex">
                      <span className="text">Check More templates !</span>
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

export default HtmlInfo;