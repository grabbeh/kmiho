import React from 'react'
import { withPrefix } from 'gatsby-link'

import Footer from '../components/CreativeFooter'

class Template extends React.Component {
  render () {
    const { data, location } = this.props
    const { pathname } = location
    const { markdownRemark } = this.props.data
    const { frontmatter, html } = markdownRemark
    const { images } = frontmatter
    const first = images[0]
    const remainder = images.slice(1, images.length)
    return (
      <div>
        <div className='mv4 center w-50-ns w-100'>
          <img src={first} />
        </div>
        <div className='center w-75-ns w-100'>
          <div className='tc tracked lato ttu heavy pointer'>
            {frontmatter.title}
          </div>
          <div
            className='w-50-ns w-100 center tc baskeville lh-copy mt3'
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className='mv4'>
          {remainder.map(i => (
            <div key={i} className='center w-50-ns w-100'>
              <img className='mb3' src={withPrefix(i)} />
            </div>
          ))}
        </div>

        <div>

          <Footer
            activePath={pathname}
            creative={data.site.siteMetadata.creative}
          />
        </div>
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
