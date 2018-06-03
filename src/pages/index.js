import React, { Component } from 'react'
import Footer from '../components/HomeFooter'
import Fade from '../components/Fade'
import cn from 'classnames'

class IndexPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imageUrl: false
    }
  }

  hoverImage = imageUrl => {
    this.setState({ imageUrl })
  }

  endHover = () => {
    this.setState({ imageUrl: false })
  }

  render () {
    const { data } = this.props
    const { imageUrl } = this.state
    const { hoverImage, endHover } = this

    return (
      <div>
        <Fade hide={!imageUrl}>
          <div className='center'>
            <img
              className={cn(!imageUrl && 'dn', 'center-image')}
              src={imageUrl}
            />
          </div>
        </Fade>

        <div className='relative'>
          <div className='lh-title
            kblue
            w-75
            baskeville
            center
            pv6-ns
            mv3
            f2
            tc'>
            <Fade hide={imageUrl}>
              <span>
                Hi I'm Katie, a creative designer living and working in London.
              </span>
            </Fade>
          </div>
          <Footer
            hoverImage={hoverImage}
            endHover={endHover}
            creative={data.site.siteMetadata.creative}
          />
        </div>
      </div>
    )
  }
}

export default IndexPage

export const query = graphql`
  query creativeQuery {
    site {
      siteMetadata {
        creative {
          name
          link
          image
        }
      }
    }
  }
`
