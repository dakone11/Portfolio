import React from "react";
import { useEffect, useState } from "react";
import "../hojas-de-estilo/Carrousel.css";
import slide1 from "../imagenes/carrousel/1.png";
import slide2 from "../imagenes/carrousel/2.png";
import slide3 from "../imagenes/carrousel/3.png";
import slide4 from "../imagenes/carrousel/4.png";
import slide5 from "../imagenes/carrousel/5.png";
import slide6 from "../imagenes/carrousel/6.png";
import slide7 from "../imagenes/carrousel/7.png";
import slide8 from "../imagenes/carrousel/8.png";
import slide9 from "../imagenes/carrousel/9.png";
import slide10 from "../imagenes/carrousel/10.png";
import slide11 from "../imagenes/carrousel/11.png";
import slide12 from "../imagenes/carrousel/12.png";
import slide13 from "../imagenes/carrousel/13.png";
import slide14 from "../imagenes/carrousel/14.png";
import slide15 from "../imagenes/carrousel/15.png";
import slide16 from "../imagenes/carrousel/16.png";
import slide17 from "../imagenes/carrousel/17.png";
import slide18 from "../imagenes/carrousel/18.png";
import slide19 from "../imagenes/carrousel/19.png";
import slide20 from "../imagenes/carrousel/20.png";
import slide21 from "../imagenes/carrousel/21.png";
import slide22 from "../imagenes/carrousel/22.png";
import slide23 from "../imagenes/carrousel/23.png";
import slide24 from "../imagenes/carrousel/24.png";
import slide25 from "../imagenes/carrousel/25.png";

const Carrousel = () => {
  const [index, setIndex] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const slides = [
    {
      id: "1",
      image: slide1,
    },
    {
      id: "2",
      image: slide2,
    },
    {
      id: "3",
      image: slide3,
    },
    {
      id: "4",
      image: slide4,
    },
    {
      id: "5",
      image: slide5,
    },
    {
      id: "6",
      image: slide6,
    },
    {
      id: "7",
      image: slide7,
    },
    {
      id: "8",
      image: slide8,
    },
    {
      id: "9",
      image: slide9,
    },
    {
      id: "10",
      image: slide10,
    },
    {
      id: "11",
      image: slide11,
    },
    {
      id: "12",
      image: slide12,
    },
    {
      id: "13",
      image: slide13,
    },
    {
      id: "14",
      image: slide14,
    },
    {
      id: "15",
      image: slide15,
    },
    {
      id: "16",
      image: slide16,
    },
    {
      id: "17",
      image: slide17,
    },
    {
      id: "18",
      image: slide18,
    },
    {
      id: "19",
      image: slide19,
    },

    {
      id: "20",
      image: slide20,
    },
    {
      id: "21",
      image: slide21,
    },
    {
      id: "22",
      image: slide22,
    },
    {
      id: "23",
      image: slide23,
    },

    {
      id: "24",
      image: slide24,
    },
    {
      id: "25",
      image: slide25,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % slides.length);
      console.log(index);
    }, 3000);
  }, [index]);

  return (
    <>
     
      <div className="carousel">
        {slides.map((item, i) => {
          const indexLeft = mod(index - 1, slides.length);
          const indexRight = mod(index + 1, slides.length);

          let className = "slides";

          if (i === index) {
            className = "slides slides--active";
          } else if (i === indexRight) {
            className = "slides slides--right";
          } else if (i === indexLeft) {
            className = "slides slides--left";
          } else className = "slides";

          return (
            <img
              key={item.id}
              className={className}
              src={item.image}
              alt="slide powerfans"
            ></img>
          );
        })}
      </div>
    </>
  );
};

export default Carrousel;
