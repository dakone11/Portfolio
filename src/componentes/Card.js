import React from "react";
import "../hojas-de-estilo/Card.css";

const Card = ({ item }) => {
  return (
    <div className="containerlist">
      {item.map((Val) => {
        return (
          <div
            style={{ backgroundImage: `url(${Val.image})` }}
            className="card"
            key={Val.id}
          >
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
};
export default Card;
