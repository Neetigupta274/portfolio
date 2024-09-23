import React from 'react'
import "./Contact.css"
  
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  return (
    <div>
      <div className='con2'>
       <div className='con'>
        <h1><span>Get in </span>Touch</h1>
       </div>
       <form>
        <input type="text" placeholder='Your Name'/>
        <input type="text" placeholder='Your Email'/>
        <textarea row="2" col="4" placeholder="Your Message"/>

        <button>Send Message</button>
        </form>
        <div className='icon'>
        <a>  <i className='icon'><GitHubIcon className='icon2'/> </i></a>
           <a> <i className='icon'><FacebookIcon className='icon2' /> </i></a>
            <a><i className='icon'> <MailIcon className='icon2'/></i></a>
            <a><i className='icon'> <LinkedInIcon className='icon2'/></i></a>
        </div>
       </div>
    </div>
  )
}
