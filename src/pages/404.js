import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Head from "../components/head"


const NotFoundPage = () => {
  return (
      <Layout>
        <Head title="Not found" />
          <h1>Page not found</h1>
          <Link to="/">Go to the Home Page</Link>.
      </Layout>
        
     
  )
}

export default NotFoundPage
