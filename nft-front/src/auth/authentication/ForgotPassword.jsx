import React from "react";
import "./authentication.css";
import { Form, Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="auth">
      <div>
        <div className="auth-head">
          Forgot Password? <br />
          <span>Enter your email to reset your password</span>
        </div>
        <div className="auth-form">
          <form>
            <div className="create-form">
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
                <div>
                  <Link class="btn-wave">
                    <span class="wave-text">Continue</span>
                    <div class="wave"></div>
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <div className="auth-bottom">
            Remember your password? <Link to="/login"> Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
