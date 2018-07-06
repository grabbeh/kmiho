import React from 'react'
import Img from 'gatsby-image'
import SocialFooter from '../components/SocialFooter'

const AboutPage = ({ data }) => {
  console.log(data)
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
    <div>
      <div className='center dark-gray baskeville mv4 w-80-ns'>
        <div>
          <Img backgroundColor={'#fafafa'} sizes={headerImage.sizes} />
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
            <a href={`mailto:${email}`}>katie@hilodoes.com</a>
            <div className='mt4'>{phone}</div>
          </div>
        </div>
        <div className='cf' />

      </div>
      <SocialFooter instagram={instagram} linkedin={linkedin} />
    </div>
  )
}

export default AboutPage

export const query = graphql`
  query personQuery {
    contentfulPerson {
          headerImage {
            sizes(maxWidth: 800) {
                ...GatsbyContentfulSizes_noBase64
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
