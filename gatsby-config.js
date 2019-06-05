require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `mufflr`,
    description: `mufflr apparel - where fashion meets function`,
    author: `James Aspinall`,
    social: {
      twitter: `ThePeopleTester`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Product', 'Sku'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
        auth: false,
      }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `muffle | fashion meets function`,
        short_name: `mufflr`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    `gatsby-plugin-sass`,
    {
      resolve:`gatsby-source-contentful`,
      options:{
        spaceId: `c509gk8rf91h`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    `@contentful/gatsby-transformer-contentful-richtext`
  ],
}
