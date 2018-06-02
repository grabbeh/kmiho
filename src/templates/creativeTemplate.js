import React from 'react'
import { withPrefix } from 'gatsby-link'
import Headroom from 'react-headroom'
import cn from 'classnames'
import Fade from '../components/Fade'
import Footer from '../components/CreativeFooter'
if (typeof window !== `undefined`) {
  var Scroll = require('react-scroll')
  var scroll = Scroll.animateScroll
}

class Template extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showTitle: true
    }
  }

  hideTitle = () => {
    let { showTitle } = this.state
    window.scrollY > 150
      ? this.setState({ showTitle: false })
      : this.setState({ showTitle: true })
  }

  componentDidMount () {
    window.addEventListener('scroll', this.hideTitle)
  }

  scrollTo = () => {
    scroll.scrollTo(275)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.hideTitle)
  }

  render () {
    const { data } = this.props
    const { markdownRemark } = this.props.data
    const { frontmatter, html } = markdownRemark
    const { showTitle } = this.state
    const { scrollTo } = this
    return (
      <div>
        <div>
          <div
            className={cn(!showTitle && 'hide', 'pt5', 'center', 'mw6', 'tc')}
          >
            <div onClick={() => scrollTo()}>
              <div className='tracked lato ttu heavy pointer'>
                {frontmatter.title}
              </div>
              <div
                className='baskeville heavy lh-copy mt4'
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <div className='mv2'>
                <i className='kblue pointer fa fa-angle-down fa-2x' />
              </div>
            </div>
          </div>
          <div>
            {frontmatter.images.map(i => (
              <Fade key={i} hide={showTitle}>
                <div className='center mw6'> <img src={withPrefix(i)} /></div>
              </Fade>
            ))}
          </div>
        </div>
        <Footer creative={data.site.siteMetadata.creative} />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query CreativeByPath($path: String!) {
    site {
      siteMetadata {
        creative {
          name
          link
          image
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        images
      }
    }
  }
`

export default Template
