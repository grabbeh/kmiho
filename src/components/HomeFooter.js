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
    const topRow = creative.slice(0, 4)
    const bottomRow = creative.slice(4, creative.length)
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
            'ml4',
            'center',
            'tc',
            'ph6-l',
            'lato',
            'tracked',
            'bg-white'
          )}
        >
          <div className='cf'>
            <ul className='cf list ml5-ns ml0 mv0 pa0'>
              {topRow.map(c => (
                <li
                  onMouseOver={() => {
                    hoverImage(c.image)
                  }}
                  onMouseOut={endHover}
                  key={c.name}
                  className='fl mr3'
                >
                  <Link className='strike-hover ttu link dark-gray' to={c.link}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className='cf list ml5-ns pl5-l pl0-m pl0 ml0 mv0 pa0'>
              {bottomRow.map(c => (
                <li
                  onMouseOver={() => {
                    hoverImage(c.image)
                  }}
                  onMouseOut={endHover}
                  key={c.name}
                  className='fl mr3 mt1'
                >
                  <Link className='strike-hover ttu link dark-gray' to={c.link}>
                    {c.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
