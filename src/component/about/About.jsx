import React from 'react'
import "./about.css"
import ME from '../../asset/me2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {TfiHeadphoneAlt} from 'react-icons/tfi'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'
function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>8 Completed</small>
            </article>

            <article className='about_card'>
              <TfiHeadphoneAlt className='about_icon'/>
              <h5>Support</h5>
              <small>Online 24/7</small>
            </article>


          </div>
          <p>I am a passionate Information Technology Engineering student at Genba Sopanaro Moze College Of Engineering, Pune. With a keen interest in exploring new technologies, I am constantly amazed by the progress we, as a human species, have made in recent years.

My primary focus lies in web development, where I harness the power of JavaScript to create dynamic and interactive websites. I find great joy in experimenting with different frameworks and libraries, such as React,NodeJS, Django to enhance the user experience and deliver efficient solutions.

Apart from web development, I am also enthusiastic about UI/UX.</p>
<p>  I often engage in practicing Data Structures and Algorithms (DSA) on platforms like Leetcode. This helps me sharpen my problem-solving skills and stay updated with the latest algorithms and data structures.

I believe that the world of technology is a never-ending learning journey, and I am committed to expanding my knowledge and skills to contribute to its growth.</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            <div className="about_socials">
             <a href="https://www.linkedin.com/in/tushar-more-0b298524a/" target='_blank'><BsLinkedin/></a>
             <a href="https://github.com/tusharmore26" target='_blank'><BsGithub/></a>
             <a href="https://www.instagram.com/tushar._here/" target='_blank'><BsInstagram/></a>
           </div>

        </div>
      </div>
    </section>
  )
}

export default About
