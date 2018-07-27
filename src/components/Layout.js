import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import './index.css'

const Layout = ({ children, location }) => (
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
    />
    <div className='ph5-ns ph4-m mt2 pt4-ns pa3'>
      <Header activePath={location.pathname} />
      <div className='dark-gray'>
        {children}
      </div>
    </div>

  </div>
)

export default Layout
