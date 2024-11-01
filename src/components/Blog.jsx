import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import assets_imgs_blog3 from '../assets/imgs/blog/3.jpg';

import React from 'react'

const Blog = () => {
  return (
    <section className="blog-cst section-padding">
      <div className="container pt-30 bord-thin-top-light">
        <div className="sec-head mb-80">
          <div className="d-flex">
            <div>
              <span className="sub-head">Our Expertise</span>
            </div>
            <div className="ml-auto">
              <div className="bract">
                {"{"} <span>7k+ Clients</span> {"}"}
              </div>
            </div>
          </div>
          <div className="row mt-30">
            <div className="col-lg-7 offset-lg-3">
              <div>
                <h2>
                  Check My Blog <br /> Content in the web world
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
        <div className="row md-marg">
          <div className="col-lg-4">
            <div className="item">
              <div className="img fit-img">
                <img src={assets_imgs_blog3} alt="" />
                <a href="#0" className="butn">
                  <span className="icon">
                    <img src={common_imgs_iconsarrow_top_right} alt="" />
                  </span>
                </a>
              </div>
              <div className="cont mt-30">
                <h5>
                  <a href="">Top 10 Wooden Architecture Building 2023</a>
                </h5>
                <span className="main-color">Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Blog