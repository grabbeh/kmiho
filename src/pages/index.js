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
      <div className='relative'>
        <div className='lh-title
            kblue
            ph6-l
            baskeville
            center
            pv6-ns
            mt5
            mb4
            f2
            tc'>
          <Fade hide={imageUrl}>
            <span>
              Hi I'm Katie, a creative designer living and working in London.
            </span>
          </Fade>
          <Fade hide={!imageUrl}>
            <div>
              <img
                className={cn(
                  !imageUrl && 'dn',
                  'h-75',
                  'absolute',
                  'top-0',
                  'image-left-ns',
                  'left-zero'
                )}
                src={imageUrl}
              />
            </div>
          </Fade>
        </div>
        <Footer
          hoverImage={hoverImage}
          endHover={endHover}
          creative={data.site.siteMetadata.creative}
        />
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
