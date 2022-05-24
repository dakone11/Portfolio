import React, { useState } from "react";
import Data from '../../datosMenuProject/datosMenuProject';
import Card from "../../componentes/Card";
import Buttons from "../../componentes/Buttons";
import '../../hojas-de-estilo/project.css'

 
 const Projects = () => {

  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

   return (
    
      <div className="containerlist">
        <div>
          <h1>Works <span>done</span></h1>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Card item={item} />
        </div>
      </div>
    
   )
 }
 
 export default Projects