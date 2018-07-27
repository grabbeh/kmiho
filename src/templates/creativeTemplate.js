import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

const Template = props => {
  const { location, pageContext: { paths } } = props
  const { pathname } = location
  const { title, text, headerImage, images } = props.data.contentfulCreative
  const { html } = text.childMarkdownRemark
  return (
    <Layout location={location}>
      <div>
        <div className='mv4 center w-60-ns w-80-m w-100'>
          <Img backgroundColor={'#fafafa'} fluid={headerImage.fluid} />
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
            <div key={i.id}>
              <Img
                backgroundColor={'#fafafa'}
                className='mb4'
                fluid={i.fluid}
              />
            </div>
          ))}
        </div>
        <Footer activePath={pathname} creative={paths} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    contentfulCreative(path: { eq: $path }) {
      title
      text {
        childMarkdownRemark {
          html
        }
      }
      images {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid_noBase64
        }
        id
      }
      headerImage {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
`

export default Template
