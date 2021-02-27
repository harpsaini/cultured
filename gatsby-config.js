module.exports = {
  siteMetadata: {
    title: "Cultured",
    author: 'Harp Saini'
  },
  plugins: [
    
    `gatsby-plugin-sass`,
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",

    {
      resolve:"gatsby-source-filesystem",
      options:{
        name:'src',
        path: `${__dirname}/src/`,
         },

    },

    
  ],
};


