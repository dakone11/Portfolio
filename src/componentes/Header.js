
import "../hojas-de-estilo/Header.css";
import Zoom from "react-reveal/Zoom";
import React from "react";
import Typed from "react-typed";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { URL } from '../constants/url.constants'; 

function Header(props) {
  const textLines = [
    `Hey! Check out my projects`,
    `work made with love`,
    `You can also send me an <a href="mailto:dakone11@gmail.com"> email  here!</a>`,
  ];

  return (
    <div className="container">
      <div className="intro-container">
        <img
          className="carlos-imagen"
          src={require(`../imagenes/header-${props.imagen}.png`)}
          alt="imagen de carlos frontal"
        />
        <img
          className="triangulo1"
          src={require("../imagenes/triaungulo2-dark.png")}
          alt="imagen de un triangulo"
        />
        <img
          className="triangulo2"
          src={require("../imagenes/triangulo1-dark.png")}
          alt="imagen de un triangulo"
        />
        <img
          className="triangulo3"
          src={require("../imagenes/triangulo1-dark.png")}
          alt="imagen de un triangulo"
        />
      </div>
      <Tilt>
        <div className="text-intro">
        <p className="nombre">Carlos Martínez Ripollés</p>
        <Zoom>
          <h1 className="tittle">{props.titulo}</h1>
          </Zoom>
          <div className="buttons">
            
             <Link to={URL.PROJECTS}>My Projects</Link>
             <Link  className="cta" to={URL.CONTACT}>Get in touch</Link>
          
          </div>
          <div className="text-effect">
            <p>
              <Typed strings={textLines} typeSpeed={60} />
            </p>
          </div>
        </div>
      </Tilt>
      <div className="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
export default Header;
