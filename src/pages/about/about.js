import React from 'react'
import AboutText from '../../componentes/AboutText';
import Header from '../../componentes/Header';
import Skills from '../../componentes/Skills';

export const About = () => {
  return (
    <>
        <Header
         titulo='ABOUT ME'
         imagen='me'
        />
        <AboutText/>
</>
  )
}
export default About;