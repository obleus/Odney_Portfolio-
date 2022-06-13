import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Screen Shot 2022-06-04 at 10.02.04 PM.png'
import IMG2 from '../../assets/Screen Shot 2022-06-04 at 9.59.36 PM.png'
import IMG3 from '../../assets/Screen Shot 2022-06-04 at 10.03.02 PM.png'
import IMG4 from '../../assets/Screen Shot 2022-06-04 at 10.06.55 PM.png'
import IMG5 from '../../assets/Screen Shot 2022-06-11 at 3.02.26 AM.png'
import IMG6 from '../../assets/Screen Shot 2022-06-11 at 3.03.35 AM.png'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Treker',
    github: 'https://github.com/obleus/treker',
    demo: 'https://obleus.github.io/treker/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'VinTek',
    github: 'https://github.com/obleus/VinTek' ,
    demo: 'https://floating-chamber-49203.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Weather Dashboard',
    github: 'https://github.com/obleus/weather_forcast' ,
    demo: 'https://obleus.github.io/weather_forcast/' 
  },
  {
    id: 4,
    image: IMG4,
    title: 'JavaScript Quiz',
    github: 'https://github.com/obleus/Java_Quiz',
    demo: 'https://obleus.github.io/Java_Quiz/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Express Note Taker',
    github: 'https://github.com/obleus/Express_Note_Taker',
    demo: 'https://calm-eyrie-59337.herokuapp.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'WorkDay Scheduler',
    github: 'https://github.com/obleus/DayToDay_Scheduler',
    demo: 'https://obleus.github.io/DayToDay_Scheduler/' 
  },

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper className="container portfolio_container"
                          // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <SwiperSlide key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
           </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Portfolio