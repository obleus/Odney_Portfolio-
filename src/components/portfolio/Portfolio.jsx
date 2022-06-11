import React from 'react'
import './porfolio.css'
import IMG1 from '../../assets/Screen Shot 2022-06-04 at 10.02.04 PM.png'
import IMG2 from '../../assets/Screen Shot 2022-06-04 at 9.59.36 PM.png'
import IMG3 from '../../assets/Screen Shot 2022-06-04 at 10.03.02 PM.png'
import IMG4 from '../../assets/Screen Shot 2022-06-04 at 10.06.55 PM.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt='' />
          </div>
          <h3>Treker</h3>
          <a href='https://github.com/obleus/treker' className='btn' target='_blank'>Github</a>
          <a href='https://obleus.github.io/treker/' className='btn btn-primary' target='_blank'>Live Demo</a>
       </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt='' />
          </div>
          <h3>VinTek</h3>
          <a href='https://github.com/obleus/VinTek' className='btn' target='_blank'>Github</a>
          <a href='https://floating-chamber-49203.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
       </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt='' />
          </div>
          <h3>Weather Dashboard</h3>
          <a href='https://github.com/obleus/weather_forcast' className='btn' target='_blank'>Github</a>
          <a href='https://obleus.github.io/weather_forcast/' className='btn btn-primary' target='_blank'>Live Demo</a>
       </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt='' />
          </div>
          <h3>JavaScript Quiz</h3>
          <a href='https://github.com/obleus/Java_Quiz' className='btn' target='_blank'>Github</a>
          <a href='https://obleus.github.io/Java_Quiz/' className='btn btn-primary' target='_blank'>Live Demo</a>
       </article>
      </div>
    </section>
  )
}

export default Portfolio