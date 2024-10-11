import React from 'react';
import "./SkillContainer.css";
import { Element } from 'react-scroll';
import LinearProgress from '@mui/material/LinearProgress';

const SkillContainer = () => {
  return (
    <Element className='skillContainer' id='skills'>
        <div className='skillContainer__image'>
            <img src='https://previews.123rf.com/images/melpomen/melpomen1808/melpomen180800267/106633023-skill-with-young-man-pointing-on-a-dark-background.jpg' alt='skillsimg'/>
        </div>
        <div className='skillContainer__text'>
            <h2>SKILLSET</h2>
            <div className='skillContainer__skillSet'>
                <h5>HTML</h5>
                <div className='skillContainer__slider skillContainer__slider1'>
                    <LinearProgress variant = "determinate" value={90}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>CSS</h5>
                <div className='skillContainer__slider skillContainer__slider2'>
                    <LinearProgress variant = "determinate" value={90}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>JAVASCRIPT</h5>
                <div className='skillContainer__slider skillContainer__slider3'>
                    <LinearProgress variant = "determinate" value={80}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>REACT</h5>
                <div className='skillContainer__slider skillContainer__slider4'>
                    <LinearProgress variant = "determinate" value={85}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>JAVA</h5>
                <div className='skillContainer__slider skillContainer__slider5'>
                    <LinearProgress variant = "determinate" value={70}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>MYSQL</h5>
                <div className='skillContainer__slider skillContainer__slider6'>
                    <LinearProgress variant = "determinate" value={90}/>
                </div>
            </div>
            <div className='skillContainer__skillSet'>
                <h5>HIBERNATE</h5>
                <div className='skillContainer__slider skillContainer__slider7'>
                    <LinearProgress variant = "determinate" value={80}/>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default SkillContainer;
