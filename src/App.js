import React from "react";
import "./App.css";
import Navbar from "./componentes/Navbar";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./componentes/Footer";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Powerfans from "./pages/projects/Powerfans";
import Itevalencia from "./pages/projects/Itevalencia";
import Tarot from "./pages/projects/Tarot";

import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import useLocalStorage from "use-local-storage";
import { FaToggleOn } from "react-icons/fa";
import { URL } from "./constants/url.constants";
import { THEME } from "./constants/theme.constants";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? THEME.DARK : THEME.LIGHT);

  const switchTheme = () => {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    setTheme(newTheme);
  };
  return (
    <div className="app" data-theme={theme}>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="12, 214, 165"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          
        ]}
      />

      <Navbar />

      <div className="theme-toggle">
        <a onClick={switchTheme}>
          <FaToggleOn />
        </a>
      </div>

      <ScrollToTop />
      <Routes>
        <Route path={URL.HOME} element={<Home theme={theme} />} />
        <Route path={URL.ABOUT} element={<About theme={theme} />} />
        <Route path={URL.PROJECTS} element={<Projects theme={theme} />} />
        <Route path={URL.CONTACT} element={<Contact theme={theme} />} />
        <Route path={URL.POWERFANS} element={<Powerfans theme={theme} />} />
        <Route path={URL.ITEVALENCIA} element={<Itevalencia theme={theme} /> }/>
        <Route path={URL.TAROT} element={<Tarot theme={theme} /> }/>
      </Routes>

      <Footer theme={theme} />
    </div>
  );
}

export default App;
