import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/petsafty.png'
import IMG3 from '../../asset/workoutBuddy.jpeg'
import IMG2 from '../../asset/chatboo.png'


function Portfolio() {
  const data =[
    {
      id:1,
      image:IMG1,
      title:"Free Qr Genarator for PET",
      tech:['php','html','css'],
      github:'https://github.com/tusharmore26/PetSafty',
      demo:'https://petsafty.000webhostapp.com/',
    },
    {
      id:2,
      image:IMG2,
      title:"Online chat Bot ",
      tech:['php','html','css','js','ajax'],
      github:'https://github.com/tusharmore26/ChatBoo',
      demo:'http://chatboo.000webhostapp.com/bot.php',
    },
    {
      id:3,
      image:IMG3,
      title:"Manage Your Workout With WorkoutBuddy ",
      tech:['html','css','react'],
      github:'https://github.com/tusharmore26/WorkoutBuddy',
      demo:'https://workout-buddy-gamma.vercel.app/login',
    },
    
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,tech,github,demo}) =>{
            return(
              <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
              <img src={image} alt="PetSafty" />
              </div>
              <h3>{title}</h3>
              <div className="teck_stack">
                {
                  tech.map((stack)=>{
                    return <span className={stack}>{stack}</span>
                  })
                }
                
              </div>
              <div className="portfolio_item-cta">
              <a href={github} className='btn'target='_blank'>Git Hub</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
       
        
        {/* <article className='portfolio_item'>
          <div className="portfolio_item_imag">
          <img src={IMG1} alt="PetSafty" />
          </div>
          <h3>This is Portfolio item title</h3>
          <div className="teck_stack">
            <span className='react'>react</span>
            <span className='php'>php</span>
            <span className='html'>html</span>
            <span className='css'>css</span>
            <span className='js'>js</span>
            <span className='ml'>ml</span>
            <span className='aframe'>Aframe</span>
          </div>
          <div className="portfolio_item-cta">
          <a href="https://gthub.com/" className='btn'target='_blank'>Git Hub</a>
          <a href="https://gthub.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
      
        

      </div>
    </section>
  )
}

export default Portfolio
