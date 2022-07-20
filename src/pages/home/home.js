import React from "react";
import Header from "../../componentes/Header";
import Timeline from "../../componentes/Timeline";
import Project from "../../componentes/Project";
import { useEffect } from 'react';
export const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Header titulo="FRONTEND DEVELOPER & DESIGNER" imagen="me2" theme={props.theme} />
      <Timeline />
      <Project />
    </div>
  );
};
export default Home;
