import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // برای دریافت url از مسیر
import { Header, Footer, Share, CreateCaptcha , ListComments } from '../components';
import authorImage from '../assets/imgs/logo.png'
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import ImageTest from '../assets/imgs/1.jpg'
import { use } from 'react';

const Bloginfo = () => {
  const { url } = useParams(); // دریافت پارامتر از مسیر
  const [post, setPost] = useState(null); // ذخیره پست انتخابی
  const [posts, setPosts] = useState([]); // ذخیره تمامی پست‌ها برای نوار کناری
  const [isLoading, setIsLoading] = useState(true); // مدیریت وضعیت بارگذاری
  const [error, setError] = useState(null); // مدیریت خطاها
  const currentUrl = window.location.href; // URL فعلی صفحه
  const currentTitle = document.title; // عنوان فعلی صفحه



  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch('https://api.farhamaghdasi.ir/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        if (data.posts) {
          const foundPost = data.posts.find((item) => item.url === url);
          setPost(foundPost || null); // ذخیره پست پیدا شده یا null
          setPosts(data.posts); // ذخیره تمامی پست‌ها
        } else {
          throw new Error('Invalid data structure');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [url]);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  // مدیریت تغییرات فرم
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleCaptchaChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      captcha: value,
    }));
  };


  // ارسال فرم
  const submitComment = async (e) => {
    e.preventDefault();

    if (!formData.captcha.trim()) {
      alert("Please enter the CAPTCHA.");
      return;
    }

    try {
      const response = await fetch("https://api.farhamaghdasi.ir/setcomments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          url: post.url,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Failed to post comment.");
        return;
      }

      setFormData({ name: "", email: "", message: "", captcha: "" });
    } catch (error) {
      console.error("Error posting comment:", error);
      alert("An error occurred while posting your comment.");
    }
  };



  // مدیریت وضعیت‌ها
  if (isLoading) {
    return;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <>
      {/* کامپوننت SEO */}
      <SEO
        title={post.title || "Default Blog Title"}
        description={post.short_description || "Read this insightful blog post on programming and web development."}
        image={`https://api.farhamaghdasi.ir/backend/${post.thumbnail}`}
        url={`https://farhamaghdasi.ir/blog/${post.url}`} // لینک پست وبلاگ
      />

      <Header />
      <header className="post-header pt-20">
        <div
          className="container-xl bg-img mt-80" data-overlay-dark="4"
          style={{ backgroundImage: `url(${ImageTest})` }} // استفاده از تصویر
        // style={{ backgroundImage: `url(${`https://api.farhamaghdasi.ir/backend/${post.thumbnail}` || ImageTest})` }} // استفاده از تصویر
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="caption">
                <div className="tags fz-14">
                  {/* نمایش تگ‌های پست */}
                  <a href="#">{post.category}</a>
                </div>
                <h1 className="fz-55 mt-30">{post.title || "Default Title"}</h1>
              </div>
              <div className="info d-flex mt-40 align-items-center">
                <div className="left-info sm-mb30">
                  <div className="d-flex align-items-center">
                    <div className="author-info">
                      <div className="d-flex align-items-center">
                        <a href="#" className="circle-60">
                          <img src={authorImage} alt="" className="circle-img" />
                        </a>
                        <a href="#" className="ml-20">
                          <span className="opacity-7 mb-5">Author</span>
                          <h6 className="fz-16">{post.author || "Unknown"}</h6>
                        </a>
                      </div>
                    </div>
                    <div className="date ml-50">
                      <a href="#">
                        <span className="opacity-7 mb-5">Published</span>
                        <h6 className="fz-16">{new Date(post.date).toLocaleDateString()}</h6>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="right-info ml-auto">
                  <div>
                    <span className="icon ti-comment fz-18 mr-10" />
                    <span className="opacity-7">{post.comments?.length || 0} Comments</span>
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
                    <div className="text" dangerouslySetInnerHTML={{ __html: post.description || "" }}>
                    </div>
                  </article>
                </div>
                <div className="info-area flex pt-50 bord-thin-top">
                  <div>
                    <div className="tags flex">
                      <div className="valign">
                        <span>Tags :</span>
                      </div>
                      <div>
                        <a href="">{post.category}</a>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="share-icon flex">
                      <div className="valign">
                        <span>Share :</span>
                      </div>
                      <Share currentUrl={currentUrl} currentTitle={currentTitle} />
                    </div>
                  </div>
                </div>
                <div className="author-area mt-50 bord-thin-bottom">
                  <div className="flex">
                    <div className="author-img mr-30">
                      <div className="img">
                        <img
                          src={authorImage}
                          alt=""
                          className="circle-img"
                        />
                      </div>
                    </div>
                    <div className="cont valign">
                      <div className="full-width">
                        <h6 className="fw-600 mb-10">Farham Aghdasi</h6>
                        <p>
                          Junior Front-End Developer ,Junior SEO ,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="comments-from mt-80 md-mb80">
                  <div className="mb-60">
                    <h3>Leave a comment</h3>
                  </div>
                  <form onSubmit={submitComment}>
                    <div className="controls row">
                      <div className="col-lg-6">
                        <div className="form-group mb-30">
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
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
                            value={formData.email}
                            onChange={handleInputChange}
                            required
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
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <CreateCaptcha onCaptchaChange={handleCaptchaChange} />
                      <div className="text-center">
                        <button type="submit" className="mt-30">
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </form>

                  <ListComments url={post.url} />
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
                              <span>{new Date(post.date).toLocaleDateString()}</span>
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
                  <Link
                    to="/blog/" // آدرس برای مشاهده همه پست‌ها
                    className="butn butn-md butn-bord butn-rounded ml-auto"
                  >
                    <div className="d-flex align-items-center">
                      <span>All Articles</span>
                      <span className="icon ml-20">
                        <i className="fa-solid fa-chevron-right" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row xlg-marg">
            {posts.slice(0, 3).map((post) => (
              <div key={post.id} className="col-lg-4 bord">
                <div className="item">
                  <div className="info d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="author-img fit-img">
                          <img
                            src={authorImage} // اینجا تصویر نویسنده می‌تواند ثابت باشد یا از داده‌های API بیاید
                            alt={post.author || "Author"}
                          />
                        </div>
                      </div>
                      <div className="author-info ml-10">
                        <span>{post.author || "Unknown"}</span>
                        <span className="sub-color">Front-end Developer</span>
                      </div>
                    </div>
                    <div className="date ml-auto">
                      <span className="sub-color">
                        <i className="fa-regular fa-clock mr-15 opacity-7" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="img fit-img mt-30">
                    <a href={`/blog/${post.url}/`}>
                      <img
                        src={`https://api.farhamaghdasi.ir/backend/${post.thumbnail}`}
                        alt={post.title}
                      />
                    </a>
                  </div>
                  <div className="cont mt-30">
                    <h6>
                      <a href={`/blog/${post.url}/`}>
                        {post.title || "Default Title"}
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      <Footer />
    </>
  );
}

export default Bloginfo;
