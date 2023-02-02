import React from 'react'
import john from './images/john-doe.png'
import './About.css'

function About() {
  return (
    <div className='about' id='about'>
        <div className='container'>
            <img src={john} alt='john' />
            <div className='col-2'>
                <h2>About</h2>
                <span className='line'></span>
                <p>Egg city is an International suppy application powered by Digimi limited which is a technology. Bring your egg business toour platform and we will make sure you are properly served </p>
                <p>This ia our page come, a senior adivsor for an independtly owned financial</p>
                <button className='button'>Explore More</button>
            </div>
        </div>
    </div>
  )
}

export default About