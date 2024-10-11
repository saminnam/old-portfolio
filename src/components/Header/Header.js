import React from 'react';
import {Link} from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <h1>Develop<span>er</span></h1>
        </div>
        <div className='header__right'>
        <Link to='about'>
        <h4>About Me</h4>
        </Link>
        <Link to='skills'>
        <h4>Skills</h4>
        </Link>
        <Link to='projects'>
        <h4>Projects</h4>
        </Link>
        <Link to='exp'>
        <h4>Experience</h4>
        </Link>
        <Link to='contact'>
        <h4>Contact</h4>
        </Link>
        <h4 className='header__rightbutton'>Join With Me</h4>
        </div>
    </div>
  )
}

export default Header