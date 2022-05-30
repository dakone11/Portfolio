import React from "react";
import "../hojas-de-estilo/Skills.css";
//import { FaCodepen,FaCss3,FaFigma,FaHtml5,FaPhp,} from 'react-icons/fa';
import {
  SiAdobephotoshop,
  SiCss3,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiReact,
  SiVisualstudiocode,
  SiSass,
  SiPhp,
  SiJavascript,
} from "react-icons/si";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

export const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="wall">
          <Zoom>
            <div className="skills-tittle">
              <h2>
                {" "}
                <span>My</span> Skills
              </h2>
            </div>
          </Zoom>
          <div className="v-boxes">
            <div className="box">
              <span className="tooltip">Photoshop</span>
              <h2>SKILLS</h2>
              <div className="box-face">
                <div className="box-text">
                  {" "}
                  <SiAdobephotoshop />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <SiAdobephotoshop />
                </div>
              </div>
            </div>
            <div className="box">
              <img
                className="triangulo3"
                src={require("../imagenes/triangulo1.png")}
                alt=""
              />
              <span className="tooltip">CSS</span>
              <h2>SKILLS</h2>
              <div className="box-face">
                <div className="box-text">
                  <SiCss3 />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <SiCss3 />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">FIGMA</span>
              <h2>SKILLS</h2>
              <div className="box-face">
                <div className="box-text">
                  <div className="box-text">
                    <SiFigma />
                  </div>
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <SiFigma />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">HTML</span>
              <h2>SKILLS</h2>
              <div className="box-face">
                <div className="box-text">
                  <SiHtml5 />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <SiHtml5 />
                </div>
              </div>
            </div>
          </div>
          <div className="v-boxes second">
            <div className="box">
              <span className="tooltip">VS code</span>
              <h2>SKILLS</h2>
              <div className="box-face">
                <div className="box-text">
                  <SiVisualstudiocode />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <SiVisualstudiocode />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">SCSS</span>
              <h2>SKILLS</h2>
              <div className="box-face">
                <div className="box-text">
                  <SiSass />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <SiSass />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">React</span>
              <h2>SKILLS</h2>
              <div className="box-face">
                <div className="box-text">
                  <SiReact />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <SiReact />
                </div>
              </div>
            </div>
          </div>
          <div className="v-boxes third">
            <div className="box">
              <span className="tooltip">PHP</span>
              <h2>SKILLS</h2>
              <div className="box-face">
                <div className="box-text">
                  <div className="box-text">
                    <SiPhp />
                  </div>
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <SiPhp />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">JavaScript</span>
              <h2>SKILLS</h2>
              <div className="box-face">
                <div className="box-text">
                  <div className="box-text">
                    <SiJavascript />
                  </div>
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <SiJavascript />
                </div>
              </div>
            </div>
          </div>
          <Fade right>
            <div className="v-boxes forth">
              <div className="box link">
                <div className="box-face">
                  <div className="box-text">
                    <SiGithub />
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};
export default Skills;
