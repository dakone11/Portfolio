import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import "../../hojas-de-estilo/Showproject.css";

const ShowProject = (props) => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <div className="container_project">
        <div className="left_intro">
          <Zoom>
            <img
              src={require(`../../imagenes/intro-${props.imagenintro}.png`)}
              alt="imagen de carlos frontal"
            />
          </Zoom>
        </div>

        <div className="right_intro">
          <Zoom>
            <div className="content">
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
              <p>{props.overview}</p>
              <div className="enlaces">
                <a href="#"> Web</a>
                <a href="#">Github</a>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
      <div className="container_project">
        <div className="right_description">
          <div className="content_description">
            <h2>
              {props.titulo2}
              <span>Design</span>
            </h2>

            <h3>{props.subtitulo1}</h3>
            <p>{props.descrip1}</p>
            <p>{props.descrip2}</p>
            <p>{props.descrip3}</p>
          </div>
        </div>
        <Zoom>
          <div className="left_description">
            <img
              src={require(`../../imagenes/description-${props.imagendescription1}.png`)}
              alt="project image from  portfolio carlos"
            />
          </div>
        </Zoom>
      </div>

      <div className="container_project">
        <Zoom>
          <div className="left_description">
            <img
              src={require(`../../imagenes/description-${props.imagendescription2}.png`)}
              alt="project image from  portfolio carlos"
            />
          </div>
        </Zoom>
        <div className="right_description">
          <div className="content_description">
            <h2>
              {props.titulo3}
              <span>Design</span>
            </h2>

            <h3> {props.subtitulo2}</h3>
            <p>{props.descrip4}</p>
            <p>{props.descrip5}</p>
            <p>{props.descrip6}</p>
          </div>
        </div>
      </div>
      <div className="container_project">
        <div className="right_description">
          <div className="content_description">
            <h2>
              {props.titulo4}
              <span>Design</span>
            </h2>

            <h3>{props.subtitulo3}</h3>
            <p>{props.descrip7}</p>
            <p>{props.descrip8}</p>
            <p>{props.descrip9}</p>
          </div>
        </div>
        <Zoom>
          <div className="left_description">
            <img
              src={require(`../../imagenes/description-${props.imagendescription3}.png`)}
              alt="project image from  portfolio carlos"
            />
          </div>
        </Zoom>
      </div>

      <div className="pagination">
        <div className="pagination_left">
          {state.previousInfo && state.previousInfo.title && (
            <>
              <p> PREVIOUS PROJECT</p>
              <i className="fa-solid fa-chevron-left"></i>
              <Link to={`${state.previousInfo.path}`}>{state.previousInfo.title}</Link>
            </>
          )}
        </div>
        <div className="pagination_right">
          {state.nextInfo && state.nextInfo.title && (
            <>
              <p> NEXT PROJECT</p>
              <Link to={`${state.nextInfo.path}`}>{state.nextInfo.title}</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowProject;
