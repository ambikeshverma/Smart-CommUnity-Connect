import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, } from "react";
import {toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import "./Registration.css";
const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();


  const validateForm = () => {
    if (!name.trim()) {
      toast.error("Name is required");
      return false;
    }
    if (!email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    return true;
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    

    if (!validateForm()) {
      return;
    }


    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/register`,
        {
          name,
          email,
          password,
        }
      );

      const { _id, name: userName, email: userEmail } = response.data;

      toast.success(
        `Registration successful! Welcome, ${userName}! Username is ${userEmail}`
      );

      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
     
      navigate("/login")

    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
      toast.error(
        error.response?.data?.message || "Registration failed. Please try again."
      );
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
            <form action="" onSubmit={handleRegister}>
              <h1>Create Account</h1>
              <div className="sign">Sign up with Open Account</div>
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
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter your name"
                  required
                />
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter your email"
                  required
                />
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <label htmlFor="">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  required
                />
                <div className="buttons">
                  <button className="cancel" onClick={reset}>Reset</button>
                  <button className="post" type="submit">Register</button>
                </div>
              </div>
              <p className="dont"> Already have an account?{" "}
              <Link to="/login" className="link">
                Sign in here
              </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
