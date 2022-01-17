import React from 'react'
import {Helmet} from 'react-helmet'
import { useStaticQuery, graphql} from 'gatsby'


const Head = ({title}) => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
            }
        }
    }
    `)

    console.log(data);
    return(
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
    )
}

export default Head