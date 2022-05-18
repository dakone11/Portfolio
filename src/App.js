import React from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import AnimatedCursor from "react-animated-cursor"
import Footer from './componentes/Footer';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import { Routes,Route } from 'react-router-dom';




function App() {
  return (
   
    <>
     <AnimatedCursor
        color='493, 11, 111'
        innerSize={8}
        outerSize={8}
     />
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>} />
				
        <Route path="/about" element={<About />} />
				
        <Route path="*" element={<Projects />} />
      </Routes>
      
       <Footer/>
    </>
   
    
     
   
  );
}

export default App;
