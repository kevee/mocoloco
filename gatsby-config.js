require('dotenv').config()

module.exports = {
  siteMetadata: {},
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mocoloco`,
        short_name: `mocoloco`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/style/typography`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.MOCOLOCO_CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.MOCOLOCO_CONTENTFUL_TOKEN,
      },
    },
    `gatsby-transformer-geojson-outline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `outlines`,
        path: `${__dirname}/src/data/outlines/`,
        ignore: [`**/**.js`],
      },
    },
  ],
}
