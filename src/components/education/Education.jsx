import React from 'react'
import './education.css'

const Education = () => {
  return (
    <section id="education">

      <br /> <br />
      <br /> <br />
      <br /> <br /> 
      <h5>Where do I study?</h5>
      <h2>My educational history</h2>

      <div className="container education_container">
        <article className='education'>
          <dir className='education_head'>
            <h3>Akademi Keperawatan Ngesti Waluyo</h3>
         </dir>
         <p className='para'>I pursued a formal education in Nursing, completing my D3 degree within a span of 3 years.</p>
        <div>
         <h3>Purwadhika Digital School</h3>
         <p className='para'>"I have completed a 3-month bootcamp at Purwadhika Digital School. Throughout the bootcamp, I extensively learned about web development, covering both front-end and back-end aspects. During this process, I have broadened my understanding of web technologies and honed my skills in building comprehensive applications."





</p>
         </div>

        </article>
      </div>


    </section>
  )
}

export default Education