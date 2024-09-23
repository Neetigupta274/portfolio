import React from 'react'
import photo2 from "../../Image/olp.jpeg"
import "./About.css"
import Aos from 'aos';
import 'aos/dist/aos.css'; // 
export default function () {
  return (
    <div>
       <div className='container'>


        <div className='web'>
          <img src={photo2} />
        </div >


        <div className='contain'>
          <h1 data-aos="fade-up-left" >About <span>Me</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolorum culpa numquam laboriosam quis! Quis ullam harum est porro ipsum aspernatur quidem, veniam suscipit autem laudantium itaque quos eveniet asperiores.</p>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos maxime magnam est magni veritatis nam id quasi minima consectetur temporibus repellendus doloremque quos, deleniti facilis laborum fugiat similique. Reiciendis?</p>
           
           <div className='alg'> 
           <div>HTML5</div>
          <div>CSS3</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Python</div>
           </div>
         
        <button className='btn'>Download CV</button>
        </div>


       </div>
    </div>
  )
}
