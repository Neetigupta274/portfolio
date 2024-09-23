import React, { useEffect, useState } from 'react';

import img from "../../Image/photo.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

import "./Home.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);

  // Typewriter effect component
  const Typewriter = () => {
    const texts = ["WEB DEVELOPER"];
    const speed = 100; 
    
    
    const [textIndex, setTextIndex] = useState(0);
    const [characterIndex, setCharacterIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
      if (characterIndex < texts[textIndex].length) {
        const timeoutId = setTimeout(() => {
          setCurrentText((prev) => prev + texts[textIndex].charAt(characterIndex));
          setCharacterIndex((prev) => prev + 1);
        }, speed);
        
        return () => clearTimeout(timeoutId);
      } else {
        const eraseTimeout = setTimeout(() => {
          setCharacterIndex(0);
          setCurrentText('');
        }, 1000);
        
        return () => clearTimeout(eraseTimeout);
      }
    }, [characterIndex, textIndex, texts]);

    return <span style={{color: '#077b32'}}>{currentText}</span>;
  };

  return (
    <div>
      <div className='box'>
        <div data-aos="zoom-in-down" className='image'>
          <img src={img} alt="Profile" />
        </div>
        <div className='contact' data-aos="fade-left">
          <h1>Hey I'm <span>Neeti</span></h1>
          <p className='font' >
            I'm a <Typewriter />
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat reprehenderit voluptates debitis mollitia quam asperiores, consectetur repudiandae non assumenda et?</p>
          <div data-aos="flip-left" className='icons'>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className='icon'><GitHubIcon className='icon2' /></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className='icon'><FacebookIcon className='icon2' /></i>
            </a>
            <a href="mailto:example@mail.com" target="_blank" rel="noopener noreferrer">
              <i className='icon'><MailIcon className='icon2' /></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className='icon'><LinkedInIcon className='icon2' /></i>
            </a>
          </div>
          <button className='dom'><b>Hireme</b></button>
        </div>
      </div>  
    </div>
  );
}
