import '../hojas-de-estilo/Abouttext.css'
import Zoom from 'react-reveal/Zoom';
import React from "react";
import Skills from './Skills';


function AboutText () {

  return (
      <>
      
       <div className='intro_about'>
              <img className="triangulo3" src={ require('../imagenes/triangulo1.png')} alt=''/>
              <Zoom>
            <div className='text_about'>
            <h2> <span>My</span> History</h2>
                 Im Carlos Martínez Ripollés. Web and multimedia designer. I love traveling to remote places, I kayaking in the amazon and I fulfilled my dream, It was exciting.
                 I enjoy designing and drawing accompanied by Rock English and especially going to concerts. I work daily with all major creative software, be it Photoshop, Illustrator, 
                 Figma...
                 <h2> <span>About</span> Design</h2>
                  My approach to user interface design revolves around ensuring that design principles and decisions can be carried through from start to finish I plan, design,
                 build, test and replicate digital products.
                 I have the ability to create different multimedia content to connect through different channels with your potential users
            </div>
            </Zoom>
            <Zoom>
            <div className='text_about'>
              <p>
              <h2> <span>About</span> Developer</h2>
                  I consider myself a person with Creativity, empathy, organization, always open mind, and communicative.
                 I always try to be emotional and create a good relationship between the design and the user . 
                I complement more with UX UI for my design and illustration skills.
                <h2> <span>My</span> Hobbies</h2>
                 I am completing my knowledge React and JS  codes. I finish this year a Master for front end developer in ESAT Valencia..  Design and code! could not exist without the other. Having said that, I find joy in development by bringing design to life, which is why I would not classify myself as a "hardcore developer", but as one who can bring two philosophies and ways of thinking together. Being multidisciplinary is a big part of my ethics. Be it design, development, video or UX; I'm there!
              </p>
            </div>
            </Zoom>
              <Skills/>
        </div>

        </>
  );
}
export default AboutText;