import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Contener/Navbar.jsx"
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
export default function App(){

  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/About"element={<About/>}/>
        <Route path="/Project"element={<Project/>}/>
        <Route path="/Skills"element={<Skills/>}/>
        <Route path="/Contact"element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}



