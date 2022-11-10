import React from 'react'
import '../css/studentRegistration.css'
 


const StudentRegistration = () => {
  return (
    <>
       <form>
       <div className='backdrop_student_register'> 
       
        <div class="container_student_register">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <label for="email"><b>Student Full Name</b></label>
          
        
       <input type="text" name="username" placeholder="Enter Username" required/>
          <br />
          <select name="phoneCode" required>
            <option selected hidden value="">Class</option>
            <option value="66">IX</option>
            <option value="66">X</option>
            <option value="66">XI</option>
            <option value="66">XII</option>
           </select>
        <br />
          <label for="email"><b>Email</b></label>

          <input type="text" placeholder="Enter Email" name="email" required/>
          
          <label for="psw"><b>Create password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>
      
                  <label for="email"><b>Phone Number</b></label>
            <br/>
           <select name="phoneCode" required>
            <option selected hidden value="">Code</option>
            <option value="91">+91</option>
            <option value="66">+99</option>
            <option value="66">+90</option>
            <option value="66">+66</option>
           </select>
           <input type="phone" name="phone" placeholder="812345678" required/>
      
          <p>already hava an account  <a href="/studentlogin"  >Sign in </a>.</p>
      
          <div class="clearfix">
      
            <button type="submit" class="btn">Sign Up</button>
          </div>
        </div>
        </div>
      </form>

   
    </>
  )
}

export default StudentRegistration
