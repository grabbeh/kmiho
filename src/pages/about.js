import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SocialFooter from '../components/SocialFooter'
import Layout from '../components/Layout'

const AboutPage = ({ data, location }) => {
  let {
    email,
    linkedin,
    instagram,
    text,
    taglineOne,
    phone,
    headerImage
  } = data.contentfulPerson
  let { html } = text.childMarkdownRemark
  return (
    <Layout location={location}>
      <div>
        <div className='center dark-gray baskeville mv4 w-80-ns'>
          <div>
            <Img backgroundColor={'#fafafa'} fluid={headerImage.fluid} />
          </div>
          <div className='mt4'>
            <div className='lh-title mt3 f3 w-40-ns w-100 fl'>
              {taglineOne}
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: html }}
              className='lh-copy w-60-ns w-100 fl mt0-ns mt3'
            />

          </div>
          <div className='cf' />
          <div className='mt4'>
            <div className='f3 w-40-ns w-100 fl'>
              Say hi
            </div>
            <div className='w-60-ns w-100 fl mt0-ns mt3'>
              <a className='dark-gray' href={`mailto:${email}`}>
                katie@hilodoes.com
              </a>
              <div className='mt4'>{phone}</div>
            </div>
          </div>
          <div className='cf' />

        </div>
        <SocialFooter instagram={instagram} linkedin={linkedin} />
      </div>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  {
    contentfulPerson {
          headerImage {
            fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid_noBase64
             }
          }
          taglineOne
          linkedin
          instagram
          text {
            childMarkdownRemark {
                html
             }
           }
          phone
          email
        }
  }
`
