import React from 'react'
import './About.css'
import theme_pattern from '../../assets/main_logo.png'
import profile_img from '../../assets/PHOTO.jpg'
const About = () => {
    return (
            <div id='about' className='about'>
                <div className="about-title">
                    <h1>About Me</h1>
                    <img src={theme_pattern} alt="Theme Pattern" /> 
                </div>
                <div className='about-sections'>
                    <div className="about-left">
                        <img src={profile_img} alt="" />
                    </div>
                    <div className="about-right">
                        <div className='about-para'>

                            <p>Hello! I'm Ritik Verma, a passionate developer with a keen interest in web development and design. I love creating beautiful and functional websites that provide great user experiences. My journey in the tech world has been exciting, and I'm always eager to learn new technologies and improve my skills.</p>
                            <p>In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and staying updated with the latest trends in web development. I'm also an advocate for clean code and best practices in software development.</p>
                        </div>
                        <div className="about-skills">
                            <div className="about-skill"><p>HTML & CSS </p> <hr style={{ width: '40%' }} /></div>
                            <div className="about-skill"><p>React JS </p> <hr style={{ width: '10%' }} /></div>
                            <div className="about-skill"><p>JavaScript </p> <hr style={{ width: '20%' }} /></div>
                            <div className="about-skill"><p>Python </p> <hr style={{ width: '60%' }} /></div>

                        </div>

                    </div>
                </div>

                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>0+</h1>
                        <p>YEARS OF ACHIEVEMENT</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>0+</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>0+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                </div>
            </div>

    )
}

export default About