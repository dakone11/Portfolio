import "../hojas-de-estilo/project.css";
import Fade from "react-reveal/Fade";
import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="menu">
      <Fade left>
        <div className="menu_all_projects">
          <p>
            view <span>projects</span>
          </p>
          <Link to="/Project"> <CgMenuGridR /></Link>
        </div>
      </Fade>

      <Fade bottom>
        <div className="menu__item">
          <BsChevronDoubleRight />
          <Link className="menu__item-link" to="/powerfans">POWERFANS</Link> 
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
              <span>UI UX</span>
            </div>
          </Fade>
        </div>
      </Fade>
      <Fade bottom>
        <div className="menu__item">
          <BsChevronDoubleRight />
          <a className="menu__item-link">ITE Valencia</a>
          <img
            className="menu__item-img"
            src={require("../imagenes/show-project2.png")}
            alt=""
          />
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>ITE Valencia</span>
              <span>ITE Valencia</span>
              <span>ITE Valencia</span>
              <span>ITE Valencia</span>
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
          <a className="menu__item-link">Tarot</a>
          <img
            className="menu__item-img"
            src={require("../imagenes/show-project3.png")}
            alt=""
          />
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Tarot</span>
              <span>Tarot Sabiduria metafisica</span>
              <span>Tarot Sabiduria metafisica</span>
              <span>Tarot</span>
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
          <a className="menu__item-link">Groobuy</a>
          <img
            className="menu__item-img"
            src={require("../imagenes/show-project4.png")}
            alt=""
          />
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Groobuy</span>
              <span>Groobuy</span>
              <span>Groobuy</span>
              <span>Groobuy</span>
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
          <a className="menu__item-link">Adverspot</a>
          <img
            className="menu__item-img"
            src={require("../imagenes/show-project5.png")}
            alt=""
          />
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Adverspot</span>
              <span>Adverspot</span>
              <span>Adverspot</span>
              <span>Adverspot</span>
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
