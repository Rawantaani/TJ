import React from 'react'
import Hello from './Hello'
import HeroWidget from './HeroWidget'

const Hero= () => {
  return (
    <div className='hero-section flex  flex-col md:flex-row  w-full pt-60 retina:py-80 z-0'>
     <Hello/>
      <HeroWidget/>
    </div>
  )
}

export default Hero

