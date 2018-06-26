import React from 'react'

const AboutPage = ({ data }) => {
  let { email, linkedin, text, taglineOne, phone } = data.contentfulPerson
  let { html } = text.childMarkdownRemark
  return(
    <div className='center dark-gray baskeville mv4 w-80-ns'>
    <div className='mt4'>
      <div className='lh-title f3 w-40-ns w-100 fl'>
         {taglineOne}
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }}className='lh-copy w-60-ns w-100 fl mt0-ns mt3'/>

    </div>
    <div className='cf' />
    <div className='mt4'>
      <div className='f3 w-40-ns w-100 fl'>
        Say "YAMS" or "hi"
      </div>
      <div className='w-60-ns w-100 fl mt0-ns mt3'>
        <div>{email}</div>

        <div className='mt4'>{phone}</div>
      </div>
    </div>
    <div className='cf' />
  </div>
  )
}

export default AboutPage

export const query = graphql`
  query personQuery($email: String!) {
    contentfulPerson(email: { eq: "katie@hilodoes.com"}) {
      edges {
        node {
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
    }
  }
`
