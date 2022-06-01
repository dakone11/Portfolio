import React from "react";
import "../hojas-de-estilo/Timeline.css";
import Zoom from "react-reveal/Zoom";

function Timeline() {
  return (
    <div className="timeline">
      <ul>
        <li>
          <Zoom>
            <div className="content">
              <h3>UX Designer & UI Designer</h3>
              <p>
              Create high-fidelity prototypes and interfaces from a design system.
              I am comfortable with FIGMA and other design tools such as Photoshop.
              Prototyping, creation of user personas, participation in user testing
              </p>
            </div>
          </Zoom>
          <div className="time">
            <h4>UI & UX</h4>
          </div>
        </li>

        <li>
          <Zoom>
            <div className="content">
              <h3>Frontend Developer</h3>
              <p>
              Knowledge of responsive web layout HTML5, CSS3, Javascript, React, PHP, Wordpress, version control with GIT, use of preprocessors SCSS.
              </p>
            </div>
          </Zoom>
          <div className="time">
            <h4>FRONTEND</h4>
          </div>
        </li>

        <li>
          <Zoom>
            <div className="content">
              <h3>Multimedia Designer</h3>
              <p>
              Experience in video editing, knowledge of After Effects and the adobe package. Good use of composition and design, photo retouching.
              </p>
            </div>
          </Zoom>
          <div className="time">
            <h4> MULTIMEDIA </h4>
          </div>
        </li>

        <li>
          <Zoom>
            <div className="content">
              <h3>Branding</h3>
              <p>
              Create a corporate identity manual, define and justify its use of color and typography, know how to conceptualize and adapt the design to the corporate image of the company.
              </p>
            </div>
          </Zoom>
          <div className="time">
            <h4>BRANDING</h4>
          </div>
        </li>

        <div style={{ clear: "both" }}></div>
      </ul>
    </div>
  );
}
export default Timeline;
