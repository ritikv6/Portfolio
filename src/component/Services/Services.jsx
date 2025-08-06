import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/main_logo.png'
const Services = () => {
    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
                <div className="service">
                    <h2>Web Development</h2>
                    <p>I create responsive and functional websites using the latest technologies.</p>
                </div>
                <div className="service">
                    <h2>UI/UX Design</h2>
                    <p>I design user-friendly interfaces that enhance user experience.</p>
                </div>
                <div className="service">
                    <h2>SEO Optimization</h2>
                    <p>I optimize websites to improve their visibility on search engines.</p>
                </div>
                <div className="service">
                    <h2>Content Creation</h2>
                    <p>I create engaging content that resonates with your audience.</p>
                </div>
                <div className="service">
                    <h2>Digital Marketing</h2>
                    <p>I help businesses grow their online presence through effective marketing strategies.</p>
                </div>
                <div className="service">
                    <h2>Consulting</h2>
                    <p>I provide expert advice to help you achieve your business goals.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;