import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  return (
    <>
    <br />
    <br />
     <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Acadmic360.com 
            ( Manage and Track your Students Acadmic record ), is an initiative  to help the teacher and parents to trak student performance Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, nobis nihil. Laboriosam voluptatem, ex consequatur dolorem cum recusandae amet cupiditate molestias veritatis earum dicta pariatur rerum iste nihil alias incidunt!</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="#">Notice</a></li>
              <li><a href="#">progess</a></li>
              <li><a href="#">team</a></li>
              <li><a href="#">Register</a></li>
          
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Privacy Policy</a></li>
             </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="#"> Acadmic360</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa-brands fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa-brands fa-instagram"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa-brands fa-twitter"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa-brands fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </>
  )
}

export default Footer
