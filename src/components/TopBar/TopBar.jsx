import React from 'react'
import './components.css'
import profileImage from '../../assets/profile.png'
function TopBar() {

  // Create a new Date object
  const today = new Date();

  // Options for formatting the date
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

  // Format the date using toLocaleDateString with the specified options
  const formattedDate = today.toLocaleDateString('en-US', options);
  return (
    <div className="top-bar">
        <div className="profile">
            <img src={profileImage} alt=''/>
        </div>
        <div className='profile-text'>
            <div className='name'>Hi, Duc</div>
            <div className='date'>{formattedDate}</div>
        </div>
    </div>
  )
}

export default TopBar