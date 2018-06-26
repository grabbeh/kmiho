import React from 'react'
import Grow from './Grow'
import Link from 'gatsby-link'
import FaTimes from 'react-icons/lib/fa/times'

const Menu = ({ showMenu, close }) => {
  return (
    <Grow show={showMenu}>
      <div onClick={close} className='pa3'>
        <div className='pointer fr dark-gray mt2'>
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

    </Grow>
  )
}

export default Menu
