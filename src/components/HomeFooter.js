import React, { Component } from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'

class Footer extends Component {
  render () {
    const { creative } = this.props
    return (
      <div>
        <div className='tracked lato w-80 center flex flex-wrap justify-center'>
          {creative.map(c => (
            <div className='tc mr3-ns mr0 heavy pv1' key={c.name}>
              <Link className='ttu link light-gray hover-black' to={c.link}>
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
