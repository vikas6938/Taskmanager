import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Make sure you have a CSS file for styling if needed

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Task Manager</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </aside>
    
  );
};

export default Sidebar;
