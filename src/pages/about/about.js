import React from 'react'
import Header from '../../componentes/Header';
import AboutText from '../../componentes/AboutText';
import Card from '../../componentes/Card';



export const About = () => {
  return (
    <>
        <Header
         titulo='ABOUT ME'
         imagen='me'
        />
       
         <AboutText/>
        
         <Card
           titulo='Powerfans'
         />
        
</>
  )
}
export default About;