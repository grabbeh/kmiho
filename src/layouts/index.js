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

      <link
        rel='stylesheet'
        href='https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Libre+Baskerville'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Lato'
        rel='stylesheet'
      />
      <link
        rel='stylesheet'
        href='https://use.fontawesome.com/releases/v5.0.13/css/all.css'
        integrity='sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp'
        crossorigin='anonymous'
      />
    </Helmet>
    <div className='ph5-ns mt2 pt4-ns pa3'>
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
