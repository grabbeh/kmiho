import React from 'react'
import Fade from './Fade'
import Link from 'gatsby-link'
import cn from 'classnames'

const Menu = ({ showMenu, close, activePath }) => (
  <div className='front bg-white h-100 w-100 absolute top-0 left-0'>
    <div onClick={close} className='pa3 dn-ns'>
      <i className='pointer fr fa fa-times dark-gray fa-lg' />
    </div>
    <div className='f3 mt5 tc'>
      <div onClick={close}>
        <Link
          className={cn(
            activePath === '/contact' && 'black',
            activePath !== '/contact' && 'light-gray',
            'hover-black',
            'lato',
            'ttu',
            'link'
          )}
          to='/contact'
        >
          Contact
        </Link>
      </div>
      <div className='mt3' onClick={close}>
        <Link
          className={cn(
            activePath === '/' && 'dark-gray',
            activePath !== '/' && 'light-gray',
            'lato',
            'hover-black',
            'ttu',
            'link'
          )}
          to='/'
        >
          Work
        </Link>
      </div>
    </div>
  </div>
)

export default Menu
