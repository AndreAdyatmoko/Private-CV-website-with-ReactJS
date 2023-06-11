import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {TbSchool} from 'react-icons/tb'
import {BsFillBookFill} from 'react-icons/bs'
import {MdCallEnd} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>

      <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>

      <a href="#education" onClick={() => setActiveNav('#education')}className={activeNav === '#education' ? 'active' : ''}><TbSchool/></a>

      <a href="#experience" onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><BsFillBookFill/></a>

      <a href="#contact" onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ''}><MdCallEnd/></a>
    </nav>
  )
}

export default Nav