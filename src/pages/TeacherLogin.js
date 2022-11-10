import React from 'react'

const TeacherLogin = () => {
  return (
    <>
      <div className='body'>

<div class="container">

   <div class='col-md-9 card mx-auto d-flex flex-row px-0'>
     
   <div class="img-left d-md-flex d-none"></div>
   
     <div class="card-body d-flex flex-column justify-content-center">
       <h4 class="title text-center mt-4 pb-3">Teacher Login Panel</h4>
   <form class='col-sm-10 col-12 mx-auto'>
         <div class='form-group '>
           <input type="email" class="form-control " placeholder='email'/>
         </div>
          <div class='form-group py-3 ' >
           <input type="password" class="form-control" placeholder='***'/>
         </div>
          <div class=''>
           <input type="button" class="btn  btn-outline-primary d-block w-100 " value='Login'/>
         </div>
  </form>
       </div>

   </div>
   
   
 </div>
 </div>
    </>
  )
}

export default TeacherLogin
