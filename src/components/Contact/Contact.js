import React from 'react';
import './Contact.css';
import { Element } from 'react-scroll';
import {IconButton} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email : <span>innam8264@gmail.com</span>
            </p>
            <p>
                Github UserName : <span>saminnam</span>
            </p>
            <div className='contact__icons'>
                <a href='www.linkedin.com/in/innamul-hasan-8663b82b8'>
                    <IconButton>
                        <LinkedInIcon/>
                    </IconButton>
                </a>
                <a href='https://www.facebook.com/login/'>
                    <IconButton>
                        <FacebookIcon/>
                    </IconButton>
                </a>
                <a href='https://www.instagram.com/accounts/login/?hl=en'>
                    <IconButton>
                        <InstagramIcon/>
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact
