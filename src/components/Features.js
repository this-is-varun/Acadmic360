import React from 'react'
import '../css/Features.css'

const Features = () => {
  return (
    <>
      <div className='backdrop_features'>
       <div className='Feature_title'>
       <br />
       <br />
       <h1 ><b>Features</b></h1>
       
       </div>
        <div className='feather_box'>
        <h3>Attendance</h3>
          <p>Teachfer can mark the Attendance anytime during class on one click </p>
        <hr />
        </div>

        <div className='feather_box'>
          <h3>Fee record</h3>
          <p>Teacher can submit fees by cash or online and mark it paid easly</p>
          <hr />
        </div>

        <div className='feather_box'>
          
          <h3>Notice Board</h3>
          <p>Upcoming events like test , exam , holidays can be displayed on Notice baord</p>
          <hr />
        </div>

        <div className='feather_box'>
          <h3>Parenting</h3>
          <p>Parent will have access to check the attandance of the student</p>
          <hr />
        </div>
              
      </div>
    </>
  )
}

export default Features
