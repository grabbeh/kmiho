import React from 'react'
import Footer from '../components/Footer'
import Img from 'gatsby-image'

class Template extends React.Component {
  render () {
    console.log(this.props)
    const { location, pathContext: { paths } } = this.props
    const { pathname } = location
    const {
      title,
      text,
      headerImage,
      images
    } = this.props.data.contentfulCreative
    const { html } = text.childMarkdownRemark

    return (
      <div>
        <div className='mv4 center w-60-ns w-80-m w-100'>
          <Img sizes={headerImage.sizes} />
        </div>
        <div className='center w-75-ns w-100'>
          <div className='tc tracked lato ttu heavy pointer'>
            {title}
          </div>
          <div
            className='w-60-ns w-80-m w-100 center tc baskeville lh-copy mt3'
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className='mv4'>
          {images.map(i => (
            <div key={i.id} className='center w-60-ns w-80-m w-100'>
              <Img className='mb3' sizes={i.sizes} />
            </div>
          ))}
        </div>
        <Footer activePath={pathname} creative={paths} />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query CreativeByPath($path: String!) {
    contentfulCreative(path: { eq: $path }) {
      title
      text {
        childMarkdownRemark {
          html
        }
      }
      images {
        sizes(maxWidth: 800) {
          ...GatsbyContentfulSizes
        }
        id
      }
      headerImage {
        sizes(maxWidth: 800) {
          ...GatsbyContentfulSizes
        }
      }
    }
  }
`

export default Template
