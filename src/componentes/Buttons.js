import React from 'react'
import Data from '../datosMenuProject/datosMenuProject';
import '../hojas-de-estilo/Buttons.css';
 

const Buttons = ({ filterItem, setItem, menuItems }) => {
    return (
      <>
        <div className="worksmenu">
          {menuItems.map((Val, id) => {
            return (
              <button
                className="buttonworks" onClick={() => filterItem(Val)} key={id}>
                {Val}
              </button>
            );
          })}
          <button className="buttonworks_all" onClick={() => setItem(Data)}>
            All
          </button>
  
        </div>
      </>
    );
  };
export default Buttons;
