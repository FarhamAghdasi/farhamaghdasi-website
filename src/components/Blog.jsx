import React, { useEffect, useState } from 'react';
import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import assets_imgs_blog3 from '../assets/imgs/blog/3.jpg'; // تصویر پیش‌فرض
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.farhamaghdasi.ir/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then((data) => {
        // استخراج آرایه posts از داده‌های دریافت‌شده
        setPosts(data.posts || []); 
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="blog-cst section-padding">
      <div className="container pt-30 bord-thin-top-light">
        <div className="sec-head mb-80">
          <div className="d-flex">
            <div>
              <span className="sub-head">My Article's</span>
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
                <Link to="/blog/" className="butn-under mt-15">
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
            posts.slice(0, 3).map((post, index) => (
              <div className="col-lg-4" key={index}>
                <div className="item">
                  <div className="img fit-img">
                    <img 
                      src={post.thumbnail ? `https://api.farhamaghdasi.ir/backend/${post.thumbnail}` : assets_imgs_blog3} 
                      alt={post.title} 
                    />
                    <a href={`https://farhamaghdasi.ir/blog/${post.url}/`} className="butn">
                      <span className="icon">
                        <img src={common_imgs_iconsarrow_top_right} alt="" />
                      </span>
                    </a>
                  </div>
                  <div className="cont mt-30">
                    <h5>
                      <a href={`https://farhamaghdasi.ir/blog/${post.url}/`}>{post.title}</a>
                    </h5>
                    <span className="main-color">{post.category || 'General'}</span>
                    <p>{post.short_description}</p>
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
