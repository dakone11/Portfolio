import React from "react";
import ShowProject from "./ShowProject";
import Contentproject from "../../componentes/Contentproject";
import { useEffect } from 'react';

const Itevalencia = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <ShowProject
        imagenintro="ite"
        titulo="Ite Valencia"
        tools1=""
        tools2="Html"
        tools3="CSS"
        tools4="Illustrator"
        tools5="Photoshop"
        url=""
        texturl=""
        url2="http://www.itevalencia.es/"
        texturl2="web"
        año="Project created in 2016"
        overview="Custom corporate identity design and custom web design,
                  responsive design, image and content creation, The project is collaborative, I was in charge of HTML, CSS, text and visual content. The other party was in charge of making the admin for the blog and JS content."
      />
     <Contentproject
        titulo1="Web"
        subtitulo1="Corporate web design"
        descrip1="ITE Valencia is formed by technicians specialized in Building and Industry. The web collaboration with binarycolossus I have been in charge of responsive design with html and css creating the content of both images and text and prototyping."
        descrip2="It is tailored to customer needs with a direct contact with the same, finally a functional website with a great design and optimized to offer a unique experience to the visitor, improving the usability of the web. Facilitating the navigation between its services"
        descrip3="We used a clean design according to the corporate image with details in gold and white, different sliders, parallax, fixed menu, carousel. On the other hand, the rest of the team made the JS functions and change html to php and admin for the blog."
        imagendescription1="ite2"
        titulo2="Branding"
        subtitulo2=""
        descrip4="Logo design with outline style, the isotype is formed by a single line and a kind of construction landscape and sans-serif typography, which gives it a futuristic and professional look very appropriate in the real estate and architecture sector."
        descrip5="The brand image is easy to read, the typeface used is: Josefin Sans, for the slogan we have also used the same typeface but in a light and italic version. clean and elegant."
        descrip6="Delivery of the product for digital use and printing."
        imagendescription2="ite"

       />
      
      
    </div>
  );
};

export default Itevalencia;
