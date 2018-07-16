import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './index.css'
import favicon from '../favicon.png'

const Layout = ({ children, location: { pathname } }) => (
  <div>
    <link rel='shortcut icon' type='image/png' href='./favicon.png' />
    <Helmet
      meta={[
        { name: 'description', content: 'Graphic designer' },
        { name: 'keywords', content: 'designer, graphic designer, london' },
        {
          name: 'google-site-verification',
          content: '1DIibYM_1DiLLMYMmVLaMjBuPdi0XB_QBXJR0-tlPbY'
        }
      ]}
    />
    <div className='ph5-ns ph4-m mt2 pt4-ns pa3'>
      <Header activePath={pathname} />
      <div className='dark-gray'>
        {children()}
      </div>
    </div>

  </div>
)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout
