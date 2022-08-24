import React, { Component } from 'react'

import HeaderSocial from './HeaderSocial'

// Css
import './home.css'
import ScrollDown from './ScrollDown'

export class Home extends Component {
  render() {
    return (
      <section className='home container' id='home'>
        <div className="intro">
          <img src="https://i.pinimg.com/564x/d9/3e/a1/d93ea1be630ab2cb537571ab36599bf5.jpg" alt="" className="home_img" />
          <h1 className="home_name">Muhammad Jon</h1>
          <span className="home_education">I`m Front-End developer</span>
          <HeaderSocial/>

          <a href="#contact" className="btn">Hire Me</a>
          
          <ScrollDown/>
        </div>
      </section>
    )
  }
}

export default Home