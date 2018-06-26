import React from 'react'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaLinkedin from 'react-icons/lib/fa/linkedin'

const CreativeFooter = ({ instagram, linkedin }) => (
  <div className='bw bt b--black-50 pv3 tc center'>
    <span>
      <a className='dark-gray mr3 dim' href={instagram}>
        <FaInstagram size={24} />
      </a>
    </span>
    <span>
      <a className='dark-gray dim' href={linkedin}>
        <FaLinkedin size={24} />
      </a>
    </span>
  </div>
)

export default CreativeFooter
