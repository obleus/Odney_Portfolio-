import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href='https://www.linkedin.com/in/odney-bleus-580ab61b6/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/obleus' target='_blank' rel="noreferrer"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials