import React from "react";
import Header from "../../componentes/Header";
import AboutText from "../../componentes/AboutText";

export const About = (props) => {
  return (
    <>
      <Header titulo="ABOUT ME" imagen="me" theme={props.theme}  />
      <AboutText theme={props.theme} />
    </>
  );
};
export default About;
