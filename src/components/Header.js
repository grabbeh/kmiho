import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className='w-100 tracked front pa3 lato bg-white fixed'>
    <Link className='fl ttu heavy link dark-gray' to='/'>
      Katie Mihailovits
    </Link>

    <Link className='fr ttu link dark-gray' to='/contact'>
      Contact
    </Link>

  </div>
)

export default Header
