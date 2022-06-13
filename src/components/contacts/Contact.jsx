import React from 'react'
import './contatc.css'
import {MdMarkEmailUnread} from 'react-icons/md'
import {BsFillPhoneFill} from 'react-icons/bs'



const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdMarkEmailUnread className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>Odneyb@yahoo.com</h5>
            <a href='mailto:odneyb@yahoo.com'>Send A Email</a>
          </article>
          <article className="contact_option">
            <BsFillPhoneFill className='contact_option-icon'/>
            <h4>Phone</h4>
            <h5>(561)-718-5485</h5>
            <a href='sms:561-718-5485'>Send A Text</a>
          </article>
        </div>
        <form action="">
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact