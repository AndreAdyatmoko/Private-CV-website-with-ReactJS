import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineFacebook} from 'react-icons/ai'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container conctact_container'>
        <div className="contact_options">
          <article className ="contact_option">
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>andreadyatmoko@gmail.com</h5>
            <a href="mailto:andreadyatmoko@gmail.com" target="_blank">Send a message</a>
          </article>
          <br />
          <br />
          <article className ="contact_option">
            <AiOutlineFacebook className='contact_option-icon'/>
            <h4>Facebook</h4>
            <h5>Andre Adyatmoko</h5>
            <a href="https://web.facebook.com/andre.adyatmoko23" target="_blank">Send a message</a>
          </article>
        </div>

      </div>
    </section>
  )
}

export default Contact