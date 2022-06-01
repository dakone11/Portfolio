import "../hojas-de-estilo/Abouttext.css";
import Zoom from "react-reveal/Zoom";
import React from "react";
import Skills from "./Skills";

function AboutText() {
  return (
    <>
      <div className="intro_about">
        <img
          className="triangulo3"
          src={require("../imagenes/triangulo1.png")}
          alt=""
        />
        <Zoom>
          <div className="text_about">
            <h2>
              {" "}
              <span>My</span> History
            </h2>
              <p>
                  Im Carlos Martínez Ripollés. Web and multimedia designer. I started my studies
                  related to design with a professional photography and image training degree,
                  a few years later I started a multimedia design course at ESAT where I learned
                  to use graphic design, animation and web design tools. Lastly, I studied a
                    master's degree in web programming and UI UX where I have been specialized
                    and have delved deeper into these areas.
              </p>
            <h2>
              {" "}
              <span>About</span> Design
            </h2>
               <p>
                 Ability to know the concepts of each project. I work with UX / UI web sketches on the Figma platform.
                  Design of all kinds of front-ends for web, e-commerce and applications and (UI). Design of banners
                   and Email marketing campaigns as well as design of corporate identity and derivatives thereof 
                   depending on the nature of the project. I like to think about the designs for a better orientation
                    in the constant improvement of the user experience (UX) and I have an interest in technology and 
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
              I made layout of web applications. Application of responsive designs
              with the programming languages HTML5, CSS3, JavaScript. and use of the React library.</p> 
              <p>
              Through the development tool: Visual
              Studio Code I try to develop following clean code principles, I also know how to use figma and code the design.
              I like to watch programming tutorials and follow social networks to learn or ask questions
              </p>
             
              <h2>
                {" "}
                <span>My</span> Hobbies
              </h2>
              <p>
                I am an active person and I like to travel to remote places, I have fulfilled my dream kayaking in the Amazon, it was unforgettable!</p>
              <p>
                I like to go to concerts and listen to music while I design, but when I'm programming I need silence.
              </p>
             <p>
             I like to draw since I was a child and I do digital and hand illustrations, graffiti lover
             </p>
             
            
          </div>
        </Zoom>
        <Skills />
      </div>
    </>
  );
}
export default AboutText;