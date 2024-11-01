import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import assets_imgs_works1 from '../assets/imgs/works/1.webp';

import React from 'react'

const Work = () => {
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
                  <img src={common_imgs_iconsarrow_top_right} alt=""   />
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
        <div className="col-lg-6">
          <div className="item md-mb50">
            <div className="img fit-img">
              <img src={assets_imgs_works1} alt=""   />
            </div>
            <div className="cont mt-30">
              <div className="info">
                <span className="date">2023</span>
                <span className="tag">UI/UX Design</span>
              </div>
              <h5>Custom Production</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Work