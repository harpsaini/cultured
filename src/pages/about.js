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
				<h3> I am a Front End Developer based in Toronto Canada. </h3>
				<p>I have created this blog to keep track of all my learning and to share my personality beyond my resume. Here i share information about my personal journey on being a developer and the person that i am. </p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquam velit explicabo eveniet nostrum consectetur nam iure itaque vitae? Accusamus a recusandae quis quod possimus commodi odit nobis ex dolores.</p>
			</div>
		</Layout>
		)
}

export default AboutPage