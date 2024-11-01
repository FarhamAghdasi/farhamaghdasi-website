import assets_imgs_intro1 from '../assets/imgs/intro/1.webp';
import assets_imgs_intro2 from '../assets/imgs/intro/2.webp';

import React from 'react'

const Bio = () => {
  return (
    <section className="intro section-padding ontop">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center position-re">
            <h2>
              I am always <span>seeking to learn</span> and{" "}
              <span>improve my skills</span>, and I plan to study{" "}
              <span>advanced technologies</span> like{" "}
              <span>mongoDB , Nodejs</span> soon. With attention to detail, I have
              successfully completed small projects, using them as a{" "}
              <span>foundation for further growth</span>.
            </h2>
            <div className="img img1 fit-img">
              <img src={assets_imgs_intro1} alt="" />
            </div>
            <div className="img img2 fit-img">
              <img src={assets_imgs_intro2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Bio