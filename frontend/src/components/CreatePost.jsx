import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://new-blog-project-mu.vercel.app/api/posts", { title, content })
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header text-center">
          <h2>Create New Blog</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Title Input */}
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

            {/* Content Textarea */}
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

            {/* Submit Button */}
            <button type="submit" className="btn grade-btn border-none text-white">
              Create Blog Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
