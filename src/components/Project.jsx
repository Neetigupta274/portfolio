import React from 'react'
import "./Project.css"
// import {eco} from "../image/eco.png"
export default function Project() {
  return (
    <div>
      
      <div className='pro'>
        <h1>Projects</h1>
      </div>
     <div className='maincard'>
     

   
      <div className='card'>
        <div className='cardimg'><img src={eco}/></div>
      <h1>Project name</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates suscipit minima similique quo exercitationem labore cum eius facere quas ipsam.</p>
       <div className='button'>
        <button>Live Demo</button>
        <button>github</button>
         </div>
         </div>

         <div className='card'>
        <div className='cardimg'><img src={eco}/></div>
      <h1>Project name</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates suscipit minima similique quo exercitationem labore cum eius facere quas ipsam.</p>
       <div className='button'>
        <button>Live Demo</button>
        <button>github</button>
         </div>
         </div>


         <div className='card'>
        <div className='cardimg'><img src={eco}/></div>
      <h1>Project name</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates suscipit minima similique quo exercitationem labore cum eius facere quas ipsam.</p>
       <div className='button'>
        <button>Live Demo</button>
        <button>github</button>
         </div>
         </div>



     </div>
     
    </div>
  )
}
