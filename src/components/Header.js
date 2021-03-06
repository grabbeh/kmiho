import React, { Component } from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import Menu from '../components/Menu'
import Grow from '../components/Grow'
import MdMenu from 'react-icons/lib/md/menu'
import MdClose from 'react-icons/lib/md/close'

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
          <Link style={{ outline: 0 }} className='fl link dark-gray' to='/'>
            <img alt='header-text' className='w4' src='/hilo.gif' />
          </Link>
          {showMenu
            ? <div onClick={close} className='dn-ns'>
              <div className='pointer dark-gray fr mt3 mr2'>
                <MdClose size={24} />
              </div>
            </div>
            : <div onClick={open} className='dn-ns'>
              <div className='pointer dark-gray fr mt3 mr2'>
                <MdMenu size={24} />
              </div>
            </div>}
          <div className='mt3 f5 heavy dn dib-ns fr'>
            <Link
              style={{ outline: 0 }}
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
              About
            </Link>
            <Link
              style={{ outline: 0 }}
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
