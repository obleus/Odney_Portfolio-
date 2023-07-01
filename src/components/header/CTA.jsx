import React from 'react'
import CV from '../../assets/odneybleus2023.pdf'

const CTA = () => {
  return (
    <div>
        <div className="cta">
            <a href={CV} download className='btn'>Download Resume</a>
            <a href='#contact' className='btn btn-primary'>Let's Connect</a>
        </div>
    </div>
  )
}

export default CTA