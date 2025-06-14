import React from 'react'
import './MyWork.css'
import theme_pattern_teal from '../../assets/theme_pattern_teal.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Projects</h1>
            
            <img src={theme_pattern_teal} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index) => {
                
                return (
                    <a
                        key={index}
                        href={work.w_link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={work.w_img} alt={work.w_name} />
                    </a>
                );
            })}
        </div>
        <div className="mywork-showmore">
            <p>Showmore</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork