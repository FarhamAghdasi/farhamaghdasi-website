import React, { useState } from 'react';
import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import SEO from '../SEO';

const HTMLPageContent = ({ template }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // If the clicked item is already active, close it
    } else {
      setActiveIndex(index); // Open the clicked item
    }
  };

  <SEO 
  title={template.title.rendered || "HTML Template | Farham Aghdasi"}
  description={template.content.rendered || "HTML Template | Farham Aghdasi"}
  image={template.main_image}
  url={window.location.href}
/>

  return (
    <>
      <header className="serv-hed2 section-padding pb-0">
        <div className="container">
          <div className="caption mb-80">
            <h1 className="fz-80 fw-600">{template.title.rendered || 'Default Title'}</h1>
            <div className="row justify-content-end">
              <div className="col-lg-5">
                <div className="text mt-30">
                  <p>{template.content.rendered || 'Default content goes here.'}</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="list mt-30">
                  <ul>
                    {template.services && template.services.length > 0 ? (
                      template.services.map((service, index) => (
                        <li key={index}>{service || 'No service available'}</li>
                      ))
                    ) : (
                      <li>No services available</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="fit-img radius-15">
            <img src={template.image || 'default-image.jpg'} alt="" />
          </div>
        </div>
      </header>
      <section className="serv-details section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="content">
                <h3>{template.heading || 'Default Heading'}</h3>
                <div className="text mt-30 mb-30">
                  <p>{template.detail_content || 'Default detail content goes here.'}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-80">
            <div className="col-md-6">
              <div className="img sm-mb30">
                <img src={template.image1 || 'default-image1.jpg'} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="img">
                <img src={template.image2 || 'default-image2.jpg'} alt="" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-80">
            <div className="col-lg-7">
              <div className="content">
                <h3>Product making for friendly users</h3>
                <div className="accordion" id="accordionExample">
                  {template.accordion_content && template.accordion_content.length > 0 ? (
                    template.accordion_content.map((content, index) => (
                      <div className={`accordion-item ${activeIndex === index ? 'active' : ''}`} key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                          <button
                            className="accordion-button"
                            type="button"
                            onClick={() => handleToggle(index)}
                            aria-expanded={activeIndex === index}
                            aria-controls={`collapse${index}`}
                          >
                            <span>{index + 1}.</span> {`Accordion Title ${index + 1}`}
                          </button>
                        </h2>
                        <div
                          id={`collapse${index}`}
                          className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                          aria-labelledby={`heading${index}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{content || 'Default accordion content goes here.'}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No accordion content available.</p>
                  )}
                </div>
                <div className="text-center">
                  <a href="#0" className="crv-butn mt-80">
                    <div className="d-flex">
                      <span className="text">View all services</span>
                      <span className="icon">
                        <img src={common_imgs_iconsarrow_top_right} alt="" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HTMLPageContent;
