import React from "react";
import "../hojas-de-estilo/Card.css";

const Card = ({ items, onRedirect }) => {

  const getInfoPage = (id, next) => { 
    const currentId = next ? id + 1 : id - 1;
    const item = items.find((item) => item.id === currentId);
    return item && item.title ? {title: item.title, path: item.path} : undefined;
  }

  const onLoadInfo = (id, path) => {
    const nextInfoPage = getInfoPage(id, true);
    const previousInfoPage = getInfoPage(id, false);
    onRedirect(path, nextInfoPage, previousInfoPage);
  }

  return (
    <div className="containerlist">
      {items.map((data) => {
        return (
          <div
            style={{ backgroundImage: `url(${data.image})` }}
            className="card"
            key={data.id}
            onClick={() => onLoadInfo(data.id, data.path)}
          >
            <div className="border">
              <h1>{data.title}</h1>
              <button>Go Project </button>
              <ul>
                <li>{data.tags}</li>
                <li>{data.tags1}</li>
                <li>{data.tags2}</li>
                <li>{data.tags3}</li>
                <li>{data.tags4}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
