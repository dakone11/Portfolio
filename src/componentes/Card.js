import React from 'react'
import '../hojas-de-estilo/Card.css'
import { SiAdobephotoshop,SiCss3,SiFigma,SiGithub,SiHtml5,SiReact,SiVisualstudiocode,SiSass,SiPhp,SiJavascript } from "react-icons/si";

const Card = ({ item }) => {            
return (
<div className='containerlist'>
  {item.map((Val) => {
            return (
    <div style={{ backgroundImage: `url(${Val.image})` }} className="card" key={Val.id}>
        <div className="border">
          <h1>{Val.title}</h1>
          <button>Go Project </button>
          <ul>
            <li>{Val.tags}</li>
            <li>{Val.tags1}</li>
            <li>{Val.tags2}</li>
            <li>{Val.tags3}</li>
            <li>{Val.tags4}</li>
          </ul>
        </div>
    </div>
    );
          })}
 </div>
  );
}
export default Card;

