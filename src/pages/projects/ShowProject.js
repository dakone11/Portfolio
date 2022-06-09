import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import "../../hojas-de-estilo/Showproject.css";
import Carrousel from "../../componentes/Carrousel";
import {
  MdDateRange
} from "react-icons/md";

const ShowProject = (props) => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <div className="container_project">
        <div className="left_intro">
          <Zoom>
            {props.imagenintro && (
              <img
                src={require(`../../imagenes/intro-${props.imagenintro}.png`)}
                alt="project image from  portfolio carlos"
              />
            )}
          </Zoom>
        </div>

        <div className="right_intro">
          <Zoom>
            <div className="content">
              {props.titulo && <h1>{props.titulo}</h1>}

              <div>
                <ul>
                  {props.tools1 && <li>{props.tools1}</li>}
                  {props.tools2 && <li>{props.tools2}</li>}
                  {props.tools3 && <li>{props.tools3}</li>}
                  {props.tools4 && <li>{props.tools4}</li>}
                  {props.tools5 && <li>{props.tools5}</li>}
                  {props.tools6 && <li>{props.tools6}</li>}
                </ul>
              </div>
              <h3>Overview</h3>
              <p>{props.overview}</p>
              <div className="enlaces">
              {props.url && 
                <a
                  href={props.url}
                  className="art-link art-color-link art-w-chevron"
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.texturl} 
                </a>

              }
              {props.url2 && 
                <a
                  href={props.url2}
                  className="art-link art-color-link art-w-chevron"
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.texturl2} 
                </a>

              }
              {props.url3 && 
                <a
                  href={props.url3}
                  className="art-link art-color-link art-w-chevron"
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.texturl3} 
                </a>

              }
               </div>
               <div className="yeardate"><MdDateRange/>
              
                {props.año && <p>{props.año}</p>}
              </div>
            </div>
          </Zoom>
        </div>
      </div>
      {props.slider && <Carrousel />}

      <div className="container_project">
        <div className="right_description">
          <div className="content_description">
            {props.titulo2 && (
              <h2>
                {props.titulo2} <span>Design</span>
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
                src={require(`../../imagenes/description-${props.imagendescription1}.png`)}
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
                src={require(`../../imagenes/description-${props.imagendescription2}.png`)}
                alt="project image from  portfolio carlos"
              />
            )}
          </div>
        </Zoom>
        <div className="right_description">
          <div className="content_description">
            {props.titulo3 && (
              <h2>
                {props.titulo3} <span>Design</span>
              </h2>
            )}

            {props.subtitulo2 && <h3>{props.subtitulo2}</h3>}
            <p>{props.descrip4}</p>
            <p>{props.descrip5}</p>
            <p>{props.descrip6}</p>
          </div>
        </div>
      </div>
      <div className="container_project">
        <div className="right_description">
          <div className="content_description">
            {props.titulo4 && (
              <h2>
                {props.titulo4} <span>Design</span>
              </h2>
            )}

            {props.subtitulo3 && <h3>{props.subtitulo3}</h3>}
            <p>{props.descrip7}</p>
            <p>{props.descrip8}</p>
            <p>{props.descrip9}</p>
          </div>
        </div>
        <Zoom>
          <div className="left_description">
            {props.imagendescription3 && (
              <img
                src={require(`../../imagenes/description-${props.imagendescription3}.png`)}
                alt="project image from  portfolio carlos"
              />
            )}
          </div>
        </Zoom>
      </div>

      <div className="container_project">
      <Zoom>
          <div className="left_description">
            {props.imagendescription4 && (
              <img
                src={require(`../../imagenes/description-${props.imagendescription4}.png`)}
                alt="project image from  portfolio carlos"
              />
            )}
          </div>
        </Zoom>
        <div className="right_description">
          <div className="content_description">
            {props.titulo5 && (
              <h2>
                {props.titulo5} <span>Design</span>
              </h2>
            )}

            {props.subtitulo4 && <h3>{props.subtitulo4}</h3>}
            <p>{props.descrip10}</p>
            <p>{props.descrip11}</p>
            <p>{props.descrip12}</p>
          </div>
        </div>
        
      </div>
      <div className="container_project">
      
        <div className="right_description">
          <div className="content_description">
            {props.titulo6 && (
              <h2>
                {props.titulo6} <span>Design</span>
              </h2>
            )}

            {props.subtitulo5 && <h3>{props.subtitulo5}</h3>}
            <p>{props.descrip13}</p>
            <p>{props.descrip14}</p>
            <p>{props.descrip15}</p>
          </div>
        </div>
        <Zoom>
          <div className="left_description">
            {props.imagendescription5 && (
              <img
                src={require(`../../imagenes/description-${props.imagendescription5}.png`)}
                alt="project image from  portfolio carlos"
              />
            )}
          </div>
        </Zoom>
        
      </div>
      

      <div className="pagination">
        <div className="pagination_left">
          {state && state.previousInfo && state.previousInfo.title && (
            <>
              <p> PREVIOUS PROJECT</p>
              
              <Link to={`${state.previousInfo.path}`}>
                {state.previousInfo.title}
              </Link>
            </>
          )}
        </div>
        <div className="pagination_right">
          {state && state.nextInfo && state.nextInfo.title && (
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
