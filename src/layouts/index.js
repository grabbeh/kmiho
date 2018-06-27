import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './index.css'

const Layout = ({ children, location: { pathname } }) => (
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Graphic designer' },
        { name: 'keywords', content: 'designer, graphic designer, london' },
        {
          name: 'google-site-verification',
          content: '1DIibYM_1DiLLMYMmVLaMjBuPdi0XB_QBXJR0-tlPbY'
        }
      ]}
    >
    </Helmet>
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
