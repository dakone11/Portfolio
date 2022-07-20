import React from 'react'
import ShowProject from './ShowProject';
import Contentproject from '../../componentes/Contentproject';
import { useEffect } from 'react';
const Aboutme = () => {
        useEffect(() => {
                window.scrollTo(0, 0)
              }, [])
  return (
    <div>
        <ShowProject
        imagenintro="aboutme"
        titulo="About me"
        tools1="Figma"
        tools2="Html"
        tools3="CSS"
        tools4=""
        tools5=""
        url="https://github.com/dakone11/proyecto_alpha"
        texturl="Github"
        url2="https://frontend.esatid3-2021.com/carlosm/"
        texturl2="web"
        url3="https://www.figma.com/proto/PtgaRCXTmWO5lOP5qij5lU/Untitled?node-id=9%3A586&scaling=min-zoom&page-id=4%3A980"
        texturl3="FIGMA"
        año="Project created in 2022"
        
        overview="During the first class project we have designed a one page website with the following techniques and theories: Usability trends, use of color, typesetting etc..
                We have learned how to program HTML and CSS from O. "
        
      />
      
       <Contentproject
        titulo1="One page"
        subtitulo1="Objective"
        descrip1="Creation of an online piece that will be your business card both personally and professionally.
                personal as well as professional."
        descrip2="To develop a simple but real digital project, from start to finish (prototyping and design, digital strategy and Web development)."
        descrip3="Offer you a scenario where you have to communicate your skills and abilities, exposing them in a coherent and professional way.
                of course it must be correctly visualized on desktop and mobile."
        imagendescription1="aboutme"
        titulo2=""
        subtitulo2="How start proyect"
        descrip4="First step, search for information on google, look for references and start to get ideas or concepts.Next step, from the Miro tool, group the information, start to define the ideas in prototypes, colors, typographies..."
        descrip5="Third step is to design the project with Figma trying to be faithful to the idea.
Then start programming in Html and create styles with CSS."
        descrip6="Finally upload the web to a server by FTP."
        imagendescription2="aboutme2"
       />

    </div>
  )
}

export default Aboutme;