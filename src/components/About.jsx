import React from 'react'

const About = () => {
  return (
    <section className="about-pg-sec section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="sec-head md-mb30">
              <div className="bract">{<span>Who I am ?</span>}</div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="text">
              <h3 className="fw-400 text-indent">I am always seeking to learn and improve my skills, and I plan to study advanced technologies like mongoDB , Nodejs soon. With attention to detail, I have successfully completed small projects, using them as a foundation for further growth.
                .</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About