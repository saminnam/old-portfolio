import React from 'react';
import './ProjectContainer.css';
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import video from './video.mp4';
import video1 from './video1.mp4';
import video2 from './video2.mp4';
import video3 from './video3.mp4';
import video4 from './video4.mp4';
import video5 from './video5.mp4';
import news from './img/news.png';


const ProjectContainer = () => {
  const projects = [
    {
      video: video2,
      title: "E-Commerce WebPage",
      desc: "An e-commerce webpage is an online platform where goods and services are bought and sold.",
      link: "https://github.com/saminnam/E-commerce-wedpage.git",
    },
    {
      video: video1,
      title: "FastKart WebPage",
      desc: "FastKart is an e-commerce platform specializing in online grocery shopping.",
      link: "https://github.com/saminnam/Fastkart-web-page.git",
    },
    {
      video: video3,
      title: "Currency-Converter",
      desc: "A currency converter is a tool that allows users to calculate the exchange rate between different currencies. It is commonly used for international transactions, travel planning, and financial analysis.",
      link: "https://github.com/saminnam/Currency-Converter.git",
    },
    {
      video: video4,
      title: "Registeration-Form",
      desc: "A registration form is a document or online interface used to collect information from individuals for the purpose of creating an account or signing up for a service.",
      link: "https://github.com/saminnam/form-validation.git",
    },
    {
      video: video5,
      title: "NewsPaper Template",
      desc: "We can able to fix current news by using this template.",
      link: "https://github.com/saminnam/NewsPaper.html.git",
    },
    {
      video: video,
      title: "Food Order Webpage",
      desc: "An interactive platform that allows users to browse, select, and order food from various restaurants online.",
      link: "https://github.com/saminnam/Foodie-order-page.git",
    }
  ];

  return (
    <Element className='projectsContainer' id='projects'>
      <h1>Projects</h1>
      <p>Here are some projects which I done to improve my skills...</p>
      <div className='projectsContainer__projects'>
        {projects.map((project, index) => (
          <Project 
            key={index} 
            img={project.img} 
            video={project.video} 
            title={project.title} 
            desc={project.desc} 
            link={project.link} 
          />
        ))}
      </div>
    </Element>
  );
};

export default ProjectContainer;
