const path = require("path")

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Sebastian Alos Website`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: ["article", "writer"],
        singleTypes: [`homepage`, `global`],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
  ],
}
