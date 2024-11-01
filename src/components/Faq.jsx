import assets_imgsfaqs from '../assets/imgs/faqs.jpg';

import React from 'react'

const Faq = () => {
  return (
    <section className="faqs-pg section-padding">
    <div className="container">
      <div className="row lg-marg">
        <div className="col-lg-5">
          <div className="fit-img img md-hide">
            <img src={assets_imgsfaqs} alt=""   />
          </div>
        </div>
        <div className="col-lg-7 pt-30 pb-30">
          <div className="sec-head mb-60">
            <h6 className="sub-head mb-15">Questions &amp; Answers</h6>
            <h2>frequently asked questions</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item active">
                  <h4 className="accordion-header" id="heading2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      What technologies do I use for website development?
                    </button>
                  </h4>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading2"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        The technology used by the website is based on the
                        customer's choice. Currently, I also use WordPress, php,
                        react, Jquery
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h4 className="accordion-header" id="heading3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      How do I SEO websites?
                    </button>
                  </h4>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading3"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        At first, the client's website is fully analyzed, then its
                        problems are fixed and its keywords are researched.
                        Usually, before the SEO process, I optimize the website
                        for clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h4 className="accordion-header" id="heading4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      What are my methods for optimizing websites?
                    </button>
                  </h4>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading4"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        For wordpress websites, I use plugins and optimization of
                        images, etc. for optimization, and for react websites, I
                        use special coding to optimize api, etc., and for html, I
                        also use image and file optimization tools. is used
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h4 className="accordion-header" id="heading5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      How can you buy my HTML templates?
                    </button>
                  </h4>
                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading5"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Just enter{" "}
                        <a href="https://www.rtl-theme.com/author/farhamaghdasi/products/">
                          this link
                        </a>{" "}
                        and you can buy my various products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Faq