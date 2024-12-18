import React, { useState, useEffect } from 'react';
import './CommentsSection.css'; // فایل استایل

const CommentsSection = ({ url }) => {
  const [comments, setComments] = useState([]);

  // گرفتن کامنت‌ها از API
  const fetchComments = async () => {
    try {
      const response = await fetch(`https://api.farhamaghdasi.ir/comments?url=${url}`);
      if (!response.ok) throw new Error('Failed to fetch comments');
      const data = await response.json();
      setComments(data); // ذخیره کامنت‌ها
    } catch (err) {
      console.error('Error fetching comments:', err);
    }
  };

  // بارگذاری کامنت‌ها هنگام بارگذاری کامپوننت
  useEffect(() => {
    fetchComments(); // فراخوانی کامنت‌ها هنگام بارگذاری کامپوننت
  }, [url]); // فراخوانی مجدد هنگام تغییر url

  return (
    <div className="comments-list">
      {comments.length > 0 ? (
        comments
          .filter((comment) => comment.parent_id === null) // فقط کامنت‌های اصلی را نمایش بده
          .map((comment) => (
            <div key={comment.id} className="comment">
              <div className="comment-header">
                <img 
                  src="https://via.placeholder.com/50" 
                  alt="avatar" 
                  className="avatar" 
                />
                <div className="comment-details">
                  <h6>{comment.author_name}</h6>
                  <small>{new Date(comment.date).toLocaleString()}</small>
                </div>
              </div>
              <div className="comment-body">
                <p>{comment.content}</p>
              </div>
              {/* بررسی و نمایش پاسخ‌ها */}
              <div className="replies">
                {comments
                  .filter((reply) => reply.parent_id === comment.id) // پاسخ‌های این کامنت را فیلتر کن
                  .map((reply) => (
                    <div key={reply.id} className="comment reply">
                      <div className="comment-header">
                        <img 
                          src="https://via.placeholder.com/50" 
                          alt="avatar" 
                          className="avatar" 
                        />
                        <div className="comment-details">
                          <h6>{reply.author_name}</h6>
                          <small>{new Date(reply.date).toLocaleString()}</small>
                        </div>
                      </div>
                      <div className="comment-body">
                        <p>{reply.content}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))
      ) : (
        <p>No comments yet. Be the first to comment!</p>
      )}
    </div>
  );
};

export default CommentsSection;
