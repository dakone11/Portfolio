import React from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import AnimatedCursor from "react-animated-cursor"
import Footer from './componentes/Footer';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Powerfans from './pages/projects/Powerfans';
import { Routes,Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';




function App() {
  return (
   
    <>
     <AnimatedCursor
        color='493, 11, 111'
        innerSize={8}
        outerSize={8}
     />
       <Navbar/>
       <ScrollToTop/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/powerfans" element={<Powerfans />} />
      </Routes>
      
       <Footer/>
    </>
   
    
     
   
  );
}

export default App;
