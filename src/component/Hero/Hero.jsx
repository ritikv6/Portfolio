import React from 'react'
import './Hero.css'
import profile_img from '../../assets/PHOTO.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="Hero Background" />
        <h1><span>I'm Ritik Verma,</span> new learning devloper</h1>
        <p>I'm a passionate developer with a keen interest in web development and design. I love creating beautiful and functional websites that provide great user experiences.</p>
        <div className="hero-action">
            <div className="hero-connect button"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
            <div className="hero-resume button">My resume</div>
        </div>
    </div>
  )
}

export default Hero