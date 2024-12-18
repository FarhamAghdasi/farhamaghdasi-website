import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header, Footer, BlogContent } from '../components';
import SEO from '../SEO'; // Import the SEO component

const Bloginfo = () => {
  const { slug } = useParams(); // گرفتن slug از URL
  const [post, setPost] = useState(null);

  const fetchBlogPost = async () => {
    try {
      const response = await fetch(`https://farhamaghdasi.ir/api/wp-json/wp/v2/posts?slug=${slug}`, {
        headers: {
          'domain': 'farhamaghdasi.ir' // اضافه کردن هدر
        }
      });
      const data = await response.json();
      if (data.length > 0) {
        const postData = data[0];
        const authorResponse = await fetch(`https://farhamaghdasi.ir/api/wp-json/wp/v2/users/${postData.author}`, {
          headers: {
            'domain': 'farhamaghdasi.ir' // اضافه کردن هدر
          }
        });
        const authorData = await authorResponse.json();
        const commentsResponse = await fetch(`https://farhamaghdasi.ir/api/wp-json/wp/v2/comments?post=${postData.id}`, {
          headers: {
            'domain': 'farhamaghdasi.ir' // اضافه کردن هدر
          }
        });
        const commentsData = await commentsResponse.json();
        setPost({
          ...postData,
          author_name: authorData.name,
          featured_media_url: postData.featured_media_url || '',
          comments: commentsData // اضافه کردن نظرات به داده‌ها
        });
      } else {
        console.error('Blog post not found');
      }
    } catch (error) {
      console.error('Error fetching blog post:', error);
    }
  };

  useEffect(() => {
    fetchBlogPost();
  }, [slug]);

  return (
    <>
      {post && (
        <SEO 
          title={post.title.rendered || "Default Blog Title"}
          description={post.excerpt.rendered || "Read this insightful blog post on programming and web development."}
          url={window.location.href}
        />
      )}
      <Header />
      <BlogContent post={post} /> {/* ارسال داده به BlogContent */}
      <Footer />
    </>
  );
};

export default Bloginfo;
