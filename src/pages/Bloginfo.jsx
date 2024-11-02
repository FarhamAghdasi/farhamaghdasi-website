import React, { useEffect, useState } from 'react';
import { Header, Footer, BlogContent } from '../components';
import SEO from '../SEO';

const Bloginfo = ({ match }) => {
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    // Fetch post data based on the post ID
    const fetchPost = async () => {
      const response = await fetch(`https://farhamaghdasi.ir/api/wp-json/wp/v2/posts/${match.params.id}`);
      const data = await response.json();
      setPost(data);
    };

    fetchPost();
  }, [match.params.id]);


  return (
    <>
      {/* کامپوننت SEO */}
      <SEO 
        title={post.title.rendered || "Default Blog Title"}
        description={post.excerpt.rendered || "Read this insightful blog post on programming and web development."}
        image={post.featured_media_url || "https://farhamaghdasi.ir/default-blog-image.jpg"}
        url={`https://farhamaghdasi.ir/blog/${post.id}`} // لینک پست وبلاگ
      />

      <Header />
      <BlogContent post={post} /> {/* ارسال prop post به BlogContent */}
      <Footer />
    </>
  );
}

export default Bloginfo;
