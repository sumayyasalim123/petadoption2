import React from 'react';
import Navbar from './Navbar';
import './App.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar />

      {/* Background container */}
      <div className="background-container">
        <h2>Pets are not our whole life, but they make our life whole.</h2>
        {/* Background image */}
      </div>

      {/* Content container */}
      <div className="content">
        <h1>Welcome to My App</h1>
        <p>This is some content below the background image.</p>
        {/* Other content... */}
      </div>
    </div>
  );
}

export default Home;
