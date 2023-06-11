import React from 'react'
import './about.css'
import ME from '../../assets/PP.jpg'
import {FiAward} from 'react-icons/fi'
import {MdGpsFixed} from 'react-icons/md'
import {BiShoppingBag} from 'react-icons/bi'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="me" />

          </div>

        </div>

        <div className='about_content'>

          <div className='about_cards'>
            <article className='about_card'>
              <FiAward className='about_icon' />
              <h5>Experience</h5>
              <small>Loreeem</small>
            </article>

      
            <article className='about_card'>
              <MdGpsFixed className='about_icon' />
              <h5>Skill</h5>
              <small>HTML, CSS, JavaScript, ReactJS</small>
            </article>


            <article className='about_card'>
              <BiShoppingBag className='about_icon' />
              <h5>Project</h5>
              <small>Loreem</small>
            </article>

          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur natus soluta illo iusto itaque! Dolor eos saepe molestias iste libero a ipsum, accusamus id aliquam ipsam corrupti, quam at nam!</p>

          <a href="#contact" className='btn btn-primary'>Talk about it</a>

        </div>
        
      </div>

    </section>
  )
}

export default about