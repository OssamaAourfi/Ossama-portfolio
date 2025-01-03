import React from 'react'
import './Hero.css';
import profileImg from "../../assets/ossama-modified.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
      <div id='home' className='hero'>
          <img src={profileImg} alt='' />
          <h1><span>I'm Ossama Aourfi,</span> Full Stack Developer.</h1>
          <p>I am Full Stack Developer from Morocco I have 25 years old.</p>
          <div className='hero-action'>
              <div className="hero-connect">
                 <AnchorLink className="anchor-link" offset={50} href='#contact'> Connect With Me</AnchorLink>
              </div>
              <div className="hero-resume">My resume</div>
          </div>
    </div>
  )
}

export default Hero