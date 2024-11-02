import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header, Footer, BlogContent } from '../components';

const Bloginfo = () => {
  const { slug } = useParams(); // گرفتن slug از URL
  const [post, setPost] = useState(null);

  const fetchBlogPost = async () => {
    try {
      const response = await fetch(`https://farhamaghdasi.ir/api/wp-json/wp/v2/posts?slug=${slug}`);
      const data = await response.json();
      if (data.length > 0) {
        const postData = data[0];
        const authorResponse = await fetch(`https://farhamaghdasi.ir/api/wp-json/wp/v2/users/${postData.author}`);
        const authorData = await authorResponse.json();
        setPost({
          ...postData,
          author_name: authorData.name, // نام نویسنده
          featured_media_url: postData.featured_media_url || '', // URL تصویر ویژگی
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
      <Header />
      <BlogContent post={post} /> {/* ارسال داده به BlogContent */}
      <Footer />
    </>
  );
};

export default Bloginfo;
