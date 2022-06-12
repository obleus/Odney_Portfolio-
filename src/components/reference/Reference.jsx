import React from 'react'
import './reference.css'
import AVTR1 from '../../assets/IMG_kaila.jpg'
import AVTR2 from '../../assets/IMG_marlow.jpg'

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

        <div className="container testimonials_container">
            {
                data.map(({avatar, name, review, phone}, index) =>{
                    return (
                        <article key={index} className='testimonial'>
                        <div className="client_avatar">
                            <img src={avatar} alt={name} />
                        </div>
                    <h5 className='client_name'>{name}</h5>
                    <small className='client_review'>{review}</small>
                    <h5 className='client_phone'>{phone}</h5>
                   
                    </article>
        
                    )
                })
            }
        </div>
    </section>
  )
}

export default Reference