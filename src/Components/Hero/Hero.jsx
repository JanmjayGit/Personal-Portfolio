import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import about_image from '../../assets/about_image.jpeg'
const Hero = () => {
  return (
    <div id='home' className='hero'>
       
        <img className='hero-image' src={about_image} alt="" />
        <h1><span>Hi I'm Janmjay Prajapati</span></h1>
        <p> I am a dedicated Software Developer with hands-on experience in building full-stack web applications using technologies
          like HTML, CSS, JavaScript, React.js, Java, Spring Boot, and MySQL. I specialize in creating responsive, user-friendly 
          frontends and robust, scalable backend systems. With a strong understanding of modern UI/UX principles and clean coding 
          practices, I aim to deliver high-performance applications that enhance user experience. My approach combines technical 
          excellence with continuous learning, enabling me to stay updated with evolving technologies.I thrive in collaborative 
          environments and enjoy turning ideas into real-world solutions that are efficient, maintainable,and aligned with business goals.
        </p>
        <div className='hero-action'>
            <a className="hero-resume" href="/Portfolio_resume.pdf" target="_blank" rel="noopener noreferrer" >
              My Resume
            </a> 
        </div>
    </div>
  )
}

export default Hero