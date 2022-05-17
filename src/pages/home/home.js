import React from 'react'
import Header from '../../componentes/Header'
import Timeline from '../../componentes/Timeline'
import Project from '../../componentes/Project'
export const Home = () => {
  return (
   
    <div>
        
        <Header
         titulo='FRONTEND DEVELOPER'
         imagen='me2'
       />
         <Timeline/>
         <Project/>
       

    </div>
  )
}
export default Home;