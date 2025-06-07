import React from 'react'
import './Footer.css'
import { FaLinkedin } from 'react-icons/fa';

import leetcode_icon from '../../assets/leetcode_icon.svg'
import linkedin_icon from '../../assets/linkedin_icon.svg'
import github_icon from '../../assets/github_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Janmjay Prajapati</h1>
                <p>Software Developer | India</p>
            </div>
            

            <div className="footer-top-right">
                <div className="footer-social-links">
                    <a href="https://github.com/JanmjayGit" target="_blank" rel="noopener noreferrer" className="social-link">
                        <span>GitHub</span>
                        <img src={github_icon} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/janmjay-prajapati-b7b96524a/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <span>LinkedIn</span>
                        
                        <FaLinkedin color='#0077B5 ' size={24}/>
                    </a>
                    <a href="https://leetcode.com/u/Janmjay_Prajapati/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <span>LeetCode</span>
                        <img src={leetcode_icon} alt="LeetCode" />
                    </a>
                </div>
            </div>
        </div>

        <hr />

        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2025 Janmjay Prajapati, All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer