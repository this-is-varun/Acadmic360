import React from 'react'
import '../css/UserType.css'

const UserType = () => {
  return (
    <>
      <div className='backdrop_usertype'>
          <div className='center'>
              <div className='student'>
              <i class="fa-solid fa-user-large"></i>
              <h3>I'm Student</h3> 
              </div>
              <div className='teacher'> 
              <i class="fa-sharp fa-solid fa-person-chalkboard"></i>
              <h3>I'm Teacher</h3>
              </div>
          </div>
      </div>
    </>
  )
}

export default UserType
