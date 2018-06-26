import React, { Component } from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'
import Menu from '../components/Menu'
import Grow from '../components/Grow'
import FaBars from 'react-icons/lib/fa/bars'

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
        <Grow show={showMenu}>
          <Menu showMenu={showMenu} close={close} />
        </Grow>
        <div className='mb4 cf w-100 f4 tracked primary-front baskeville bg-white'>
          <Link className='fl link dark-gray' to='/'>
            <img className='w4' src='/hilo.gif' />
          </Link>
          <div onClick={open} className='dn-ns'>
            <div className='pointer dark-gray fr mt3 mr2'>
              <FaBars />
            </div>
          </div>
          <div className='mt3 f5 heavy dn dib-ns fr'>
            <Link
              className={cn(
                activePath === '/about' && 'dark-gray',
                activePath !== '/about' && 'gray',
                'hover-black',
                'lato',
                'fr',
                'ttu',
                'link'
              )}
              to='/about'
            >
              Contact
            </Link>
            <Link
              className={cn(
                activePath === '/' && 'dark-gray',
                activePath !== '/' && 'gray',
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
