import React from 'react'
import './about.css'
import ME from '../../assets/IMG_0611-removebg.png'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {VscFolder} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt='About me' />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BsAward className='about_icon'/>
              <h5>
                Expreience
              </h5>
              <small>Junior Fullstack Developer</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>
                Clients
              </h5>
              <small>TBD</small>
            </article>
            <article className='about_card'>
              <VscFolder className='about_icon'/>
              <h5>
                Projects
              </h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
          I am a Full stack developer with a vast of array of knowledge in many different front-end and back-end languages, responsive frameworks, database, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do. I am dedicated to perfecting my craft by learning from more seasoned developers, remaining humble, and continuously making strides to learn all that I can about development. I believe that my understanding of problem solving is a skill that will contribute to my overall success as a developer.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About