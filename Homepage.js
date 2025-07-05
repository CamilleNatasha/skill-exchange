//Landing page for the application
// This file contains the main component for the homepage of the application.
// It includes links to the login and registration pages.

import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the Application</h1>
      <p>This is the landing page of our application.</p>
      <Link to="/login" className="button">Login</Link>
      <Link to="/register" className="button">Register</Link>
    </div>
  );
};
