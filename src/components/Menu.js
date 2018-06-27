import React from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import MdClose from 'react-icons/lib/md/close'

const Menu = ({ showMenu, close }) => {
  return (
    <div className={cn(!showMenu && 'dn')}>
       <div onClick={close} className='dn-ns'>
          <div className='pointer dark-gray fr mt3 mr2'>
              <MdClose size={24} />
            </div>
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
