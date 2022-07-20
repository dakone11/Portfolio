import React from "react";
import ShowProject from "./ShowProject";
import Contentproject from "../../componentes/Contentproject";
import { useEffect } from 'react';

const Tarot = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <ShowProject
       imagenintro="tarot"
        titulo="Tarot Sabiduría Metafísica"
        tools1="social media"
        tools2="Html"
        tools3="CSS"
        tools4="After Effects"
        tools5="Photoshop"
        url=""
        texturl=""
        url2="http://www.itevalencia.es/"
        texturl2="web"
        año="Project created in 2018"
        overview="Custom corporate identity design and custom web design, responsive design, image, video and content creation, The project is collaborative with Binary Colosuss S.A, I was in charge of HTML, CSS, text and visual content.I also created the logo and off/online graphic pieces (banners and business cards). In addition to developing the online marketing. Implement the online marketing strategy and manage the different social networks for a year and succes more than 1.100 followers. my colleagues took care of the backend, it is a manageable website with a control panel for the blog."
      />
    <Contentproject
        titulo1="Web"
        subtitulo1="Corporate web design"
        descrip1="The Tarot technical team is made up of the best tarot readers, with specific training and extensive professional experience.. The web collaboration with binarycolossus I have been in charge of responsive design with html and css creating the content of both images and text and prototyping."
        descrip2="i used a design according to the target audience, taking care of every detail with priority to contact directly facilitating usability, colors in purple tones representing mysticism, looping music, particles, parallax effect, fixed menu, carousel. On the other hand, the rest of the team made the JS functions and change from html to php and administration backend for the blog."
        descrip3=""
        imagendescription1="tarot"
        titulo2="Branding"
        subtitulo2="Corporate Branding design"
        descrip4="Logo design with outline style and serif typography, which gives mysticism and professional look very appropriate in the tarots industry."
        descrip5="The image of the brand is easy to relate to mysticism, it is a moon since it is a symbol of the metaphysical. The font used is: Optimus princes, clean and elegant. The logo is a single color and can be used in pink, white or black depending on the background on which it is used."
        descrip6="Delivery of the product for digital use and printing."
        imagendescription2="tarot2"

       />
    </div>
  );
};

export default Tarot;
