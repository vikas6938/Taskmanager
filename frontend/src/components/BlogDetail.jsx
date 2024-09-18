import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BlogDetail() {
  const { id } = useParams(); // Get post ID from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`https://new-blog-project-mu.vercel.app/api/posts/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header text-center">
          <h2>{blog.title}</h2>
        </div>
        <div className="card-body">
          <p>{blog.content}</p>
        </div>
        <div className="card-footer text-muted">
          Posted on {new Date(blog.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
