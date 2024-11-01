import assets_imgs_blogs_blog1a1 from '../assets/imgs/blog/blog1/a1.jpg';
import assets_imgs_blogs_blog11 from '../assets/imgs/blog/blog1/1.jpg';
import assets_imgs_blogs_blog14 from '../assets/imgs/blog/blog1/4.jpg';

import React from 'react'

const BlogPageContent = () => {
  return (
    <>
    <header className="blog-hed">
      <div className="container section-padding bord-thin-bottom-light">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption md-mb30">
              <h1 className="text-indent">
                We are a digital agency for visually compelling about stories
                Hubfolio.
              </h1>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 d-flex align-items-end">
            <div className="text">
              <p>
                Crafting new bright brands, unique visual systems and digital
                experience focused on a wide range of original collabs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="blog-mp section-padding">
      <div className="container">
        <div className="row xlg-marg">
          <div className="col-lg-8">
            <div className="main-blog md-mb80">
              <div className="item mb-80">
                <div className="info d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="author-img fit-img">
                        <img src={assets_imgs_blogs_blog1a1} alt=""   />
                      </div>
                    </div>
                    <div className="author-info ml-10">
                      <span>M Moussa</span>
                      <span className="sub-color">editor</span>
                    </div>
                  </div>
                  <div className="date ml-auto">
                    <span className="sub-color">
                      <i className="fa-regular fa-clock mr-15 opacity-7" /> 12
                      hours ago
                    </span>
                  </div>
                </div>
                <div className="img fit-img mt-30">
                  <img src={assets_imgs_blogs_blog11} alt=""   />
                </div>
                <div className="cont mt-30">
                  <span className="sub-color fz-14 text-u mb-15">
                    <a href="blog-standard.html#0">
                      <i className="fa-solid fa-tag mr-10 opacity-7" /> Web Design
                    </a>
                  </span>
                  <h3>
                    <a href="blog-standard.html#0">
                      Common UX painpoints in Dashboard-related projects you must
                      know
                    </a>
                  </h3>
                  <div className="text mt-25">
                    <p>
                      Today most people get on average 4 to 6 hours of exercise
                      every day, and make sure that everything they put in their
                      mouths is not filled with sugars or preservatives, but they
                      pay no attention to their mental health, no vacations, not
                      even the occasional long weekend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="search-box">
                <input type="text" name="search-post" placeholder="Search" />
                <span className="icon pe-7s-search" />
              </div>
              <div className="widget catogry">
                <h6 className="title-widget">Categories</h6>
                <ul className="rest">
                  <li>
                    <span>
                      <a href="blog-list.html">Business</a>
                    </span>
                    <span className="ml-auto">33</span>
                  </li>
                </ul>
              </div>
              <div className="widget last-post-thum">
                <h6 className="title-widget">latest Posts</h6>
                <div className="item d-flex align-items-center">
                  <div>
                    <div className="img">
                      <a href="blog-list.html">
                        <img src={assets_imgs_blogs_blog14} alt=""   />
                        <span className="date">
                          <span>
                            14 / <br /> sep
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="cont">
                    <span className="tag">
                      <a href="blog-list.html">Web Design</a>
                    </span>
                    <h6>
                      <a href="blog-list.html">
                        ways to quickly increase traffic to your website
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="widget tags">
                <h6 className="title-widget">Tags</h6>
                <div>
                  <a href="blog-list.html">Creative</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default BlogPageContent