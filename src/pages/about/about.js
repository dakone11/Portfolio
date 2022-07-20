import React from "react";
import Header from "../../componentes/Header";
import AboutText from "../../componentes/AboutText";
import { useEffect } from 'react';
export const About = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header titulo="ABOUT ME" imagen="me" theme={props.theme}  />
      <AboutText theme={props.theme} />
    </>
  );
};
export default About;
