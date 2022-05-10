import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Navbar from './componentes/Navbar';
import Timeline from './componentes/Timeline';
import AnimatedCursor from "react-animated-cursor"
import Project from './componentes/Project';
import Footer from './componentes/Footer';




function App() {
  return (
    <>
     <AnimatedCursor
        color='493, 11, 111'
        innerSize={8}
        outerSize={8}
     />
       <Navbar/>
       <Header/>
       <Timeline/>
       <Project/>
       <Footer/>
    </>
   
    
     
   
  );
}

export default App;
