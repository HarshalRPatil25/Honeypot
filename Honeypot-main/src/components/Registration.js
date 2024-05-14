// import "../images/image1.jpg";
import React from "react";
import {Link} from "react-router-dom";

function Registration() {
  //   const image = import("./image1.jpg");
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        {/* <img src={image} alt="" /> */}

        <form action="" method="POST">
          <div className="formbold-form-title">
            <h2 className="">Register Now</h2>
          </div>

          <div className="formbold-input-flex">
            <div>
              <label for="firstname" className="formbold-form-label">
                First name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="formbold-form-input"
              />
            </div>
            <div>
              <label for="lastname" className="formbold-form-label">
                {" "}
                Last name{" "}
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="formbold-form-input"
              />
            </div>
          </div>

          <div className="formbold-input-flex">
            <div>
              <label for="email" className="formbold-form-label">
                {" "}
                Email Address{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="formbold-form-input"
              />
            </div>
            <div>
              <label for="state" className="formbold-form-label">
                {" "}
                Phone number{" "}
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className="formbold-form-input"
              />
            </div>
          </div>

          {/* <div className="formbold-input-flex">
            
            <div>
              <label for="country" className="formbold-form-label">
                {" "}
                IMAP Server{" "}
              </label>
              <input
                type="text"
                name="country"
                id="country"
                className="formbold-form-input"
              />
            </div>
          </div> */}

          <div className="formbold-mb-3">
            <label for="purpose" className="formbold-form-label">
              Purpose of using Honeypot
            </label>
            <select name="purpose" id="purpose" className="formbold-form-input">
              <option value="">Select a purpose</option>
              <option value="Option 1">Securing Mobile Data</option>
              <option value="Option 2">Securing Website Data</option>
              <option value="Option 3">Securing Organization Data</option>
              <option value="Option 4">Securing Personal Data</option>
            </select>
          </div>

          <div className="formbold-mb-3">
            <label for="address" className="formbold-form-label">
              Username
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
              Set Account Password
            </label>
            <input
              type="password"
              name="address"
              id="address"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-3">
            <label for="address2" className="formbold-form-label">
              Confirm Account Password
            </label>
            <input
              type="password"
              name="address2"
              id="address2"
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-checkbox-wrapper">
            <label for="supportCheckbox" className="formbold-checkbox-label">
              <div className="formbold-relative">
                <input
                  type="checkbox"
                  id="supportCheckbox"
                  className="formbold-input-checkbox"
                />
                <div className="formbold-checkbox-inner">
                  <span className="formbold-opacity-0">
                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      className="formbold-stroke-current"
                    >
                      <path
                        d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                        stroke-width="0.4"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              I agree to the defined terms, conditions, and policies
            </label>
          </div>

          <Link to="/login"><button className="formbold-btn">Register Now</button></Link>
        </form>
      </div>
    </div>
  );
}

export default Registration;
