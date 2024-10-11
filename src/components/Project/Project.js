import React, { useState } from 'react';
import './Project.css';

const Project = ({ img, video, title, desc, link }) => {
  const [show, setShow] = useState(false);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className='project'
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show ? (
          <div className='project__content'>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ) : (
          video ? (
            <video width="100%" autoPlay muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={img} alt={title}/>
          )
        )}
      </div>
    </a>
  );
};

export default Project;
