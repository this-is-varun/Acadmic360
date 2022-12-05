import React from 'react'
import '../css/studentRegistration.css'
import { useState } from 'react'
 


const StudentRegistration = () => {


  const [user, setUser] = useState({
    name: "",  email: "", password: "", dob:"" ,gender:"",roll:"", division:"",subjects :"", phone: ""});

let name, value;


  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
     setUser({...user, [name]:value});
}
console.log(user);


    
  const PostData = async (e) => {
    e.preventDefault();

    const {name,  email, password, dob,gender,roll, division,subjects, phone} = user;

    const res = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,  email, password, dob,gender,roll, division,subjects, phone
        })
    });

    const data = await res.json();

    // I need to change the data to res 
    if (data.status === 422 || !data) {
        window.alert("INvalid Registration");
        console.log("INvalid Registration");
    } else {
         window.alert(" Registration Successfull");
        console.log("Successfull Registration");

        
    }
}





  return (
    <>
       <form>
       <div className='backdrop_student_register'> 
        <div class="container_student_register">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        
           <label><b>Full Name</b></label>
           <input type="text" name="name" placeholder="Enter Username" onChange={handleInputs} required/>
<br />
          <label><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email"  onChange={handleInputs} required/>
<br />    
          <label><b>Create password</b></label>
          <input type="password" placeholder="Enter Password" name="password"  onChange={handleInputs} required/>
<br />
          {/* <select name="role" onChange={handleInputs} required >
            <option value="">Role</option>
            <option value="Student">Student</option>
            <option value="Student">Student</option>
           </select>
<br /> */}
          <label><b>Date of Birth</b></label>
          <input type="date" placeholder="Enter Date of Birth" name="dob"  onChange={handleInputs} required/>
<br />
          <select name="gender" onChange={handleInputs} required >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
           </select> 
<br />
           <label><b>Enrollment number</b></label>
           <input type="number" placeholder="Enter Enrollment number" name="roll"  onChange={handleInputs} required/>
<br />
           <select name="division" onChange={handleInputs} required >
            <option value="">Class</option>
            <option value="9th">IX</option>
            <option value="10th">X</option>
            <option value="11th">XI</option>
            <option value="12th">XII</option>
           </select> 
<br />
            <label><b>Phone Number</b></label>
            <input type="phone" name="phone" placeholder="812345678"  onChange={handleInputs} required/>
           
<br />
           <select name="subjects" onChange={handleInputs} required >
            <option value="">Subjects</option>
            <option value="Math">Math</option>
           </select>            
           
           <p>already hava an account  <a href="/studentlogin"  >Sign in </a>.</p>
      
          <div class="clearfix">
            <button type="submit" class="btn"   value="register" onClick={PostData}>Sign Up</button>
          </div>
        </div>
        </div>
      </form>

   
    </>
  )
}

export default StudentRegistration
