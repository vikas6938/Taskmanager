import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS for styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-header">Task Manager</h2>
      <ul className="sidebar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
