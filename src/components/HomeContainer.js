import React from 'react'
import '../css/HomeContainer.css'
import Welcome from "./Welcome"
import UserType from './UserType'
import Features from './Features'
import Team from './Team'
import Footer from './Footer'

const HomeContainer = () => {
  return (
    <>
      <div className='backdrop_homecontainer'>
       <div className='main_home'>
        
        <Welcome/>
        <UserType/>
        <Features/>
        <Team/>
        <Footer/>
       </div>
      </div>
      
    </>
  )
}

export default HomeContainer
