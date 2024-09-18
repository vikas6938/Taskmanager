import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Brand Logo */}
          <Link className="navbar-brand" to="/">
            BlogSide
          </Link>
          <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/create">
                Create New Post
              </Link>

          {/* Toggler for responsive navbar */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto">
              
              <a className="nav-link" href="#">
                Pricing
              </a>
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
             
            </div>

          </div>
          <Link className="btn grade-btn border-none text-white" to="/login">
              Log in 
            </Link>
        </div>
      </nav>

      {/* Example Bootstrap Card Below Header */}
      <div className="container mt-4">
        <div className="card text-center">
          <div className="card-header">Welcome to BlogSide</div>
          <div className="card-body">
            <h5 className="card-title">Start creating your amazing blog posts</h5>
            <p className="card-text">
              You can create, edit, and manage your posts easily using our simple
              interface.
            </p>
            <Link to="/create" className="btn grade-btn1 border-none text-white">
              Create New Post
            </Link>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
