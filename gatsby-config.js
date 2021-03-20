module.exports = {
  siteMetadata: {
    title: "Cultured",
    author: 'Harp Saini'
  },
  plugins: [
    {
      resolve:'gatsby-source-contentful',
      options:{
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    
    `gatsby-plugin-sass`,
    "gatsby-plugin-sharp",
    {
      resolve:'gatsby-transformer-remark',
      options:{
        plugins:[
          'gatsby-remark-relative-images',
          {
            resolve:'gatsby-remark-images',
              options:{
                maxWidth:750,
                linkImagesToOriginal:false
              }
          }
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    
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


