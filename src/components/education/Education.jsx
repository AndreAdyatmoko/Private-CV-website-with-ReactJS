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
         <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus quo quia quas quidem, velit maiores voluptatum qui iste laboriosam expedita? Possimus consequuntur debitis provident, sapiente sequi quaerat. Ipsum, consectetur!</p>
         </div>

        </article>
      </div>


    </section>
  )
}

export default Education