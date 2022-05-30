import React from "react";
import "../../hojas-de-estilo/Showproject.css";
import Zoom from "react-reveal/Zoom";

const ShowProject = (props) => {
  return (
    <div>
      <div class="container_project">
        <div class="left_intro">
        <Zoom>
        
        <img
         src={require(`../../imagenes/intro-${props.imagenintro}.png`)}
         alt="imagen de carlos frontal"
       />
        </Zoom>
        </div>
       
        <div class="right_intro">
        <Zoom>
          <div class="content">
         
            <h1>{props.titulo}</h1>
            <div>
              <ul>
                <li>{props.tools1}</li>
                <li>{props.tools2}</li>
                <li>{props.tools3}</li>
                <li>{props.tools4}</li>
                <li>{props.tools5}</li>
              </ul>
            </div>
            <h3>Overview</h3>
            <p>
            {props.overview}
            </p>
            <div class="enlaces">
              <a href="#"> Web</a>
              <a href="#">Github</a>
            </div>
          </div>
          </Zoom>
        </div>
       
      </div>
      

      <div class="container_project">
        <div class="right_description">
          <div class="content_description">
            <h2>{props.titulo2}</h2>

            <h3>{props.subtitulo1}</h3>
            <p>
            {props.descripción1}
            </p>
            <p>
            {props.descripción2}
            </p>
            <p>
            {props.descripción3}
            </p>
          </div>
        </div>
        <div className="left_description">
          <img
          src={require(`../../imagenes/description-${props.imagendescription1}.png`)}
          alt="imagen de carlos frontal"
        />
        </div>
      </div>
      <div className="container_project">
        <div className="left_description">
        <img
         src={require(`../../imagenes/description-${props.imagendescription2}.png`)}
         alt="imagen de carlos frontal"
       />
          
        </div>
        <div className="right_description">
        
        
          <div className="content_description">
         
            <h2> {props.titulo3}</h2>
            

            <h3> {props.subtitulo2}</h3>
            <p>
            {props.descripción4}
            </p>
            <p>
            {props.descripción5}
            </p>
            <p>
            {props.descripción6}
            </p>
          </div>
        </div>
      </div>
      <div className="pagination">
      
        <div className="pagination_left">
          <p> PREVIOUS PROJECT</p>
          <i className="fa-solid fa-chevron-left"></i>
          <a href="#"> Project Name</a>
        </div>
        <div className="pagination_right">
          <p> NEXT PROJECT</p>
          <a href="#">Project Name</a>
        </div>
      </div>
    </div>
  );
};

export default ShowProject;