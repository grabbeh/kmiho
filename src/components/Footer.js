import React from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'

const Footer = ({ creative, activePath }) => (
  <div>
    <div className='tracked lato w-80 center flex flex-wrap justify-center'>
      {creative.map(c => (
        <div className='tc mr3 heavy pv1' key={c.title}>
          <Link
            className={cn(
              activePath === c.path && 'dark-gray',
              activePath !== c.path && 'gray',
              'hover-black',
              'ttu',
              'link'
            )}
            to={c.path}
          >
            {c.title}
          </Link>
        </div>
      ))}
    </div>

  </div>
)

export default Footer
