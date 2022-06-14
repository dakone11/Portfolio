import React from 'react'
import "../hojas-de-estilo/Showproject.css"
import Zoom from "react-reveal/Zoom";

const Contentproject = (props) => {
  return (
    <>
    <div className="container_project">
        <div className="right_description">
          <div className="content_description">
            {props.titulo1 && (
              <h2>
                {props.titulo1} <span>Design</span>
              </h2>
            )}
            {props.subtitulo1 && <h3>{props.subtitulo1}</h3>}
            <p>{props.descrip1}</p>
            <p>{props.descrip2}</p>
            <p>{props.descrip3}</p>
          </div>
        </div>
        <Zoom>
          <div className="left_description">
            {props.imagendescription1 && (
              <img
                src={require(`../imagenes/description-${props.imagendescription1}.png`)}
                alt="project image from  portfolio carlos"
              />
            )}
          </div>
        </Zoom>
      </div>
      <div className="container_project">
      <Zoom>
          <div className="left_description">
            {props.imagendescription2 && (
              <img
                src={require(`../imagenes/description-${props.imagendescription2}.png`)}
                alt="project image from  portfolio carlos"
              />
            )}
          </div>
        </Zoom>
        <div className="right_description">
          <div className="content_description">
            {props.titulo2 && (
              <h2>
                {props.titulo2} <span>Design</span>
              </h2>
            )}
            {props.subtitulo2 && <h3>{props.subtitulo2}</h3>}
            <p>{props.descrip4}</p>
            <p>{props.descrip5}</p>
            <p>{props.descrip6}</p>
          </div>
        </div>
        
      </div>
      
      </>
  )
}

export default Contentproject;