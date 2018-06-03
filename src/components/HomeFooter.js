import React, { Component } from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showMenu: false
    }
  }

  toggle = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render () {
    const { creative, hoverImage, endHover } = this.props
    const { showMenu } = this.state
    return (
      <div>
        <div onClick={this.toggle} className='lato ttu tc ph3 mb3 dn-l dn-m'>
          <span className='pointer'>
            Projects
          </span>
        </div>
        <div
          className={cn(
            !showMenu && 'dn',
            'db-ns',
            'lato',
            'tracked',
            'bg-white'
          )}
        >
          <div className='w-80 center flex flex-wrap justify-center'>
            {creative.map(c => (
              <div
                onMouseOver={() => {
                  hoverImage(c.image)
                }}
                onMouseOut={endHover}
                className='tc mr3-ns mr0 heavy pv1'
                key={c.name}
              >
                <Link className='strike-hover ttu link dark-gray' to={c.link}>
                  {c.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
