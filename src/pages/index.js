import React from 'react'
import Layout from "../components/layout"
import Head from '../components/head'
import heroImage from '../images/heroImage.jpg'
import indexStyles from '../styles/index.module.scss'

const App = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h2>Hello there! Welcome to my blog page.</h2>
      <div>
      <img className={indexStyles.heroImage} src={heroImage} alt='heroImage'/>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt repellat, reiciendis culpa, modi nobis minima id voluptatem eveniet error aliquid consectetur. Ipsum, tempore asperiores? Pariatur unde nisi iusto ratione quam, quis ad aspernatur officia similique? Omnis mollitia nobis itaque! 
        Numquam autem recusandae nobis placeat vero ullam iusto illum pariatur impedit! </p>
      </div>
    </Layout>
    )
}
export default App