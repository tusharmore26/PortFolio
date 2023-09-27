import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Ajay6600', 'template_1p3f71h', form.current, 'UHfJmg8fUdnQfLYRZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact</h2>

     <div className="container contact_container">
      <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>tusharmore938@gmail.com</h5>
            <a href="mailto:tusharmore938@gmail.com">Send a Message</a>
          </article>

          <article className='contact_option'>
            <BsInstagram className='contact_option-icon'/>
            <h4>Instagram</h4>
            <h5>tushar._here</h5>
            <a href="https://www.instagram.com/tushar._here/">Send a Message</a>
          </article>
         
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+917721066904</h5>
            <a href="https://api.whatsapp.com/send?phone+917721066904">Send a Message</a>
          </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Enter Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
     </div>
    </section>
  )
}

export default Contact
