import React from 'react';
import { Element } from 'react-scroll';
import Experience from '../ExperienceBox/Experience';
import './ExperienceContainer.css';
import { Padding, Pix } from '@mui/icons-material';

const ExperienceContainer = () => {
  return (
   <Element className='experienceContainer' id='exp'>
    <h1>Self-Experience</h1>
    <div className='experienceContainer__info'>
        <Experience number="0" title="Clients"/>
        <a href='#projects'><Experience number="15+" className='projects' title="Projects" style={{backgroundColor:"#f64c08", cursor: "pointer"}}/></a>
        <Experience number="8+" title="Months Experience"/>
        {/* <Experience number="+10" title="Clients"/> */}
    </div>
   </Element>
  )
}

export default ExperienceContainer
