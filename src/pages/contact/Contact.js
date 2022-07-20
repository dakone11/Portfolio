import React from "react";
import { useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import Tilt from "react-parallax-tilt";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Tilt>
    <div className="text-intro">
      
      <Zoom>
        <h1 className="tittle">Thank you!</h1>
      </Zoom>
      <p>I will get back to you as soon as possible</p>
    </div>
    </Tilt>
  );
};

export default Contact;
