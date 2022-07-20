import React from "react";
import Carrousel from "../../componentes/Carrousel";
import Contentproject from "../../componentes/Contentproject";
import ShowProject from "../projects/ShowProject";
import { useEffect } from 'react';

const Powerfans = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <ShowProject
        imagenintro="powerfans"
        titulo="Powerfans"
        tools1="Figma"
        tools2="Html"
        tools3="CSS"
        tools4="Javascript"
        tools5="After Effects"
        url="https://github.com/dakone11/powerfans"
        texturl="Github"
        url2="https://frontend.esatid3-2021.com/carlos-beta/index.html"
        texturl2="web"
        url3="https://www.figma.com/proto/PtgaRCXTmWO5lOP5qij5lU/POWERFANS?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1"
        texturl3="FIGMA"
        año="Project created in 2022"
        
        overview="Personal project! Design of an APP that allows fans around the world to recreate the soccer atmosphere inside the stadium, virtually, interactively and in real time.
                  An online game created by and for sports fans, which encourages virtual competition, through the first Fan Ranking.
                 I designed the screens, made engagement videos, the game idea and logic (points), user flow, navigation and wireframes.
                 Also a corporate website with the function to download the app, register and sign up for the newslatter."
        
      />
       <Carrousel/>
       <Contentproject
        titulo1="UX"
        subtitulo1="Objetive, Benchmark and User Persona"
        descrip1="Objective: To create an App that allows fans to recreate the soccer atmosphere inside the stadium, in a virtual, interactive and real time way, that promotes virtual competition, through the first classification of fans and their participation experiences."
        descrip2="Benchmark: Design, a direct and dynamic approach, with a millennial look and above all, friendly and professional. The analysis of the competition allows us to create our differentiating access to: Mini-games, Ambience, Game , ranking and statistics in real time, Chats, Create groups of fans. Design and interaction with the user, a direct and dynamic treatment. Design and intuitively generate a product to entertain, excite, inform and connect the user with the fan participation tool."
        descrip3="User persona: Profile of the consumer group to which he/she belongs, talk about his/her history or biography, information about his/her professional and personal experience, more personal information such as tastes or hobbies, consumer's link to the brand and personal image. information such as tastes or hobbies, consumer's link to the brand and personal image."
        imagendescription1="powerfans"
        titulo2="Web"
        subtitulo2="One page promotional website design"
        descrip4="Design a responsive web page for the user to download the app and to register or buy the promotion. It has been made with HTML5, JavaScript, CSS programming languages."
        descrip5="A modal video and login, a carousel slider, an accordion and an interactive navigation menu have been used. The page has scrolling animations and the corporate design of the application."
        descrip6="User persona: Profile of the consumer group to which he/she belongs, talk about his/her history or biography, information about his/her professional and personal experience, more personal information such as tastes or hobbies, consumer's link to the brand and personal image. information such as tastes or hobbies, consumer's link to the brand and personal image."
        imagendescription2="powerfans2"

       />
       <Contentproject
        titulo1="Research plan"
        subtitulo1="How users can relate their needs to what Powerfans App offers"
        descrip1="How users can relate to their needs offered by Powerfans App. Powerfans offers direct tickets to the virtual match, an intuitive and real-time game, competitive and fully transparent user actions, with a very dynamic game logic."
        descrip2="This identity within the club will generate a unique pattern of consumption and personal opinion through in-game surveys. This is the marketing tool for clubs that will have real, direct information... big data."
        descrip3="It is an opportunity to bring the user closer to his club by rewarding him for his actions with unique experiences and social recognition."
        imagendescription1="powerfans4"
        titulo2="Functionality"
        subtitulo2="Match Event Controller API and game"
        descrip4="Match Event Controller:It is the app that is used at the time of the match, a person will be in charge of controlling the atmosphere and launching the events that coincide with the actions of the live match, such as mini-games or duels. Questions, polls, mini-games can be asked according to the typical actions of the sporting event.It consists of a top panel with the sound animation controls, a panel on each side of the screen where the actions of the events for each team are executed. in the center a timeline display of the events launched. Some of the events are, penalty challenge, goal challenge, club question, corner challenge and many more. The bottom panel is where you can type for questions or select from a list of different sound resources that will be activated on cell phones to score more."
        descrip6="When users enter the game in the form they fill in their data, choose the team they are going to support, they will access the content of their club, In the panel they can buy the virtual ticket, see the points, edit their profile, see the news, go to the store, to the standings, to the search for fan groups and much more all ready to have the experience of being the protagonist of the match."
        imagendescription2="powerfans3"

       />
       <Contentproject
        titulo1="Visual"
        subtitulo1="Design System & identity"
        descrip1="The brand image is a triangle with the initials pwf well marked, looking like a sports shield, a powerful and dynamic image that gives a lot of play. The typographies are all dry stick used in the corporate image as in web and app (kanit for logo, Roboto and Oxygen for app and web) give it a technological aspect."
        descrip2="Adapting the colors used in the brand and recontextualizing their use in interactive elements within the digital product, including both the warning and positive button states. The big battle was the powerfans control so that all actions were intuitive, what was activated when and how?"
        descrip3="The combination of colors creates an atmosphere of competition, rebelliousness and extravagance"
        imagendescription1="powerfans5"
        titulo2=""
        subtitulo2=""
        descrip4=""
        descrip6=""
        imagendescription2=""

       />
    </div>
   
  );
};

export default Powerfans;
