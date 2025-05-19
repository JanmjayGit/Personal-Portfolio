import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img className='hero-image' src={profile_img} alt="" />
        <h1><span>Hi I'm Janmjay Prajapati</span></h1>
        <p>Frontend Developer skilled in React, JavaScript, and modern UI design principles. Committed to building fast, responsive, and user-centric web applications with clean, maintainable code.</p>
        <div className='hero-action'>
            <a className="hero-resume" href="/Janmjay_Resume.pdf" target="_blank" rel="noopener noreferrer" >
              My Resume
            </a> 
        </div>
    </div>
  )
}

export default Hero