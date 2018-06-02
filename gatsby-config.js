module.exports = {
  pathPrefix: `/public`,
  siteMetadata: {
    creative: [
      {
        name: 'Better hearts, better cities',
        link: '/better-hearts-better-cities',
        image: 'MockupBusinessCard.png'
      },
      { name: 'Can you see me', link: '/can-you-see-me', image: '/test.jpg' },
      {
        name: 'What goes into making a medicine',
        link: '/what-goes-into-making-a-medicine',
        image: '/test.jpg'
      },
      { name: 'Renegade tea', link: '/renegade-tea', image: '/test.jpg' },
      {
        name: 'The Soft Power 30',
        link: '/the-soft-power-30',
        image: '/test.jpg'
      },
      {
        name: "Claude's Cat Food",
        link: '/claudes-cat-food',
        image: '/test.jpg'
      },
      {
        name: 'Childhood dementia',
        link: '/childhood-dementia',
        image: '/test.jpg'
      },
      { name: 'Early action', link: '/early-action', image: '/test.jpg' }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/markdown`,
        name: 'markdown-pages'
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`
  ]
}
