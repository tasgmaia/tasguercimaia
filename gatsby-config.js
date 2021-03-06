const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Tas Guerci Maia Portfolio`,
    description: `Building compelling experiences trough digital products that help people on daily tasks.`,
    author: `@TasGuerciMaia`,
    siteUrl: 'https://jonatasmaia.com/',
    SocialMedia : {
      github: "https://github.com/tasgmaia",
      dribbble: "https://dribbble.com/tasguerci",
      instagram: "https://www.instagram.com/tasmaia/",
      linkedin: "https://www.linkedin.com/in/tasguerci/",
    }
  },
  plugins: [
    //TAG MANAGER CONFIG
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M4K5J8B",
        includeInDevelopment: false,
      },
    },
    //HELMET CONFIG
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#a5a5a5`,
        theme_color: `#0007dd`,
        display: `minimal-ui`,
        icon: `src/images/tas-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
