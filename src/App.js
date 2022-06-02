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
import useLocalStorage from 'use-local-storage'
import { FaToggleOn } from "react-icons/fa";




function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  return (
   
    <div className="app" data-theme={theme}>
     <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='793, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
       
       <Navbar/>

       <div className='theme-toggle'>
          <a onClick={switchTheme} ><FaToggleOn/></a>
       </div>

       <ScrollToTop/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/powerfans" element={<Powerfans />} />
      </Routes>
      
       <Footer/>
    </div>
   
    
     
   
  );
}

export default App;
