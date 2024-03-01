import React from "react";
import "./authentication.css";
import { Form, Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth">
      <div>
        <div className="auth-head">
          Login <br /> <span>Create a new Account</span>
        </div>
        <div className="auth-form">
          <form>
            <div className="create-form">
              <div className="inputbox inputbox-full">
                <label htmlFor="username">
                  Username
                  <input
                    required="required"
                    className="inputs"
                    type="text"
                    name="text"
                    class="inputs"
                    placeholder="Username"
                  />
                </label>
              </div>

              <div className="inputbox inputbox-full">
                <label htmlFor="username">
                  Email Address
                  <input
                    required="required"
                    className="inputs"
                    type="email"
                    name="email"
                    class="inputs"
                    placeholder="Enter your email address"
                  />
                </label>
              </div>

              <div className="inputbox inputbox-full">
                <label htmlFor="password">
                  Password
                  <input
                    required="required"
                    className="inputs"
                    type="password"
                    name="text"
                    class="inputs"
                    placeholder="Enter your Password"
                  />
                </label>
              </div>

              <div className="inputbox inputbox-full">
                <label htmlFor="password">
                  Confirm Password
                  <input
                    required="required"
                    className="inputs"
                    type="password"
                    name="text"
                    class="inputs"
                    placeholder="Enter your Password"
                  />
                </label>
              </div>
              <span>
                <label htmlFor="agree">
                  <input type="checkbox" /> I agree to
                  <Link to="/terms">terms</Link> and
                  <Link to="policy"> Policy.</Link>
                </label>
              </span>
              <div className="inputbox inputbox-full">
                <div>
                  <Link class="btn-wave">
                    <span class="wave-text">Sign Up</span>
                    <div class="wave"></div>
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <div className="auth-bottom">
            Already an account? <Link to="/Login"> Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
