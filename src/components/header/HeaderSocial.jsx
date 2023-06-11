import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'


const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href="https://www.linkedin.com/in/andre-adyatmoko-69a856177/" target="_blank"><BsLinkedin/></a>

        <a href="https://github.com/AndreAdyatmoko" target="_blank"><AiOutlineGithub/></a>

        <a href="https://www.instagram.com/andreadyatmoko/" target="_blank"><GrInstagram/></a>
    </div>
  )
}

export default HeaderSocial