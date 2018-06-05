import React, { Component } from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'

class Footer extends Component {
  render () {
    const { creative, activePath } = this.props
    console.log(activePath)
    return (
      <div>
        <div className='tracked lato w-80 center flex flex-wrap justify-center'>
          {creative.map(c => (
            <div className='tc mr3 heavy pv1' key={c.name}>
              <Link
                className={cn(
                  activePath === c.link && 'black',
                  activePath !== c.link && 'light-gray',
                  'hover-black',
                  'ttu',
                  'link'
                )}
                to={c.link}
              >
                {c.name}
              </Link>
            </div>
          ))}
        </div>

      </div>
    )
  }
}

export default Footer
