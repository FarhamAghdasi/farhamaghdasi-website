import React, { useEffect } from 'react';

const Footer = () => {


  return (
    <footer>
      <div className="container">
        <div className="top-content text-center">
          <h2><a href="#contact">Get In Touch</a></h2>
          <h6 className="float_txt js-title">Connect</h6>
        </div>
        <div className="main-content">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="text">
                <p className="js-splittext-lines">
                  I would be delighted to <br /> help you create your <br /> dream website!
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <a href="tel:+989391213094" className="contact-number fz-60">+98 939 121 3094</a>
              <ul className="fz-18 mt-30 rest">
                <li className="mb-15"><a href="mailto:info@farhamaghdasi.ir">info@farhamaghdasi.ir</a></li>
              </ul>
              <div className="social-icons">
                <a href="https://t.me/farhamaghdasi" aria-label="Telegram"><i className="fa-brands fa-telegram" /></a>
                <a href="https://instagram.com/farhamaghdasi" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
                <a href="https://github.com/FarhamAghdasi/" aria-label="GitHub"><i className="fa-brands fa-github" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
