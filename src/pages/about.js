import React from 'react'
import Layout from "../components/layout"
import Head from '../components/head'
import aboutStyles from './about.module.scss'

const AboutPage = () =>{
	return(
		<Layout>
			<Head title="About"/>
			<div className={aboutStyles.container}>
				<h2>About me</h2>
				<h3> I am a Front End Developer based in Toronto Canada.</h3>
				<p>I have created this blog to keep track of all my learning and to share my personality beyond my resume. I invite you to get in contact if you have any questions or need help with a project. </p>
			</div>
		</Layout>
		)
}

export default AboutPage