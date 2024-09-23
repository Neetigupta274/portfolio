import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

import Aos from 'aos';
import 'aos/dist/aos.css'; 
export default function Navbar() {
    useEffect(() => {
        Aos.init({ duration: 1000 }); // Initialize AOS for animations
      }, []);
  return (
    <div>
        <nav className='nav'>
            <h1 data-aos="fade-up" >NEETI GUPTA</h1>
            <ul className='list' data-aos="fade-up">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Skills">Skills</Link>
                </li>
                <li>
                    <Link to="/Project">Project</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>

            </ul>
        </nav>

    </div>
  )
}
