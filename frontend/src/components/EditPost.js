import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditPost() {
  const { id } = useParams(); // Get the post ID from the URL
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://new-blog-project-mu.vercel.app/api/posts/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://new-blog-project-mu.vercel.app/api/posts/${id}`, { title, content })
      .then(() => {
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header text-center">
          <h2>Edit Blog</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Content</label>
              <textarea
                className="form-control"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="5"
                placeholder="Enter blog content"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Update Blog Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
