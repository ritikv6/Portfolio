import React from 'react'
import Navbar from './component/navbar/navbar.jsx'
import Hero from './component/Hero/Hero.jsx';
import About from './component/About/About.jsx';
import Services from './component/Services/Services.jsx';
import Mywork from './component/Mywork/Mywork.jsx';
import Contact from './component/Contact/Contact.jsx';
import Footer from './component/Footer/Footer.jsx';
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      
    </>
  )
}

export default Home;