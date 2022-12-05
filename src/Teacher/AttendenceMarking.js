import React from 'react'
import { useState } from 'react'
import studentData from "../student.json"

const AttendenceMarking = () => {
 
    // const myStudents = studentData.filter(myStudent => {
    //     return myStudent.Teacher == 'amit';
    //   });

    const [student,setStudent] = useState([]);
    
    const handleChange = (selectedStudent)=>{
      if(selectedStudent){
        setStudent((student) => [...student, selectedStudent]);
      }
    }

   const submitData =()=>{
     
   }



    console.log(student);
      

    
  return (
    <>
        {
          studentData.map((std)=>{
                return(
                    <>

                    <form action="">
                    <h1> </h1>
                    <label htmlFor="">{ std.studentName }</label>
                    <input type="checkbox" name={std.studentName}  value={std} onChange={()=>handleChange(std)} />
                    <br />
                     </form>
                     
                    </>
                 )
            })}
            <button onClick={submitData}>submit today's attendance</button>
      
    </>
  )
}

export default AttendenceMarking