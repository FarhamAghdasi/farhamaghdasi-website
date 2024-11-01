import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';

import React, { useState } from 'react';

const ServicesLine = () => {
  // State for active accordion item
  const [activeItem, setActiveItem] = useState(null);

  // Sample data for services
  const services = [
    {
      id: 1,
      number: '001',
      title: 'Front-End Develop',
      description: 'Jquery, React\nResponsive, Modern Design',
    },
    {
      id: 2,
      number: '002',
      title: 'SEO',
      description: 'Google Search Console, one-page SEO\nKeyword research\nWebsite optimization',
    },
    {
      id: 3,
      number: '003',
      title: 'Conversions technologies',
      description: 'HTML to React, WP\nJquery To JSX',
    },
    {
      id: 4,
      number: '004',
      title: 'Edit',
      description: 'Adobe Photoshop\nAdobe Premiere',
    },
  ];

  return (
    <section className="services-cst section-padding pt-0">
      <div className="container">
        <div className="sec-sm-head text-center mb-30">
          <div className="bract">
            {"{"} <span>My Services</span> {"}"}
          </div>
        </div>
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`item ${activeItem === index ? 'active' : ''}`}
            onClick={() => setActiveItem(index)} // Set the active item on click
            onMouseEnter={() => setActiveItem(index)} // Set the active item on mouse enter
          >
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <div className="row d-flex align-items-center">
                  <div className="col-md-4">
                    <span className="numb">{service.number}</span>
                  </div>
                  <div className="col-md-8">
                    <p>{service.description.split('\n').map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row d-flex align-items-center">
                  <div className="col-md-8">
                    <h2>{service.title}</h2>
                  </div>
                  <div className="col-md-4 d-flex">
                    <a href="#0" className="ml-auto">
                      <span className="icon invert">
                        <img src={common_imgs_iconsarrow_top_right} alt=""   />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesLine;