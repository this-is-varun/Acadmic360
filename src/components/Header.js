import React from 'react'
import { useState } from 'react'
import '../css/Header.css'

const Header = () => {

 
  
  return (
    <>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Acadmic 360</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li> 

        <li class="nav-item">
        <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Ragister
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/studentregistration">Ragister as Student</a></li>
    <li><a class="dropdown-item" href="/teacherregistration">Ragister as Teacher</a></li>
   </ul>
</div>        
</li>
       
         <li class="nav-item">
         <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
login
  </button>
  <ul class="dropdown-menu">
     <li><a class="dropdown-item" href="/studentlogin">Login as Student</a></li>
    <li><a class="dropdown-item" href="/teacherlogin">Login as Teacher</a></li>
  </ul>
</div>        </li>
        
      
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>    </>
  )
}

export default Header
