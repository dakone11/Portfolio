import React from "react";
import Fade from "react-reveal/Fade";
import { FaCodepen, FaGithub,FaLinkedin, FaBehance } from "react-icons/fa";
import { THEME } from "../constants/theme.constants";
import "../hojas-de-estilo/Footer.css";

function Footer(props) {
  const { theme } = props;
  return (
    <footer>
      <div className="container-f">
        <div className="heading-wrapper">
          <div className="heading">
            {theme === THEME.LIGHT ? (
              <img
                className="triangulo3"
                src={require("../imagenes/triangulo1.png")}
                alt=""
              />
            ) : (
              <img
                className="triangulo3"
                src={require("../imagenes/triangulo1-dark.png")}
                alt=""
              />
            )}
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">Please, use the form below</p>
          </div>

          <div className="social">
            {theme === THEME.LIGHT ? (
              <img
                className="triangulo4"
                src={require("../imagenes/triangulo1.png")}
                alt=""
              />
            ) : (
              <img
                className="triangulo4"
                src={require("../imagenes/triangulo1-dark.png")}
                alt=""
              />
            )}
            <a target="_blank" 
            href="https://www.linkedin.com/in/carlos-mart%C3%ADnez-ripoll%C3%A9s-1a2889a9/" 
            rel="noopener">
              <FaLinkedin />
            </a>

            <a
              target="_blank"
              href="https://codepen.io/your-work/"
              rel="noopener"
            >
              <FaCodepen />
            </a>
            <a
              target="_blank"
              href="https://github.com/dakone11?tab=repositories"
              rel="noopener"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://www.behance.net/carlosdako"
              rel="noopener"
            >
              <FaBehance />
            </a>
          </div>
        </div>
        <Fade bottom>
          <form id="contact-form" action="#">
            <input placeholder="Name" name="name" type="text" required />
            <input placeholder="Email" name="email" type="email" required />
            <textarea placeholder="Message" type="text" name="message" />
            <input
              className="button"
              id="submit"
              value="Submit"
              type="submit"
            />
          </form>
        </Fade>
      </div>
    </footer>
  );
}
export default Footer;
