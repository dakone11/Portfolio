import React from "react";
import Header from "../../componentes/Header";
import Timeline from "../../componentes/Timeline";
import Project from "../../componentes/Project";

export const Home = (props) => {
  return (
    <div>
      <Header titulo="FRONTEND DEVELOPER" imagen="me2" theme={props.theme} />
      <Timeline />
      <Project />
    </div>
  );
};
export default Home;
