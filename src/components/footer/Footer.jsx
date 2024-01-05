import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer id='footer'>
      

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#reference'>Reference</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href='https://www.linkedin.com/in/odney-bleus/' target='_blank'><AiFillLinkedin/></a>
        <a href='https://github.com/obleus' target='_blank'><AiFillGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy;Odney Bleus. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer