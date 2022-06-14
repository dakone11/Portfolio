import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import "../../hojas-de-estilo/Showproject.css";
import { MdDateRange } from "react-icons/md";

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
                {props.url && (
                  <a
                    href={props.url}
                    className="art-link art-color-link art-w-chevron"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {props.texturl}
                  </a>
                )}
                {props.url2 && (
                  <a
                    href={props.url2}
                    className="art-link art-color-link art-w-chevron"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {props.texturl2}
                  </a>
                )}
                {props.url3 && (
                  <a
                    href={props.url3}
                    className="art-link art-color-link art-w-chevron"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {props.texturl3}
                  </a>
                )}
              </div>
              <div className="yeardate">
                <MdDateRange />

                {props.año && <p>{props.año}</p>}
              </div>
            </div>
          </Zoom>
        </div>
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
