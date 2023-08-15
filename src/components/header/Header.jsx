import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import port from '../../assets/port.jpeg'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Andre Adyatmoko</h1>
        <h5 className='text-light'>Fullstack Web Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={port} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header