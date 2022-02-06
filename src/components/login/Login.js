import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="continer">
        <form action="">
          <div className="links">
            <h3 className="title">sign in with</h3>
            <div className="buttons">
              <a href="#" className="btn">
                <i href="#" className="fab fa-google"></i>google
              </a>
              <a href="#" className="btn">
                <i href="#" className="fab fa-facebook-f"></i>facebook
              </a>
            </div>
          </div>

          <div className="input-box">
            <h1 class="title">or sign in with email</h1>
            <div className="input">
              <span className="far fa-envelope"></span>
              <input type="email" name="" placeholder="email" />
            </div>

            <div className="input">
              <span className="fas fa-lock"></span>
              <input type="password" name="" placeholder="password" />
              <span></span>
            </div>

            <div className="checkbox">
              <input type="checkbox" name="" id="remember" />
              <label htmlFor="remember">remember me</label>
            </div>

            <input type="submit" value="sign in" className="signInButton" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
