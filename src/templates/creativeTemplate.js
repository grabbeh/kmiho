import React from 'react'
import Footer from '../components/Footer'
import Img from 'gatsby-image'

const Template = props => {
  const { location, pathContext: { paths } } = props
  const { pathname } = location
  const { title, text, headerImage, images } = props.data.contentfulCreative
  const { html } = text.childMarkdownRemark

  return (
    <div>
      <div className='mv4 center w-60-ns w-80-m w-100'>
        <Img backgroundColor={'#fafafa'} sizes={headerImage.sizes} />
      </div>
      <div className='center mv5 w-75-ns w-100'>
        <div className='tc tracked lato ttu heavy pointer'>
          {title}
        </div>
        <div
          className='w-60-ns w-80-m w-100 center tc baskeville lh-copy mv4'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <div className='mb4 center w-60-ns w-80-m w-100'>
        {images.map(i => (
          <div key={i.id} className='center w-60-ns w-80-m w-100'>
            <Img backgroundColor={'#fafafa'} className='mb4' sizes={i.sizes} />
          </div>
        ))}
      </div>
      <Footer activePath={pathname} creative={paths} />
    </div>
  )
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
          ...GatsbyContentfulSizes_noBase64
        }
        id
      }
      headerImage {
        sizes(maxWidth: 800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
    }
  }
`

export default Template
