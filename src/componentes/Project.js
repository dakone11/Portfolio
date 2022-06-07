import "../hojas-de-estilo/project.css";
import Fade from "react-reveal/Fade";
import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { URL } from "../constants/url.constants";

function Project() {
  
  return (
    <div className="menu">
      <Fade left>
        <div className="menu_all_projects">
          <p>
            view <span>projects</span>
          </p>
          <Link to={URL.PROJECTS}> <CgMenuGridR /></Link>
        </div>
      </Fade>

      <Fade bottom>
        <div className="menu__item">
          <BsChevronDoubleRight />
          <Link className="menu__item-link" to={URL.POWERFANS}>
           <Fade
            bottom cascade>POWERFANS
          </Fade>
          </Link> 
          <img
            className="menu__item-img"
            src={require("../imagenes/show-project1.png")}
            alt=""
          />
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>POWERFANS</span>
              <span>POWERFANS</span>
              <span>POWERFANS</span>
              <span>POWERFANS</span>
            </div>
          </div>
          <Fade top>
            <div className="category">
              <div className="pl pl-origami"></div>
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
              <span>FIGMA</span>
            </div>
          </Fade>
        </div>
      </Fade>
      <Fade bottom>
        <div className="menu__item">
          <BsChevronDoubleRight />
          <Link className="menu__item-link" to={URL.ITEVALENCIA}>
           <Fade
            bottom cascade>ITE VALENCIA
          </Fade>
          </Link> 
          <img
            className="menu__item-img"
            src={require("../imagenes/show-project2.png")}
            alt=""
          />
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>ITE VALENCIA</span>
              <span>ITE VALENCIA</span>
              <span>ITE VALENCIA</span>
              <span>ITE VALENCIA</span>
            </div>
          </div>
          <Fade top>
            <div className="category">
              <div className="pl pl-origami"></div>
              <span>HTML</span>
              <span>CSS</span>
              <span>BRANDING</span>
            </div>
          </Fade>
        </div>
      </Fade>
      <Fade bottom>
        <div className="menu__item">
          <BsChevronDoubleRight />
          <Link className="menu__item-link" to={URL.TAROT}>
           <Fade
            bottom cascade>TAROT S.M.
          </Fade>
          </Link> 
          <img
            className="menu__item-img"
            src={require("../imagenes/show-project3.png")}
            alt=""
          />
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>TAROT</span>
              <span>TAROT SABIDURÍA METAFÍSICA</span>
              <span>TAROT SABIDURÍA METAFÍSICA</span>
              <span>TAROT SABIDURÍA METAFÍSICA</span>
            </div>
          </div>
          <Fade top>
            <div className="category">
              <div className="pl pl-origami"></div>
              <span>HTML</span>
              <span>CSS</span>
              <span>After effects</span>
            </div>
          </Fade>
        </div>
      </Fade>
      <Fade bottom>
        <div className="menu__item">
          <BsChevronDoubleRight />
          <Link className="menu__item-link" to={URL.ABOUTME}>
           <Fade
            bottom cascade>ABOUT ME
          </Fade>
          </Link> 
          <img
            className="menu__item-img"
            src={require("../imagenes/show-project4.png")}
            alt=""
          />
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>ABOUT ME</span>
              <span>ABOUT ME</span>
              <span>ABOUT ME</span>
              <span>ABOUT ME</span>
            </div>
          </div>
          <Fade top>
            <div className="category">
              <div className="pl pl-origami"></div>
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
              <span>UI UX</span>
            </div>
          </Fade>
        </div>
      </Fade>
      <Fade bottom>
        <div className="menu__item">
          <BsChevronDoubleRight />
          <Link className="menu__item-link" to={URL.ADVERSPOT}>
           <Fade
            bottom cascade>ADVERSPOT
          </Fade>
          </Link> 
          <img
            className="menu__item-img"
            src={require("../imagenes/show-project5.png")}
            alt=""
          />
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>ADVERSPOT</span>
              <span>ADVERSPOT</span>
              <span>ADVERSPOT</span>
              <span>ADVERSPOT</span>
            </div>
          </div>
          <Fade top>
            <div className="category">
              <div className="pl pl-origami"></div>
              <span>UI UX</span>
              <span>After Effects</span>
              <span>BRANDING</span>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
}
export default Project;
