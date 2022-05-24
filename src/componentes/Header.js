
import '../hojas-de-estilo/Header.css'
import Fade from 'react-reveal/Fade';
import React from "react";
import Typed from "react-typed";
import Tilt from 'react-parallax-tilt';

function Header (props) {


  const textLines = [
    `Hey! Check out my projects`,
    `work made with love`,
    `You can also send me an <a href="mailto:dakone11@gmail.com"> email  here!</a>`

    
  ];
 
  

  
  return (
  

    <div className='container'>
        <div className="intro-container">
          
            <img className="carlos-imagen" src={ require( `../imagenes/header-${props.imagen}.png`)}  alt='imagen de carlos frontal' />
            <img className="triangulo1"  src={ require('../imagenes/triaungulo2.png')} alt=''/>
            <img className="triangulo2"  src={ require('../imagenes/triangulo1.png')} alt=''/>
            <img className="triangulo3" src={ require('../imagenes/triangulo1.png')} alt=''/>
        </div>
        <Tilt>
        <div className="text-intro">
       
            <h1 className='tittle'>{props.titulo}</h1>
            <p className='nombre'>Carlos Martínez Ripollés</p>
            <div className="buttons">
              <Fade top>
               <a href="#projects">my works</a>
              <a href="#contact" className="cta">get in touch</a>
              </Fade>
            </div>
            <div className="text-effect">
         
          <p>
          <Typed strings={textLines} typeSpeed={60} />
          </p>
            </div>
           
        </div>
        </Tilt>
          <div className='arrow'>
                  <span></span>
                  <span></span>
                  <span></span>

          </div>
         
    </div>

  );
}
export default Header;