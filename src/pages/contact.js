import React from 'react'
import Layout from "../components/layout"
import Head from '../components/head'
import contactStyles from './contact.module.scss'


const ContactPage = () =>{
	return(
		<Layout>
			<Head title="Contact Us" />	
			<div>
				<h2>Let's Talk Code</h2>
				<form className="formStyles"
				method="post" 
				netlify-honeypot="bot-field" 
				data-netlify="true" 
				name="contact">

				<input type="hidden" name="bot-field" />
				<input type="hidden" name="form-name" value="contact" />
				<label className={contactStyles.srOnly} htmlFor="text">Name</label>
				<input id="text" type="text" name="name" placeholder='Name'/>
				<label className={contactStyles.srOnly} htmlFor="email">Email</label>
				<input id="email" type="email" name="email" placeholder='Email'/>
				<label className={contactStyles.srOnly} htmlFor="message">Message</label>
				<textarea id="message" type="text" name="message" placeholder='Message'/> 
				<button type="Submit">Send</button>	   
		   	</form>
		</div>
   </Layout>
		)
}

export default ContactPage