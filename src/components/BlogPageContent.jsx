import React, { useEffect, useState } from 'react';

const BlogPageContent = () => {
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
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <header className="blog-hed">
        <div className="container section-padding bord-thin-bottom-light">
          <div className="row">
            <div className="col-lg-7">
              <div className="caption md-mb30">
                <h1 className="text-indent">
                  Welcome to Our Blog
                </h1>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex align-items-end">
              <div className="text">
                <p>
                  Explore the latest posts, ideas, and trends shared by our experts.
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
                            <img src={post.authorImage} alt={post.author} />
                          </div>
                        </div>
                        <div className="author-info ml-10">
                          <span>{post.author}</span>
                          <span className="sub-color">{post.role}</span>
                        </div>
                      </div>
                      <div className="date ml-auto">
                        <span className="sub-color">
                          <i className="fa-regular fa-clock mr-15 opacity-7" /> {post.date}
                        </span>
                      </div>
                    </div>
                    <div className="img fit-img mt-30">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="cont mt-30">
                      <span className="sub-color fz-14 text-u mb-15">
                        <a href="#0">
                          <i className="fa-solid fa-tag mr-10 opacity-7" /> {post.category}
                        </a>
                      </span>
                      <h3>
                        <a href="#0">{post.title}</a>
                      </h3>
                      <div className="text mt-25">
                        <p>{post.date}</p>
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
                          <a href="#0">
                            <img src={post.image} alt={post.title} />
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
                          <a href="#0">{post.title}</a>
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="widget tags">
                  <h6 className="title-widget">Tags</h6>
                  <div>
                    {Array.from(new Set(posts.flatMap((post) => post.tags))).map((tag) => (
                      <a href="#0" key={tag}>{tag}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPageContent;