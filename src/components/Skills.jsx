import React from 'react'

import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import assets_imgs_skillshtml from '../assets/imgs/skills/html.png';
import assets_imgs_skillsjs from '../assets/imgs/skills/js.png';
import assets_imgs_skillsbootstrap from '../assets/imgs/skills/bootstrap.png';
import assets_imgs_skillss4 from '../assets/imgs/skills/s4.png';
import assets_imgs_skillsseo from '../assets/imgs/skills/seo.png';


const skills = [
  { name: "HTML/CSS", level: "90%", image: assets_imgs_skillshtml },
  { name: "JavaScript", level: "65%", image: assets_imgs_skillsjs },
  { name: "Bootstrap", level: "88%", image: assets_imgs_skillsbootstrap },
  { name: "React", level: "55%", image: assets_imgs_skillss4 },
  { name: "SEO", level: "76%", image: assets_imgs_skillsseo },
];

const Skills = () => {
  return (
    <section className="gray-box section-padding">
    {/* ==================== Start Skills ==================== */}
    <div className="skills">
      <div className="container pt-30 section-padding bord-thin-top">
        <div className="sec-head mb-80">
          <div className="d-flex">
            <div>
              <span className="sub-head">My Skills</span>
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
                <h2 className="text-indent">
                  Get to know my professional skills!
                  <br /> I build your dream website
                </h2>
                <a href="#0" className="butn-under mt-15">
                  View All Works{" "}
                  <span className="icon">
                    <img src={common_imgs_iconsarrow_top_right} alt=""   />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
    {skills.map((skill, index) => (
      <div key={index} className="col-lg col-md-4 col-6">
        <div className={`item ${index < skills.length - 1 ? "md-mb30" : ""}`}>
          <div className="box">
            <div className="img">
              <img src={skill.image} alt={skill.name} />
            </div>
            <h2>{skill.level}</h2>
          </div>
          <h6>{skill.name}</h6>
        </div>
      </div>
    ))}
  </div>
      </div>
      <section className="numbers-sec pt-0">
        <div className="row">
          <div className="col-lg-3">
            <div className="item mb-60">
              <h2>
                <span>30+</span>
              </h2>
              <p>
                <a
                  href="https://www.rtl-theme.com/author/farhamaghdasi/"
                  rel="nofollow"
                >
                  HTML Templates
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mb-60">
              <h2>
                <span>200+</span>
              </h2>
              <p>Hours With ☕</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item md-mb60">
              <h2>
                <span>2</span>
              </h2>
              <p>Website Created</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item">
              <h2>
                <span>2+</span>
              </h2>
              <p>Website Conversions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* ==================== End Skills ==================== */}
    {/* ==================== Start Intro ==================== */}
    <div className="marquee section-padding">
      <div className="main-marq shadow-off ontop">
        <div className="slide-har st1">
          <div className="box">
            <div className="item">
              <h2>
                <span>React</span>
              </h2>
            </div>
            <div className="item">
              <h2>
                <span>Tailwind</span>
              </h2>
            </div>
            <div className="item">
              <h2>
                <span>Wordpress</span>
              </h2>
            </div>
            <div className="item">
              <h2>
                <span>Bootstrap</span>
              </h2>
            </div>
            <div className="item">
              <h2>
                <span>Jquery</span>
              </h2>
            </div>
          </div>
          <div className="box">
            <div className="item">
              <h2>
                <span>Creative</span>
              </h2>
            </div>
            <div className="item">
              <h2>
                <span>Flexiable</span>
              </h2>
            </div>
            <div className="item">
              <h2>
                <span>Dedicated</span>
              </h2>
            </div>
            <div className="item">
              <h2>
                <span>Creative</span>
              </h2>
            </div>
            <div className="item">
              <h2>
                <span>Flexiable</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ==================== End Intro ==================== */}
    {/* ==================== Start Resume ==================== */}
    <div className="resume">
      <div className="container pt-30 bord-thin-top">
        <div className="sec-head mb-80">
          <div className="d-flex">
            <div>
              <span className="sub-head">About Me</span>
            </div>
            <div className="ml-auto">
              <div className="bract">
                {"{"} <span> Farham Aghdasi 💻 </span> {"}"}
              </div>
            </div>
          </div>
          <div className="row mt-30">
            <div className="col-lg-7 offset-lg-3">
              <div>
                <h2 className="fz-60">Experience.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="clumn">
              <span className="date">2022</span>
              <div className="item mb-40">
                <h4>Lerning HTML , CSS</h4>
                <p>YouTube , 7lern , Rocket</p>
              </div>
              <div className="item mb-40">
                <h4>Start Creating HTML Templates</h4>
                <p>rtl-theme.com</p>
              </div>
              <div className="item">
                <h4>Lerning JS</h4>
                <p>YouTube , 7lern , Rocket</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="clumn">
              <span className="date">2023</span>
              <div className="item mb-40">
                <h4>First Project</h4>
                <p>HTML To React</p>
              </div>
              <div className="item mb-40">
                <h4>Lerning React</h4>
                <p>Youtube</p>
              </div>
              <div className="item mb-40">
                <h4>Lerning Bootstrap5</h4>
                <p>Youtube</p>
              </div>
              <div className="item">
                <h4>100 Sale</h4>
                <p>rtl-theme.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="clumn">
              <span className="date">2024</span>
              <div className="item mb-40">
                <h4>khooshesanat Website</h4>
                <p>FullStack &amp; SEO</p>
              </div>
              <div className="item mb-40">
                <h4>
                  Third Place Nationwide in the Khwarizmi Youth Festival, Web
                  Development
                </h4>
                <p>AntiRip.js | advanced web-ripper blocker</p>
              </div>
              <div className="item mb-40">
                <h4>+300 Sale</h4>
                <p>rtl-theme.com</p>
              </div>
              <div className="item mb-40">
                <h4>acoachgroup Website</h4>
                <p>Dashboard &amp; Landing Page React</p>
              </div>
              <div className="item">
                <h4>Lerning Tailwind</h4>
                <p>Youtube</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ==================== End Resume ==================== */}
  </section>
  
  )
}

export default Skills