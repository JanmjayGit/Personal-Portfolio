import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaDatabase, FaTree } from 'react-icons/fa';
import { SiJavascript, SiCplusplus } from 'react-icons/si';

import React from 'react'
import './About.css'
import theme_pattern_teal from '../../assets/theme_pattern_teal.svg'

import my_image from '../../assets/my_image.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
       <div className='about-title'>
            <h1>About me</h1>
            <img src={theme_pattern_teal} alt="" />
       </div>
       <div className="about-sections">
            <div className="about-left">
                <img src={my_image} alt="" /> 
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Passionate Software Developer skilled in crafting responsive, user-centric interfaces using HTML, CSS, JavaScript, 
                    and React.js, while also building robust backend systems with Spring Boot, and MySQL. Driven by both design and 
                    logic, I enjoy creating seamless, high-performance applications that balance modern aesthetics with clean, maintainable code. 
                    With a strong understanding of full-stack development and a focus on user experience, I strive to deliver solutions 
                    that are not only functional but engaging and scalable.
                    </p>
                    
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p className='skills'><FaHtml5 size="20px" color="#E34F26"/>HTML</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p className='skills'><FaCss3Alt size="20px" color="#1572B6"/>CSS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p className='skills'><FaReact size="20px" color="#61DAFB" />React</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p className='skills'><SiJavascript size="20px" color="#F7DF1E" />JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p className='skills'><FaJava size="20px" color="#007396" />Java</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p className='skills'><FaTree size="20px" color="#087000" />DSA</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p className='skills'><SiCplusplus size="20px" color="#00599C" /> C++</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p className='skills'><FaDatabase size="20px" color="#4DB33D" />MySQL</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
       </div>
       <div className="about-achievments">
            <div className="about-achievment">
                <h1>0</h1>
                <p>Years of Experience</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>5+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1>5+</h1>
                <p>Certificates</p>
            </div>
       </div>
    </div>
  )
}

export default About