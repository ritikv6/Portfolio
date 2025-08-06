import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/main_logo.png'
import work_img_1 from '../../assets/work_img_1.jpg'
import work_img_2 from '../../assets/work_img_2.jpg'
import work_img_3 from '../../assets/work_img_3.jpg'
import right_arrow from '../../assets/right_arrow.svg'
const Mywork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                <div className="mywork-item">
                    <h2>Project 1</h2>
                    <p>A responsive website built using React and CSS.</p>
                    <img src={work_img_1} alt="" />
                </div>
                <div className="mywork-item">
                    <h2>Project 2</h2>
                    <p>An e-commerce platform developed with Node.js and MongoDB.</p>
                    <img src={work_img_2} alt="" />
                </div>
                <div className="mywork-item">
                    <h2>Project 3</h2>
                    <p>A portfolio website showcasing my skills and projects.</p>
                    <img src={work_img_3} alt="" />
                </div>
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={right_arrow} alt="" />
            </div>
        </div>
    )
}

export default Mywork;