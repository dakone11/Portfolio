import React from 'react'
import "../hojas-de-estilo/Video.css"
import { Zoom } from 'react-reveal'

export const Video = (props) => {
  return (
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

            <div className="video-responsive">
              {props.videoId && (
                <iframe
                  width="853"
                  height="480"
                  src={`https://www.youtube.com/embed/${props.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              )}
            </div>
          </div>
        </Zoom>
      </div>
  )
}
export default Video;
