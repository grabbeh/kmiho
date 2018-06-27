if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  require('dotenv').config({ path: './config/keys.env' })
}

module.exports = {
  pathPrefix: `/public`,
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.SPACE_ID}`,
        accessToken: `${process.env.ACCESS_TOKEN}`
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
     `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
     {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `libre baskerville`,
          `lato` 
        ]
      }
    }
  ]
}
