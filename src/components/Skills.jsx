import React from 'react'
import "./Skills.css"
import Slider from '@mui/material/Slider';
export default function Skills() {
  return (
    <div>

      <div className='skill'>
        <h1><span>My</span>Skills</h1>
      </div>

      <div className='sk'>

        <div className='boxs'>
          <h1 className='text2'>Frontend Development</h1>
          <h2 className='text'>html</h2>
          <Slider
            aria-label="Temperature"
            defaultValue={100}
            color="secondary"
          />
          <h2 className='text'>css</h2>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            color="secondary"
          /> <h2 className='text'>js</h2>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            color="secondary"
          /> <h2 className='text'>react</h2>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            color="secondary"
          />
        </div>
        <div className='boxs'>
        <h1 className='text2'>Frontend Development</h1>
          <h2 className='text'>html</h2>
          <Slider
            aria-label="Temperature"
            defaultValue={100}
            color="secondary"
          />
          <h2 className='text'>css</h2>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            color="secondary"
          /> <h2 className='text'>js</h2>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            color="secondary"
          /> <h2 className='text'>react</h2>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            color="secondary"
          />
        </div>
        <div className='boxs'>
        <h1 className='text2'>Frontend Development</h1>
          <h2 className='text'>html</h2>
          <Slider
            aria-label="Temperature"
            defaultValue={100}
            color="secondary"
          />
          <h2 className='text'>css</h2>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            color="secondary"
          /> <h2 className='text'>js</h2>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            color="secondary"
          /> <h2 className='text'>react</h2>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            color="secondary"
          />
        </div>
      </div>


    </div>
  )
}
