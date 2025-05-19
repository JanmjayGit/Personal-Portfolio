import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaDatabase, FaTree } from 'react-icons/fa';
import { SiJavascript, SiCplusplus } from 'react-icons/si';

import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

const About = () => {
  return (
    <div id='about' className='about'>
       <div className='about-title'>
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
       </div>
       <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Creative front-end developer passionate about building responsive, user-friendly interfaces using HTML, CSS, JavaScript, React Js, and modern frameworks</p>
                    <p>Passionate front-end developer driven by design and code, crafting seamless, engaging user experiences with modern tools and technologies</p>
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