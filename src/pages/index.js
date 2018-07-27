import React from 'react'
import Footer from '../components/Footer'
import cn from 'classnames'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'

const IndexPage = ({
  data: { allContentfulCreative: { edges } },
  location
}) => {
  console.log(edges)
  let creative = edges.map(i => {
    let { path, title } = i.node
    return { path, title }
  })
  return (
    <Layout location={location}>
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
                    backgroundColor={'#fafafa'}
                    style={{ height: '50vh' }}
                    className='w-100 img'
                    fluid={headerImage.fluid}
                  />
                </Link>
              </div>
              <div className='cf' />
            </div>
          </div>
        ))}
        <Footer creative={creative} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
   {
    allContentfulCreative {
      edges {
        node {
          path
          title
          headerImage {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid_noBase64
            } 
          }
        }
      }
    }
  }
`
