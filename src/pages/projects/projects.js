import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import Data from '../../datosMenuProject/datosMenuProject';
import Card from "../../componentes/Card";
import Buttons from "../../componentes/Buttons";
import '../../hojas-de-estilo/project.css'

 
 const Projects = () => {
  const navigate = useNavigate ();
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  const onRedirectCard = (path, nextInfoPage, previousInfoPage) => {
    const info = {path: path, nextInfo: nextInfoPage, previousInfo: previousInfoPage};
    navigate(path, { state: info } );
  }

   return (
    
      <div className="containerlist">
       <img className="triangulo4" src={ require('../../imagenes/triangulo1.png')} alt=''/>
        <div>
          <h1>Works <span>done</span></h1>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Card items={item} onRedirect={onRedirectCard} />
        </div>
      </div>
    
   )
 }
 
 export default Projects