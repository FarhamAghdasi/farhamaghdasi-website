import assets_imgs_blogs_posta1 from '../assets/imgs/blog/post/a1.jpg';
import React from 'react';

const BlogContent = ({ post }) => { // دریافت prop post
  if (!post) {
    return <p className="no-data-message">No blog post found.</p>; // نمایش پیام در صورت نبود پست
  }

  return (
    <>
      <header className="post-header pt-20">
        <div
          className="container-xl bg-img mt-80"
          style={{ backgroundImage: `url(${post.featured_media_url})` }} // استفاده از تصویر ویژگی
        >
          <div className="row">
            <div className="col-lg-10">
              <div className="caption">
                <div className="tags fz-14">
                  {post.tags.map((tag, index) => (
                    <a href={`#`} key={index}>
                      {tag.name}
                    </a>
                  ))}
                </div>
                <h1 className="fz-55 mt-30">
                  {post.title.rendered} {/* عنوان پست */}
                </h1>
              </div>
              <div className="info d-flex mt-40 align-items-center">
                <div className="left-info sm-mb30">
                  <div className="d-flex align-items-center">
                    <div className="author-info">
                      <div className="d-flex align-items-center">
                        <a href={`#`} className="circle-60">
                          <img src={assets_imgs_blogs_posta1} alt="" className="circle-img" />
                        </a>
                        <a href={`#`} className="ml-20">
                          <span className="opacity-7 mb-5">Author</span>
                          <h6 className="fz-16">{post.author_name}</h6> {/* نام نویسنده */}
                        </a>
                      </div>
                    </div>
                    <div className="date ml-50">
                      <a href={`#`}>
                        <span className="opacity-7 mb-5">Published</span>
                        <h6 className="fz-16">{new Date(post.date).toLocaleDateString()}</h6> {/* تاریخ انتشار */}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="right-info ml-auto">
                  <div>
                    <span className="pe-7s-comment fz-18 mr-10" />
                    <span className="opacity-7">02 Comments</span> {/* تعداد نظرات */}
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
                      <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> {/* محتوای پست */}
                    </div>
                  </article>
                  <div className="info-area flex pt-50 bord-thin-top">
                    <div>
                      <div className="tags flex">
                        <div className="valign">
                          <span>Tags :</span>
                        </div>
                        <div>
                          {post.tags.map((tag, index) => (
                            <a href={`#`} key={index}>{tag.name}</a>
                          ))}
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
                          <input id="form_name" type="text" name="name" placeholder="Name" required="required" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-30">
                          <input id="form_email" type="email" name="email" placeholder="Email" required="required" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea id="form_message" name="message" placeholder="Message" rows={4} required="required" defaultValue={""} />
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
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="search-box">
                  <input type="text" name="search-post" placeholder="Search" />
                  <span className="icon pe-7s-search" />
                </div>
                {/* باقی ویجت‌ها */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* بخش اخبار اخیر */}
    </>
  );
}

export default BlogContent;
