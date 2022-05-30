import "../hojas-de-estilo/Footer.css";
import React from "react";
import Fade from "react-reveal/Fade";
import { FaCodepen, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container-f">
        <div className="heading-wrapper">
          <div className="heading">
            <img
              className="triangulo3"
              src={require("../imagenes/triangulo1.png")}
              alt=""
            />
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">Please, use the form below</p>
          </div>

          <div className="social">
            <img
              className="triangulo4"
              src={require("../imagenes/triangulo1.png")}
              alt=""
            />
            <a target="_blank" href="/">
              <FaTwitter />
            </a>
            <a target="_blank" href="/">
              <FaCodepen />
            </a>
            <a target="_blank" href="/">
              <FaGithub />
            </a>
            <a target="_blank" href="/">
              <FaYoutube />
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
