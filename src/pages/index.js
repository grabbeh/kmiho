import React from 'react'
import Footer from '../components/Footer'
import cn from 'classnames'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const IndexPage = ({ data: { allContentfulCreative: { edges } } }) => {
  let creative = edges.map(i => {
    let { path, title } = i.node
    return { path, title }
  })
  return (
    <div>
      {edges.map(({ node: { title, path, headerImage } }, index) => (
        <div key={title} className='w-50-ns w-100 fl overflow-hidden'>
          <div
            className={cn(
              (index + 1) % 2 === 0 && 'mr0-ns',
              (index + 1) % 2 !== 0 && 'mr4-ns',
              'mb4'
            )}
          >
            <div>
              <Link className='dim' to={path}>
                <Img
                  fadeIn={false}
                  backgroundColor={'#fafafa'}
                  style={{ height: '50vh' }}
                  className='w-100 img'
                  sizes={headerImage.sizes}
                />
              </Link>
            </div>
            <div className='cf' />
          </div>
        </div>
      ))}
      <Footer creative={creative} />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query creativeQuery {
    allContentfulCreative {
      edges {
        node {
          path
          title
          headerImage {
            sizes(maxWidth: 800) {
              ...GatsbyContentfulSizes_noBase64
            } 
          }
        }
      }
    }
  }
`
