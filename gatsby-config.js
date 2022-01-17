
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Cultured",
    author: 'Harp Saini'
  },
  plugins: [
    {
      resolve:"gatsby-source-contentful",
      options: {
        spaceId:process.env.CONTENTFUL_SPACE_ID,
        accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    
    `gatsby-plugin-sass`,
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    // "gatsby-plugin-image",

    {
      resolve:"gatsby-source-filesystem",
      options:{
        name:'src',
        path: `${__dirname}/src/`,
         },

    },

    
  ],
};
