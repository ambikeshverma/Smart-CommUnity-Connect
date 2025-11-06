import React from "react";
import "./SeekerDashboard.css";
import Cards from "./Cards";

const SeekerDashboard = () => {
  return (
    <>
      <div className="main-title1">
        <h6>Smart Community Platform</h6>
        <h1 className="mainHead">
          Connect, Share & <span>Thrive</span>
        </h1>
        <p>Find the help you need from caring Community members. </p>
        <p>From jobs to food assistance, we've got you covered </p>
      </div>

      <div className="search-bar">
        <div className="search-input">
          <img src="\assets\search.png" alt="" />
          <input type="text" placeholder="What do you need help with?" />
        </div>

        <img className="filter1" src="\assets\filter.png" alt="" />

        <select id="category" defaultValue="">
          <option value="">
            All Category
          </option>
          <option value="1">Jobs & Employment</option>
          <option value="2">Food & Nutrition</option>
          <option value="3">Books & Education</option>
          <option value="4">Blood Donation</option>
          <option value="5">Local Workers</option>
        </select>

        <button type="submit">Search</button>
      </div>

      <div className="analytic">
        <div>
          <h1 className="p1">500+</h1>
          <p className="t1">Active Members</p>
        </div>

        <div>
          <h1 className="p2">1.2k</h1>
          <p className="t1">Connection Made</p>
        </div>

        <div>
          <h1 className="p3">98%</h1>
          <p className="t1">success Rate</p>
        </div>

        <div>
          <h1 className="p1">24/7</h1>
          <p className="t1">Community Support</p>
        </div>
      </div>

      <div className="provide">
        <h1>What Do You Need?</h1>
        <p>
          Browse through different categories to find opportunities to get the
          support you need.
        </p>
      </div>

      <div className="card-container">
        <Cards
          img="\assets\job1.webp"
          title="Job Assistance"
          description="Get help with job applications and interviews."
          catagory="Job Assistance"
        />
        <Cards
          img="\assets\food.png"
          title="Food Assistance"
          description="Find local food banks and meal programs."
          catagory="Food & Nutrition"
        />
        <Cards
          img="\assets\blood.jpg"
          title="Blood Donation"
          description="Find blood donation centers and information."
          catagory="Blood donation"
        />
        <Cards
          img="\assets\books.jpg"
          title="Book & Education"
          description="Find educational resources and support."
          catagory="Book donation"
        />
        <Cards
          img="\assets\education.jpg"
          title="Education Resources"
          description="Discover educational programs and scholarships."
          catagory="Education & Skill Development"
        />
        <Cards
          img="\assets\local worker.png"
          title="Local Worker"
          description="Find local workers and services."
          catagory="Local Workers"
        />
        <Cards
          img="\assets\community.jpg"
          title="Community Services"
          description="Access various community services and support."
          catagory="Community Services"
        />
        <Cards
          img="\assets\book donation.jpg"
          title="Book Donation"
          description="Donate or receive books for education."
          catagory="Book donation"
        />
        <Cards
          img="\assets\transfer location.jpg"
          title="mutual location transfer"
          description=" Get help with moving and transportation."
          catagory="Mutual Location Transfer"
        />
      </div>

      <div className="footer-content">
        <img
          src="\assets\logoman.png"
          alt="Smart Community Platform Logo"
        />
        <h1>Ready to Make a Difference?</h1>
        <p className="footer-p">
          Join Thousands of Community Members who are already making meaningful
          connections and a positive impact.
        </p>
        <button type="submit">Get Started today</button>
      </div>

      <div className="footer">
        <p>
          &copy; 2025 Community Connect. Building Stronger Communities Together.
        </p>
      </div>
    </>
  );
};

export default SeekerDashboard;
