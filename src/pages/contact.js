import React from 'react'
import Layout from "../components/layout"
import Head from '../components/head'
import blogStyles from './contact.module.scss'


const ContactPage = () =>{
	return(
		<Layout>
			<Head title="Contact Us" />
			
			
		<div className={blogStyles.formContainer}>
           
           
		   <form className="formStyles"
		   method="post" 
		   netlify-honeypot="bot-field" 
		   data-netlify="true" 
		   name="contact">

				   <input type="hidden" name="bot-field" />
				   <input type="hidden" name="form-name" value="contact" />

				   <input 
				   class={blogStyles.item1}
				   type="text" 
				   name="name" 
				   placeholder=" Name" />

				   <input 
				   class={blogStyles.item1}
				   type="email" 
				   name="email" 
				   placeholder="email " />

				   <textarea 
				   class={blogStyles.item2}
				   type="text" 
				   name="message" 
				   placeholder=" Message" 
				  />
				   
				   <button type="Submit">Send</button>
				   
		   	</form>
		</div>
   </Layout>
		)
}

export default ContactPage