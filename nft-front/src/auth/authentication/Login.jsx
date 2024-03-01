import React from "react";
import "./authentication.css";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <div>
        <div className="auth-head">
          Login <br /> <span>Login your Account</span>
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
                <label htmlFor="password">
                  Password
                  <input
                    required="required"
                    className="inputs"
                    type="text"
                    name="text"
                    class="inputs"
                    placeholder="Password"
                  />
                </label>
                <div>
                  <Link to="/forgot-password">forgot password?</Link>
                </div>
              </div>
              <div className="inputbox inputbox-full">
                <div>
                  <Link class="btn-wave" to="/dashboard">
                    <span class="wave-text">Login</span>
                    <div class="wave"></div>
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <div className="auth-bottom">
            Don't have an account? <Link to="/signup"> Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
