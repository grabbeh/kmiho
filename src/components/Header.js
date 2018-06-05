import React, { Component } from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import Fade from '../components/Fade'
import Menu from '../components/Menu'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showMenu: false
    }
  }

  open = () => {
    this.setState({ showMenu: true })
  }

  close = () => {
    this.setState({ showMenu: false })
  }

  render () {
    const { activePath } = this.props
    const { showMenu } = this.state
    const { open, close } = this
    return (
      <div>
        {showMenu &&
          <Menu activePath={activePath} close={close} showMenu={showMenu} />}
        <div className='mb4 cf w-100 f4 tracked front baskeville bg-white'>
          <Link className='fl link dark-gray' to='/'>
            Katie Mihailovits
          </Link>
          <div onClick={open} className='dn-ns'>
            <i className='pointer dark-gray fr fa fa-bars' />
          </div>
          <div className='f5 heavy dn dib-ns fr'>
            <Link
              className={cn(
                activePath === '/contact' && 'black',
                activePath !== '/contact' && 'light-gray',
                'hover-black',
                'lato',
                'fr',
                'ttu',
                'link'
              )}
              to='/contact'
            >
              Contact
            </Link>
            <Link
              className={cn(
                activePath === '/' && 'black',
                activePath !== '/' && 'light-gray',
                'lato',
                'hover-black',
                'fr',
                'ttu',
                'link',
                'mr3'
              )}
              to='/'
            >
              Work
            </Link>
          </div>

        </div>
      </div>
    )
  }
}

export default Header
