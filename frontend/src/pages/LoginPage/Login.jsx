import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import '../RegistrationPage/Registration.css'
import {toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const reset = ()=>{
    setEmail("")
    setPassword("");
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/login`,
        {
          email,
          password,
        }
      );

      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Show success message briefly before redirecting
      toast.success("Login Successfully")
      navigate("/");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };
  return (
    <>
      <div className="fullPage">
        <div className="regContainer">
          <div className="imageCont">
            <img src="/src/assets/Regis Logo2.jpeg" alt="" />
          </div>
          <div className="formCont">
            <form action="" onSubmit={handleLogin}>
              <h1>Sign in</h1>
              <div className="sign">Sign in with Open Account</div>
              <div className="google">
                <span className="google1">
                  <img src="/src/assets/Google icon.webp" width="20px" alt="" />
                  <h5>Google</h5>
                </span>
                <span className="google1">
                  <img src="/src/assets/Apple Icon.png" width="20px" alt="" />
                  <h5>Apple ID</h5>
                </span>
              </div>
              <div className="inputBox">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter your username"
                  required
                />
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <div className="buttons">
                  <button className="cancel" onClick={reset}>Reset</button>
                  <button className="post" type="submit" >Login</button>
                </div>
              </div>
              <p className="dont">
                Don't have an account?{" "}
                <Link to="/register" className="link">
                  Sign up here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
