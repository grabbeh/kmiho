import React from 'react'
import Footer from '../components/Footer'

class Template extends React.Component {
  render () {
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
        <div className='mv4 center w-50-ns w-100'>
          <img src={headerImage.file.url} />
        </div>
        <div className='center w-75-ns w-100'>
          <div className='tc tracked lato ttu heavy pointer'>
            {title}
          </div>
          <div
            className='w-50-ns w-100 center tc baskeville lh-copy mt3'
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className='mv4'>
          {images.map(i => (
            <div key={i.id} className='center w-50-ns w-100'>
              <img className='mb3' src={i.file.url} />
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
        id
        file {
          url
        }
      }
      headerImage {
        file {
          url
        }
      }
    }
  }
`

export default Template
