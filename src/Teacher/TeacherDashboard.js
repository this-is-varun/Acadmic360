import React from 'react'
import '../css/TeacherDashboard.css'
 
const TeacherDashboard = () => {
  return (
    <>
      <div className='Tdashboard_backgrond'>
       
       <div className='Tdashboard_center'>
          
          <div className='Tdashboard_welcome'>

         <h1>Welcome to Acadmic 360 </h1>
         <h3>( Teachers Section )</h3>
         <p>complete solution for your classes</p>

          </div>

        <div className='Teacher_service'>


              <div className='service'>
              <a href="/fee">
              <h4>Fee Status</h4>

              </a>
               </div>
              <div className='service'>
                  <h4>Attendance</h4>
              </div>
              <div className='service'>
                  <h4>option 3</h4>
              </div>
              <div className='service'>
              <h4>Option 4</h4>
              </div>
              <div className='service'>
               <h4>OPtion 5</h4>
               </div>


        </div>

       </div>

      </div>
    </>
  )
}

export default TeacherDashboard
