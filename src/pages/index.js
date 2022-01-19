import React from 'react'
import Layout from "../components/layout"
import Head from '../components/head'
import heroImage from '../images/heroImage.jpg'
import indexStyles from '../styles/index.module.scss'

const App = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h2>Hello there! Welcome to my blog</h2>
      <div>
      <img className={indexStyles.heroImage} src={heroImage} alt='heroImage'/>
      </div>
    </Layout>
    )
}
export default App