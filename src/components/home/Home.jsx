import React, { Component } from 'react'

import HeaderSocial from './HeaderSocial'

// Css
import './home.css'
// Scroll
import ScrollDown from './ScrollDown'
// Img
import img from '../assets/img1.jpg'

export class Home extends Component {
  render() {
    return (
      <section className='home container' id='home'>
        <div className="intro">
          <img src={img} alt="" className="home_img" />
          <h1 className="home_name">Muhammad Jon</h1>
          <span className="home_education">I`m Front-End developer</span>
          <HeaderSocial/>

          <a href="#contact" target="_blank" rel="noreferrer"  className="btn">Hire Me</a>
          
          <ScrollDown/>
        </div>
      </section>
    )
  }
}

export default Home