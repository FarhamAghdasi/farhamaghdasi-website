import assets_imgs_blogs_post1 from '../assets/imgs/blog/post/1.jpg';
import assets_imgs_blogs_post2 from '../assets/imgs/blog/post/2.jpg';
import assets_imgs_blogs_post3 from '../assets/imgs/blog/post/3.jpg';
import assets_imgs_blogs_posta1 from '../assets/imgs/blog/post/a1.jpg';
import assets_imgs_blogs_blog14 from '../assets/imgs/blog/blog1/4.jpg';
import assets_imgs_blogs_blog15 from '../assets/imgs/blog/blog1/5.jpg';
import assets_imgs_blogs_blog16 from '../assets/imgs/blog/blog1/6.jpg';
import assets_imgs_blogs_blog11 from '../assets/imgs/blog/blog1/1.jpg';
import assets_imgs_blogs_blog1a1 from '../assets/imgs/blog/blog1/a1.jpg';
import assets_imgs_blogs_blog12 from '../assets/imgs/blog/blog1/2.jpg';
import assets_imgs_blogs_blog1a2 from '../assets/imgs/blog/blog1/a2.jpg';
import assets_imgs_blogs_blog13 from '../assets/imgs/blog/blog1/3.jpg';

import React from 'react'

const BlogContent = () => {
  return (
    <>
    <header className="post-header pt-20">
      <div
        className="container-xl bg-img mt-80"
        data-background={assets_imgs_blogs_post1}
        data-overlay-dark={4}
      >
        <div className="row">
          <div className="col-lg-10">
            <div className="caption">
              <div className="tags fz-14">
                <a href="blog-details.html#0">Design</a>
                <a href="blog-details.html#0">Development</a>
              </div>
              <h1 className="fz-55 mt-30">
                Network of wormholes colonies extraordinary claims require.
              </h1>
            </div>
            <div className="info d-flex mt-40 align-items-center">
              <div className="left-info sm-mb30">
                <div className="d-flex align-items-center">
                  <div className="author-info">
                    <div className="d-flex align-items-center">
                      <a href="blog-details.html#0" className="circle-60">
                        <img src={assets_imgs_blogs_posta1} alt="" className="circle-img"  />
                      </a>
                      <a href="blog-details.html#0" className="ml-20">
                        <span className="opacity-7 mb-5">Author</span>
                        <h6 className="fz-16">Ui-ThemeZ</h6>
                      </a>
                    </div>
                  </div>
                  <div className="date ml-50">
                    <a href="blog-details.html#0">
                      <span className="opacity-7 mb-5">Published</span>
                      <h6 className="fz-16">August 6, 2021</h6>
                    </a>
                  </div>
                </div>
              </div>
              <div className="right-info ml-auto">
                <div>
                  <span className="pe-7s-comment fz-18 mr-10" />
                  <span className="opacity-7">02 Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section className="blog section-padding">
      <div className="container">
        <div className="row xlg-marg">
          <div className="col-lg-8">
            <div className="main-post">
              <div className="item pb-60">
                <article>
                  <div className="text">
                    <p>
                      <span className="spec-letter">Q</span> new report said
                      earlier this week that Apple is working on a brand new
                      laptop. Apple plans to release a 15-inch MacBook Air in
                      2023, a first for the Air series. A trusted Apple insider
                      with a proven track record confirmed that Apple is working
                      on the larger MacBook Air.
                    </p>
                  </div>
                  <div className="text">
                    <p>
                      However, Apple might not include it in the Air series when
                      it launches it. As for the notebook’s release date, the
                      15-inch MacBook isn’t coming soon. It’ll get a late 2023
                      release at best, according to the new claims.
                    </p>
                  </div>
                  <div className="title mt-30">
                    <h4>What sizes do MacBook Airs come in?</h4>
                  </div>
                  <div className="text mt-20">
                    <p>
                      Apple currently sells only one MacBook Air size. The laptop
                      comes in a 13-inch version that matches the pre-2021 13-inch
                      MacBook Pro size. Previously, Apple sold an 11-inch MacBook
                      Air, but the company discontinued that model in 2017.
                    </p>
                  </div>
                </article>
                <div className="post-qoute mt-50">
                  <h6 className="fz-20">
                    <span className="l-block">
                      And the day came when the risk to remain tight in a bud was
                      more painful than the risk it took to blossom.
                    </span>
                    <span className="author mt-20 mb-0"> - UiThemez</span>
                  </h6>
                </div>
                <div className="mb-50 mt-50">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="iner-img sm-mb30">
                        <img src={assets_imgs_blogs_post2} alt=""   />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="iner-img">
                        <img src={assets_imgs_blogs_post3} alt=""   />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="title mb-10">
                  <h4>Apple currently sells.</h4>
                </div>
                <div className="text mb-20">
                  <p>
                    A new report said earlier this week that Apple is working on a
                    brand new laptop. Apple plans to release a 15-inch MacBook Air
                    in 2023, a first for the Air series. A trusted Apple insider
                    with a proven track record confirmed that Apple is working on
                    the larger MacBook Air.
                  </p>
                </div>
                <div className="unorder-list mb-30">
                  <h6 className="mb-15">Ordered &amp; Unordered Lists.</h6>
                  <ul className="rest">
                    <li>Yet this above sewed flirted opened ouch</li>
                    <li>Goldfinch realistic sporadic ingenuous</li>
                    <li>
                      Abominable this abidin far successfully then like piquan
                    </li>
                  </ul>
                </div>
                <div className="order-list mb-30">
                  <h6 className="mb-15">Ordered &amp; Unordered Lists.</h6>
                  <ul className="rest">
                    <li>
                      <span>01 -</span> Yet this above sewed flirted opened ouch
                    </li>
                    <li>
                      <span>02 -</span> Goldfinch realistic sporadic ingenuous
                    </li>
                    <li>
                      <span>03 -</span> Abominable this abidin far successfully
                      then like piquan
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <p>
                    However, Apple might not include it in the Air series when it
                    launches it. As for the notebook’s release date, the 15-inch
                    MacBook isn’t coming soon. It’ll get a late 2023 release at
                    best, according to the new claims.
                  </p>
                </div>
              </div>
              <div className="info-area flex pt-50 bord-thin-top">
                <div>
                  <div className="tags flex">
                    <div className="valign">
                      <span>Tags :</span>
                    </div>
                    <div>
                      <a href="blog-classic.html">Tech</a>
                      <a href="blog-classic.html">Ui-ThemeZ</a>
                    </div>
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="share-icon flex">
                    <div className="valign">
                      <span>Share :</span>
                    </div>
                    <div>
                      <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.twitter.com/">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://www.youtube.com/">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="author-area mt-50 bord-thin-bottom">
                <div className="flex">
                  <div className="author-img mr-30">
                    <div className="img">
                      <img src={assets_imgs_blogs_posta1} alt="" className="circle-img"  />
                    </div>
                  </div>
                  <div className="cont valign">
                    <div className="full-width">
                      <h6 className="fw-600 mb-10">Chris Smith</h6>
                      <p>
                        Nulla eleifend, lectus eu gravida facilisis, ipsum metus
                        faucibus eros, vitae vulputate nibh libero ac metus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comments-from mt-80 md-mb80">
              <div className="mb-60">
                <h3>Leave a comment</h3>
              </div>
              <form id="contact-form" method="post" action="contact.php">
                <div className="messages" />
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows={4}
                        required="required"
                        defaultValue={""}
                      />
                    </div>
                    <div className="text-center">
                      <div className="mt-30">
                        <button type="submit">
                          <span className="text">Post Comment</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
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
                  <li>
                    <span>
                      <a href="blog-list.html">Lifestyle</a>
                    </span>
                    <span className="ml-auto">05</span>
                  </li>
                  <li>
                    <span>
                      <a href="blog-list.html">Creative</a>
                    </span>
                    <span className="ml-auto">28</span>
                  </li>
                  <li>
                    <span>
                      <a href="blog-list.html">WordPress</a>
                    </span>
                    <span className="ml-auto">17</span>
                  </li>
                  <li>
                    <span>
                      <a href="blog-list.html">Design</a>
                    </span>
                    <span className="ml-auto">45</span>
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
                <div className="item d-flex align-items-center">
                  <div>
                    <div className="img">
                      <a href="blog-list.html">
                        <img src={assets_imgs_blogs_blog15} alt=""   />
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
                        breaking the rules: using sqlite to demo web
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="item d-flex align-items-center">
                  <div>
                    <div className="img">
                      <a href="blog-list.html">
                        <img src={assets_imgs_blogs_blog16} alt=""   />
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
                        building better ui designs with layout grids
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="widget tags">
                <h6 className="title-widget">Tags</h6>
                <div>
                  <a href="blog-list.html">Creative</a>
                  <a href="blog-list.html">Design</a>
                  <a href="blog-list.html">Dark &amp; Light</a>
                  <a href="blog-list.html">Minimal</a>
                  <a href="blog-list.html">Infolio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="blog-mp">
      <div className="container section-padding bord-thin-top-light">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="col-lg-6">
              <h2>Recent News</h2>
            </div>
            <div className="col-lg-6">
              <div className="d-flex">
                <a
                  href="blog-details.html#0"
                  className="butn butn-md butn-bord butn-rounded ml-auto"
                >
                  <div className="d-flex align-items-center">
                    <span>All Articles</span>
                    <span className="icon ml-20">
                      <i className="fa-solid fa-chevron-right" />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row xlg-marg">
          <div className="col-lg-4 bord">
            <div className="item">
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
                    <i className="fa-regular fa-clock mr-15 opacity-7" /> 12 hours
                    ago
                  </span>
                </div>
              </div>
              <div className="img fit-img mt-30">
                <img src={assets_imgs_blogs_blog11} alt=""   />
              </div>
              <div className="cont mt-30">
                <h6>
                  <a href="blog-details.html#0">
                    We’re winner SOTY at CSS Award 2023
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 bord">
            <div className="item">
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
                    <i className="fa-regular fa-clock mr-15 opacity-7" /> 12 hours
                    ago
                  </span>
                </div>
              </div>
              <div className="img fit-img mt-30">
                <img src={assets_imgs_blogs_blog12} alt=""   />
              </div>
              <div className="cont mt-30">
                <h6>
                  <a href="blog-details.html#0">
                    Common UX painpoints in Dashboard-related projects you must
                    know
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="info d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="author-img fit-img">
                      <img src={assets_imgs_blogs_blog1a2} alt=""   />
                    </div>
                  </div>
                  <div className="author-info ml-10">
                    <span>M Moussa</span>
                    <span className="sub-color">editor</span>
                  </div>
                </div>
                <div className="date ml-auto">
                  <span className="sub-color">
                    <i className="fa-regular fa-clock mr-15 opacity-7" /> 12 hours
                    ago
                  </span>
                </div>
              </div>
              <div className="img fit-img mt-30">
                <img src={assets_imgs_blogs_blog13} alt=""   />
              </div>
              <div className="cont mt-30">
                <h6>
                  <a href="blog-details.html#0">Visual Website Tips #5</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default BlogContent