import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

function EntryPage() {
  return (
    <div className="App">
      <div className="App-main">
        <h1>Welcome to Honeypot</h1>
        <div className="App-para">
          <p>
            Explore a world of cybersecurity and digital defense with Honeypot.
            We're here to keep your digital assets safe and secure. Discover the
            latest trends, best practices, and expert insights in the world of
            online security.
          </p>
        </div>
        <div className="App-rl">
          <div className="registration-section">
            <Link to="/register">
              <button className="formbold-btn-d">Register</button>
            </Link>
          </div>
          <div className="login-section">
            <Link to="/login">
              <button className="formbold-btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntryPage;
