import React from 'react'
import CTA from './CTA'
import me from '../../asset/me1.jpeg'
import Typewriter from "typewriter-effect";
import HearderSocial from './HearderSocial'
import { ParticleBackground } from '../ParticalBackground/ParticleBackground'
import './header.css'
function Header() {
  return (
    <div className=" header_container">
      <ParticleBackground/>

      <h5>Hello I'm</h5>
      <h1>TUSHAR MORE</h1>
      <h5 className='text-light'>
      <Typewriter
 
 onInit={(typewriter) => {
     typewriter
         
         .typeString("Software Engineer")
         .pauseFor(1000)
         .deleteAll()
         .typeString("Learner")
         .pauseFor(1000)
         .deleteAll()
         .typeString("FullStack Developer")

         .start()
         
         
 }}
/>
      </h5>
      <CTA/>
      <HearderSocial/>
      <div className="me">
        <img src={me} alt="me" />
      </div>
      <a href="#contact" className='scroll_down'>Scroll Down</a>
     
    </div>
  )
}

export default Header
