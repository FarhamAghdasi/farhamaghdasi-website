import React, { useEffect, useState } from 'react';
import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import assets_imgs_blog3 from '../assets/imgs/blog/3.jpg'; // می‌توانید این را به صورت داینامیک بارگذاری کنید
import { Link } from 'react-router-dom'

const Blog = () => {
  const [posts, setPosts] = useState([]);

  // دامنه
  const domain = "farhamaghdasi.ir";

  // تابع برای دریافت مطالب بلاگ
  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(`https://farhamaghdasi.ir/api/wp-json/wp/v2/posts`, {
        method: 'GET',
        headers: {
          'domain': domain, // کلید دامنه در هدر
        },
      });
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <section className="blog-cst section-padding">
      <div className="container pt-30 bord-thin-top-light">
        <div className="sec-head mb-80">
          <div className="d-flex">
            <div>
              <span className="sub-head">My Expertise</span>
            </div>
            <div className="ml-auto">
              <div className="bract">
                {"{"} <span>1+ Clients</span> {"}"}
              </div>
            </div>
          </div>
          <div className="row mt-30">
            <div className="col-lg-7 offset-lg-3">
              <div>
                <h2>
                  Check My Blog <br /> Content in the web world
                </h2>
                <Link href="/blog/" className="butn-under mt-15">
                  View All Posts{" "}
                  <span className="icon invert">
                    <img src={common_imgs_iconsarrow_top_right} alt="" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          {/* نمایش ۳ مطلب بلاگ */}
          {posts.length > 0 ? (
            posts.slice(0, 3).map((post) => (
              <div className="col-lg-4" key={post.id}>
                <div className="item">
                  <div className="img fit-img">
                    <img src={post.featured_media_url || assets_imgs_blog3} alt={post.title.rendered} />
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="butn">
                      <span className="icon">
                        <img src={common_imgs_iconsarrow_top_right} alt="" />
                      </span>
                    </a>
                  </div>
                  <div className="cont mt-30">
                    <h5>
                      <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title.rendered}</a>
                    </h5>
                    <span className="main-color">{post.category || 'General'}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-lg-12">
              <p>No blog posts available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
