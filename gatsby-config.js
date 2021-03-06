require('dotenv').config()

module.exports = {
  siteMetadata: {
    geolocation: `122999d8974e4f90b1ce826a58bfc283`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
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
        accessToken: process.env.MOCOLOCO_CONTENTFUL_TOKEN,
      },
    },
    `gatsby-transformer-geojson-outline`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `outlines`,
        path: `${__dirname}/src/data/outlines/`,
        ignore: [`**/**.js`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        ignore: [`**/**.*`],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#056DD4`,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-146837376-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        cookieDomain: 'mocoloco.org',
      },
    },
  ],
}
