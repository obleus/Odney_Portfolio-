import React from 'react'
import './reference.css'
import AVTR1 from '../../assets/IMG_kaila.jpg'
import AVTR2 from '../../assets/IMG_marlow.jpg'
// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
    {
        avatar: AVTR1,
        name: 'Kaila Williams',
        review: 'TD Bank Assistant Manager',
        phone: '(561)-502-8862'
    },
    {
        avatar: AVTR2,
        name: 'Marlow Charite',
        review: 'Senior Mobile App Engineer At Modernized Medicine',
        phone: '(561)-853-8005'
    },
    
]
const Reference = () => {
  return (
    <section id='reference'>
        <h5>Personal & Professional</h5>
        <h2>Reference</h2>

        <Swiper className="container testimonials_container"
                  // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
        >
            {
                data.map(({avatar, name, review, phone}, index) =>{
                    return (
                        <SwiperSlide key={index} className='testimonial'>
                        <div className="client_avatar">
                            <img src={avatar} alt={name} />
                        </div>
                    <h5 className='client_name'>{name}</h5>
                    <small className='client_review'>{review}</small>
                    <h5 className='client_phone'>{phone}</h5>
                   
                    </SwiperSlide>
        
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Reference