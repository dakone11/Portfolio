import "../hojas-de-estilo/Abouttext.css";
import Zoom from "react-reveal/Zoom";
import React from "react";
import Skills from "./Skills";
import { THEME } from "../constants/theme.constants";

function AboutText( props ) {
  const { theme } = props;

  return (
    <>
      <div className="intro_about">
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
        <Zoom>
          <div className="text_about">
            <h2>
              {" "}
              <span>My</span> History
            </h2>
              <p>
              I'm Carlos Martínez Ripollés. Web and multimedia designer. I started my studies
                  related to design with a professional training degree in photography and image,
                  a few years later I started a multimedia design course at ESAT where I learned how to use graphic design, animation and
                  to use graphic design, animation and web design tools. Finally, I studied a
                    master's degree in web programming and UI UX where I have specialized and deepened
                    and I have deepened in these areas.
              </p>
            <h2>
              {" "}
              <span>About</span> Design
            </h2>
               <p>
               Ability to know the concepts of each project. Working with web UX / UI sketches in Figma platform.
                  Design of all types of front-ends for web, e-commerce and applications and (UI). Design of banners
                   and email marketing campaigns as well as corporate identity design and derivatives depending on the nature of the project. 
                   depending on the nature of the project. I like to think about the designs for a better orientation in the constant improvement of the
                    in the constant improvement of the user experience (UX) and I'm interested in technology and 
                    the latest trends.

               </p>
          </div>
        </Zoom>
        <Zoom>
          <div className="text_about">
              <h2>
                {" "}
                <span>About</span> Developer
              </h2>
             <p>
             Layout of web applications. Implementation of responsive designs
              with the programming languages HTML5, CSS3, JavaScript. and use of the React library.</p> 
              <p>
              Through the development tool: Visual
              Studio Code I try to develop following clean code principles, I also know how to use figma and code design.
              I like to watch programming tutorials and follow social networks to learn or ask questions.
              </p>
             
              <h2>
                {" "}
                <span>My</span> Hobbies
              </h2>
              <p>
              I am an active person and I like to travel to remote places, I have fulfilled my dream by kayaking in the Amazon, it was unforgettable!</p>
              <p>
              I like to go to concerts and listen to music while I design, but when I'm programming I need silence.
              </p>
             <p>
             I like to draw since I was a child and I do digital and hand drawn illustrations, graffiti lover.
             </p>
             
            
          </div>
        </Zoom>
        <Skills theme={props.theme}/>
      </div>
    </>
  );
}
export default AboutText;