import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className=''>Andre Adyatmoko</a>
      

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    <div className="footer_copyright">
      <small>&copy; Andre Adyatmoko. All rights reserved.</small>
    </div>
    </footer>
  )
}

export default Footer