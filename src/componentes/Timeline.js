import React from 'react';
import '../hojas-de-estilo/Timeline.css'
import Zoom from 'react-reveal/Zoom';


function Timeline () {
  return (
    
    <div className='timeline'>
    
      <ul>
        <li>
        <Zoom>
          <div className='content'>
            <h3>UX Designer & UI Designer</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               </p>
          </div>
          </Zoom>
          <div className='time'>
            <h4>UI & UX</h4>
          </div>
        </li>
        
        <li>
        <Zoom>
          <div className='content'>
            <h3>Frontend Developer</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               </p>
          </div>
          </Zoom>
          <div className='time'>
            <h4>FRONTEND</h4>
          </div>
        </li>
        
        <li>
        <Zoom>
          <div className='content'>
            <h3>Multimedia Designer</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               </p>
          </div>
          </Zoom>
          <div className='time'>
            <h4> MULTIMEDIA </h4>
          </div>
        </li>
        
        <li>
        <Zoom>
          <div className='content'>
            <h3>Branding</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
          </div>
          </Zoom>
          <div className='time'>
            <h4>BRANDING</h4>
          </div>
        </li>
        
        <div style={{clear:'both'}}></div>
       
      </ul>
    </div>

    

);
}
export default Timeline;