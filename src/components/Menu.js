import React from 'react'
import Grow from './Grow'
import Link from 'gatsby-link'
import FaTimes from 'react-icons/lib/fa/times-circle'

const Menu = ({ showMenu, close }) => {
  return (
    <div>
      <div onClick={close} className='pa3'>
        <div className='pointer fr w0 h0 dark-gray mt3 mr3'>
          <FaTimes />
        </div>
      </div>
      <div className='f3 mt5 tc'>
        <div onClick={close}>
          <Link
            className='tracked hover-black dark-gray lato ttu link'
            to='/about'
          >
            About
          </Link>
        </div>
        <div className='mt3' onClick={close}>
          <Link className='tracked hover-black dark-gray lato ttu link' to='/'>
            Work
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Menu
