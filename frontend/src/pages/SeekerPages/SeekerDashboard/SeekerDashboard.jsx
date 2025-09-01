import React from 'react'
import './SeekerDashboard.css'
import Cards from './cards'

const SeekerDashboard = () => {
  return (
    <>
    <div className='main-title'>
      
         <h6>Smart Community Platform</h6>
         <h1>Connect, Share & <span>Thrive</span></h1>
         <p>Find the help you need from caring Community members. </p>
          <p>From jobs to food assistance, we've got you covered </p>
    </div>

    <div className='search-bar'>
      <div className='search-input'>
           <img src="\src\assets\search.png" alt="" />
           <input type="text" placeholder='What do you need help with?' />
      </div>
       
      <img src="\src\assets\filter.png" alt="" />
      
          <select id="category" >
            <option value=""selected>All Category</option>
            <option value="1">Jobs & Employment</option>
            <option value="2">Food & Nutrition</option>
            <option value="3">Books & Education</option>
            <option value="4">Blood Donation</option>
            <option value="5">Local Workers</option>

          </select>
    

      <button type='submit'>Search</button>

    </div>

    <div className='analytic'>
        <div>
          <h1 className='p1'>500+</h1>
          <p>Active Members</p>
        </div>

        <div>
          <h1 className='p2'>1.2k</h1>
          <p>Connection Made</p>
        </div>

        <div>
          <h1 className='p3'>98%</h1>
          <p>success Rate</p>
        </div>

        <div>
          <h1 className='p1'>24/7</h1>
          <p>Community Support</p>
        </div>
    </div>

    <div className='provide'>
             <h1>What Do You Need?</h1>
             <p>Browse through different categories to find opportunities to get the support you need.</p>
    </div>

    <div className='card-container'>
      <Cards img="\src\assets\job1.webp" title="Job Assistance" description="Get help with job applications and interviews." link="/jobs" />
      <Cards img="\src\assets\food.png" title="Food Assistance" description="Find local food banks and meal programs." link="/food" />
      <Cards img="\src\assets\blood.jpg" title="Blood Donation" description="Find blood donation centers and information." link="/blood" />
      <Cards img="\src\assets\Books.jpg" title="Book & Education" description="Find educational resources and support." link="/education" />
      <Cards img="\src\assets\education.jpg" title="Education Resources" description="Discover educational programs and scholarships." link="/education" />
      <Cards img="\src\assets\local worker.png" title="Local Worker" description="Find local workers and services." link="/localworker" />

    </div>

  
      <div className='footer-content'>
      <img src="\src\assets\logoman.png" alt="Smart Community Platform Logo" />
      <h1>Ready to Make a Difference?</h1>
      <p>Join Thousands of Community Members who are already making meaningful connections and a positive impact.</p>
      <button type='submit'>Get Started today</button>
     </div>

     <div className='footer'>
      <p>&copy; 2025 Community Connect. Building Stronger Communities Together.</p>
     </div>
     
    
      
    </>
  )
}

export default SeekerDashboard