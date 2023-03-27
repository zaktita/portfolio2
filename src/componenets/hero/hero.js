import React from 'react'
import './hero.css'
import Animation from '../animation/Animation'
// import eclipse from '../../assetes/Ellipse 4.png'

function Hero() {
  return (
    <div className="hero container">
        <div className='hero_section'>
      <div className="img_wrapper">
      <Animation/>
      </div>
      <h1 className='hero_title'>Experience the Power of a <br/><span className='text_gradient'>{'<Custom-Designed/>'}</span> Website</h1>
      <p className="paragraph">As a skilled web designer, I bring your unique vision to life with custom designs that make your online presence shine.</p>
      <div className="cta">
        <a href="mailto:zakaria.thitah@gmail.com">
        <button className="btn_fill">get in touch</button>
        </a>
        {/* <button className="btn_border">view porfolio</button> */}
      </div>
    </div>
    </div>
  )
}

export default Hero
