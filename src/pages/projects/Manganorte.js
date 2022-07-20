import React from 'react'
import ShowProject from './ShowProject';
import Contentproject from '../../componentes/Contentproject';
import { useEffect } from 'react';

const Manganorte = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
            <ShowProject
        imagenintro="manganorte"
        titulo="Manga Norte"
        tools1="Photoshop"
        tools2="ilustrator"
        tools3=""
        tools4=""
        tools5=""
        url=""
        texturl=""
        url2=""
        texturl2=""
        url3=""
        texturl3=""
        año="Project created in 2019"
        overview="Company logo for a real estate company located in the Mar Menor, Delivery of the product for digital use and printing."
      />
      <Contentproject
        titulo1="Branding"
        subtitulo1="Corporate logo design"
        descrip1="To represent this logo needed to show that it is a local company, I worked with the color blue as it is a beach real estate.the Manga Norte isotype is built from a map location pointer with an icon of a house and directional arrows pointing north, an elegant and strong logo not overloaded as it required 3 graphic elements."
        descrip3="It is a logo with lines of the same thickness that will serve to be used as a watermark and can be seen at a greater distance as it can be on top of buildings on posters.
        The typography also follows these rules. While the tagline is a thinner and dry stick typography, its use will be more reduced, that is to say, it will be used when the reading distance is not illegible or necessary."
        imagendescription1="manganorte"
        titulo2=""
        subtitulo2=""
        descrip4=""
        descrip6=""
        imagendescription2=""

       />
    </div>
  )
}

export default Manganorte;