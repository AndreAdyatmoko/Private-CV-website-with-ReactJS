import React from 'react'
import './portfolio.css'

const Project = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className='container portofolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'></div>
          <h3>Item 1</h3>
          {/* <a href="https://github.com" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary'>Live Demo</a> */}
<br /><br /><br /><br /> <br /> <br />
          <h3>Item 2</h3>
 <br /><br /><br /><br /> <br /><br />
          <h3>Item 3</h3>
          <br /><br /><br /><br /> <br /> <br />
          <h3>Item 4</h3>

        </article>
      </div>
    </section>
  )
}

export default Project