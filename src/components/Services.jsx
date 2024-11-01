import assets_imgssmoke_bg from '../assets/imgs/smoke-bg.jpg';

import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import assets_imgs_serv1 from '../assets/imgs/serv/1.jpg';
import assets_imgs_serv2 from '../assets/imgs/serv/2.jpg';
import assets_imgs_serv3 from '../assets/imgs/serv/3.jpg';

import React from 'react'

const services = [
  {
    title: "Front-End",
    tags: ["Bootstrap", "React", "Tailwind", "Responsive"],
    image: assets_imgs_serv1,
  },
  {
    title: "SEO",
    tags: [
      "Google Search Console",
      "one-page",
      "Keyword research",
      "Website optimization",
    ],
    image: assets_imgs_serv2,
  },
  {
    title: "Edit",
    tags: ["Adobe Photoshop", "Adobe Premiere"],
    image: assets_imgs_serv3,
  },
];

const Services = () => {
  return (
    <section
    className="services-personal section-padding bg-img"
    data-background={assets_imgssmoke_bg}
  >
    <div className="container pt-30 bord-thin-top-light ontop">
      <div className="sec-head mb-80">
        <div className="d-flex">
          <div>
            <span className="sub-head">What I Do ?</span>
          </div>
          <div className="ml-auto">
            <div className="bract">
              {"{"} <span>A+ Support</span> {"}"}
            </div>
          </div>
        </div>
        <div className="row mt-30">
          <div className="col-lg-7 offset-lg-3">
            <div>
              <h2>
                What areas am I
                <br /> skilled in?
              </h2>
              <a href="#0" className="butn-under mt-15">
                View All Works{" "}
                <span className="icon invert">
                  <img src={common_imgs_iconsarrow_top_right} alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-end">
    <div className="col-lg-8">
      <div className="serv-items">
        {services.map((service, index) => (
          <div key={index} className="item">
            <h2>{service.title}</h2>
            <div className="tags">
              {service.tags.map((tag, tagIndex) => (
                <span key={tagIndex}>{tag}</span>
              ))}
            </div>
            <div className="img fit-img">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
    </div>
  </section>
  
  )
}

export default Services