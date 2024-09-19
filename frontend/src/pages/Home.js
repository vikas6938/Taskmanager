import React from 'react';
import './Home.css'; // Import custom CSS for additional styling
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="home-container d-flex justify-content-center align-items-center">
      <div className="text-center">
        
        <h1 className="display-3 text-white">Welcome to the Home Page</h1>
        <button className="btn btn-primary btn-lg mt-3">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
