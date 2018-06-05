import React, { Component } from 'react'
import Footer from '../components/HomeFooter'
import cn from 'classnames'
import Link from 'gatsby-link'

class IndexPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imageUrl: null
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
    const { creative } = data.site.siteMetadata

    return (
      <div>
        {creative.map((c, index) => (
          <div key={c.name} className='w-50-ns w-100 fl overflow-hidden'>
            <div
              className={cn(
                (index + 1) % 2 === 0 && 'mr0-ns',
                (index + 1) % 2 !== 0 && 'mr4-ns',
                'mb4'
              )}
            >
              <div>
                <Link className='dim' to={c.link}>
                  <img
                    style={{ height: '50vh' }}
                    className='w-100 img'
                    src={c.image}
                  />
                </Link>
              </div>
              <div className='cf' />
            </div>
          </div>
        ))}
        <Footer creative={data.site.siteMetadata.creative} />
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
