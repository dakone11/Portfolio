import React from "react";
import Contentproject from "../../componentes/Contentproject";
import Video from "../../componentes/Video";
import ShowProject from "./ShowProject";
import { useEffect } from 'react';

const Adverspot = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <ShowProject
        imagenintro="adverspot"
        titulo="Adverspot"
        tools1="photoshop"
        tools2="ilustrator"
        tools3="After Effects"
        tools4=""
        tools5=""
        url=""
        texturl=""
        url2=""
        texturl2=""
        url3=""
        texturl3=""
        año="Project created in 2016"
        overview=" A colaboration project with Binary Colossus. My contribution to The Adverspot project consists of all the graphic support  for the app including videos and some videos of the customers of the application, it is an application for tourism purposes and where the user has little time so it has to be very intuitive as it is only used in the journey of a cab about 5 to 10 min on average, the design has to be direct and intuitive."
       
       
      />
      <Video
       titulo1="UX"
        subtitulo1="Objetive"
        descrip1="The objective is to be an advertising platform for companies that offer a wide variety of services for users who access the taxi and offer the user the possibility of accessing a discount or promotion from our customers"
        descrip2="Through videos that appear by geolocation, cab users can access discounts and information about companies in the area, Infotourist and resident information during their trip.."
        descrip3="My goal was to make the cab user have a pleasant experience and get to know places of interest while traveling, in order to connect with the video ad and get the discount or promotion."
       videoId="nFSXKuoOpPY"

      />
      <Contentproject
      titulo1="UX"
        subtitulo1="Interface"
        descrip1="Clicking on the video will open a view showing information about the advertiser: description, location, images, etc. The client can access the map of Valencia, see where it is located, the user can get information through a list of museums, activities, events, leisure areas and historical monuments with location and information by text and voice. My goal was to facilitate navigation, in an intuitive way, the process should be as simple as possible, with a clear iconography and respecting the video area, which is the most important part and should always be visible. It also has several languages, among the sections you can choose are: Monuments, leisure places, museums, leisure activities in the city and events. enter the internet with filters, activate the route and the voice translator.."
        descrip2="The application divides the view into 2 layouts. The left one contains the advertising and the right one the user interaction. Each section of services has a color in the icons and in the background to locate more quickly to the user in which section is located. It was essential to maintain the activation or cancellation of sound as it could be annoying for the user."
        descrip3="Two typefaces were used: Futura for the long text and Bold Sansation for titles, the radio contrast is correct on all screens. Each element breathes, using the space strategically to highlight what is of interest."
        imagendescription1="adverspot3"
        titulo2=""
        subtitulo2=""
        descrip4="All navigation through the different panels is done with sliding animations at the top we have the current time on a digital clock at the bottom a list with flags indicating the language to which you want to configure the application he application is to be set to the language can be changed at any time."
        descrip5="In the browser menu, which will always remain fixed, we have: the refresh button, which has a rotating animation until the page has loaded, back button and forward button for navigating the history between previous and next page. If there is no previous previously visited, these buttons will be disabled, and the back button to return to the main menu."
        descrip6="If the user does not interact with the device it will go into standby,if we want to interact with the device we just have to press the screen or by facial recognition and the advertising will resume."
        imagendescription2="adverspot2"

      />
      <Contentproject
      titulo1="Branding"
        subtitulo1="Corporate Branding Design"
        descrip1="The logo contains the initial letter A for (advertising) and an S for (spot), with the illustration of a cab and a silhouette of a tablet that encloses the whole logo. Thus creating a very conceptual and direct image. The typography used is a futuristic dry stick typeface."
        descrip2="Delivery of the product for digital use and printing."
        descrip3=""
        imagendescription1="adverspot"
        titulo2=""
        subtitulo2=""
        descrip4=""
        descrip5=""
        descrip6=""
        imagendescription2=""

      />
    </div>
  );
};

export default Adverspot;
