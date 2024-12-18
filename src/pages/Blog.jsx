import React, { useEffect, useState } from 'react';
import { Header, Footer } from '../components';
import SEO from '../SEO'; // Import the SEO component
import authorImage from '../assets/imgs/logo.png'

const Bloginfo = () => {
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
        if (Array.isArray(data.posts)) {
          setPosts(data.posts); // فقط آرایه posts تنظیم می‌شود
        } else {
          throw new Error('Invalid data structure');
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);
  

  if (isLoading) {}

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {posts.length > 0 && (
        <SEO
          title="Blog"
          description="Read this insightful blog post on programming and web development."
          url={window.location.href}
        />
      )}
      <Header />
      <header className="blog-hed">
        <div className="container section-padding bord-thin-bottom-light">
          <div className="row">
            <div className="col-lg-7">
              <div className="caption md-mb30">
                <h1 className="text-indent">We are a digital agency for visually compelling about website development.</h1>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex align-items-end">
              <div className="text">
                <p>
                Crafting new bright brands, unique visual systems and digital experience focused on a wide range of original collabs.


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
                {posts.map((post) => (
                  <div className="item mb-80" key={post.id}>
                    <div className="info d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="author-img fit-img">
                            <img src={post.authorImage || authorImage} alt={post.author} />
                          </div>
                        </div>
                        <div className="author-info ml-10">
                          <span>{post.author}</span>
                          <span className="sub-color">Front-end Developer</span>
                        </div>
                      </div>
                      <div className="date ml-auto">
                        <span className="sub-color">
                          <i className="fa-regular fa-clock mr-15 opacity-7" /> {post.date}
                        </span>
                      </div>
                    </div>
                    <div className="img fit-img mt-30">
                      <img src={`https://api.farhamaghdasi.ir/backend/${post.thumbnail}`} alt={post.title} />
                    </div>
                    <div className="cont mt-30">
                      <span className="sub-color fz-14 text-u mb-15">
                        <a href="#0">
                          <i className="fa-solid fa-tag mr-10 opacity-7" /> {post.category}
                        </a>
                      </span>
                      <h3>
                        <a href={`https://farhamaghdasi.ir/blog/${post.url}/`}>{post.title}</a>
                      </h3>
                      <div className="text mt-25">
                        <p>{post.short_description}</p>
                      </div>
                    </div>
                  </div>
                ))}
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
                    {Array.from(new Set(posts.map((post) => post.category))).map((category) => (
                      <li key={category}>
                        <span>
                          <a href="#0">{category}</a>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="widget last-post-thum">
                  <h6 className="title-widget">Latest Posts</h6>
                  {posts.slice(0, 3).map((post) => (
                    <div className="item d-flex align-items-center" key={post.id}>
                      <div>
                        <div className="img">
                          <a href={`https://farhamaghdasi.ir/blog/${post.url}/`}>
                            <img src={`https://api.farhamaghdasi.ir/backend/${post.thumbnail}`} alt={post.title} />
                            <span className="date">
                              <span>{post.date}</span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="cont">
                        <span className="tag">
                          <a href="#0">{post.category}</a>
                        </span>
                        <h6>
                          <a href={`https://farhamaghdasi.ir/blog/${post.url}/`}>{post.title}</a>
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bloginfo;
