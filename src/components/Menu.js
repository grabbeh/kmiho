import React from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import MdClose from 'react-icons/lib/md/close'

const Menu = ({ showMenu, close }) => {
  return (
    <div className={cn(!showMenu && 'dn')}>
      <div onClick={close} className='pa3'>
        <div className='pointer fr w0 h0 dark-gray mt4 mr3'>
          <MdClose size={24} />
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
