
import React from 'react';
import { SiAdobeaftereffects,SiAdobeillustrator, SiAdobephotoshop,SiCss3,SiFigma,SiGithub,SiHtml5,SiReact,SiVisualstudiocode,SiSass,SiPhp,SiJavascript } from "react-icons/si";
import { URL } from '../constants/url.constants';

export default [
    {
        id:1,
        path: URL.POWERFANS,
        image:'/menu-project1.png',
        title: 'Powerfans',
        category: 'UI UX',
        tags: <SiFigma/>,
        tags1: <SiHtml5/>,
        tags2: <SiJavascript/>,
        tags3: <SiCss3/>,
        tags4: <SiAdobeaftereffects/>
    },
    {
        id:2,
        path: URL.ITEVALENCIA,
        image:'/menu-project2.png',
        title: 'Ite Valencia',
        category: 'Web Design',
        tags:  <SiHtml5/>,
        tags1: <SiCss3/>,
        tags2: <SiPhp/>,
        tags3: <SiAdobeillustrator/>,
      
    },
    {
        id:3,
        path: URL.TAROT,
        image:'/menu-project3.png',
        title: 'Sabiduría Metafísica',
        category: 'Web Design',
        tags:  <SiHtml5/>,
        tags1: <SiCss3/>,
        tags2: <SiPhp/>,
        tags3: <SiAdobephotoshop/>
    },
    {
        id:4,
        path: URL.TRASTEROS,
        image:'/menu-project4.png',
        title: 'TrasteroPlus',
        category: 'Branding',
        tags: <SiAdobeillustrator/>,
        tags1: <SiAdobephotoshop/>
       
    },
    {
        id:5,
        path: URL.ADVERSPOT,
        image:'/menu-project5.png',
        title: 'ADVERSPOT',
        category: 'UI UX',
        tags: <SiAdobeaftereffects/>,
        tags1: <SiAdobeillustrator/>,
        tags2: <SiAdobephotoshop/>,
        tags3: <SiFigma/>
       
    },
    {
        id:6,
        path: URL.ABOUTME,
        image:'/menu-project6.png',
        title: 'About me',
        category: 'Web Design',
        tags: <SiFigma/>,
        tags1: <SiHtml5/>,
        tags2: <SiCss3/>
    },
    {
        id:7,
        path: URL.MANGANORTE,
        image:'/menu-project7.png',
        title: 'Manga Norte',
        category: 'Branding',
        tags: <SiAdobeillustrator/>,
        tags1:<SiAdobephotoshop/>,
        
    }
];