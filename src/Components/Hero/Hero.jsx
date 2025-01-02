import React from 'react'
import './Hero.css';
import profileImg from "../../assets/ossama-modified.png"
const Hero = () => {
  return (
      <div className='hero'>
          <img src={profileImg} alt='' />
          <h1><span>I'm Ossama Aourfi,</span> Full Stack Developer.</h1>
          <p>I am Full Stack Developer from Morocco I have 25 years old.</p>
          <div className='hero-action'>
              <div className="hero-connect">
                  Connect With Me
              </div>
              <div className="hero-resume">My resume</div>
          </div>
    </div>
  )
}

export default Hero