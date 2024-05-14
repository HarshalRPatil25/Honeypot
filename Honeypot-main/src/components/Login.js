import React from 'react'
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        {/* <img src={image} alt="" /> */}

        <form action="" method="POST">
          <div className="formbold-form-title">
            <h2 className="">Login</h2>
          </div>

          <div className="formbold-mb-3">
            <label for="address" className="formbold-form-label">
              Username or Email Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-3">
            <label for="address" className="formbold-form-label">
              Password
            </label>
            <input
              type="password"
              name="address"
              id="address"
              className="formbold-form-input"
            />
          </div>

          <Link to="/dashboard"><button className="formbold-btn">Login Now</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Login
