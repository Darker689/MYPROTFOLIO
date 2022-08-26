import React, { Component } from 'react'

import AboutBox from './AboutBox'
// Css
import './about.css'
// img
import img from '../assets/img1.jpg'
import { Link } from 'react-router-dom'


export class About extends Component {
  render() {
    return (
      <section className='about container section' id='about'>
        <h2 className='section_title'>About Me</h2>

        <div className="about_container grid">
          <img src={img} alt="" className="about_img" />
          <div className="about_data grid">
            <div className="about_info">
              <p className='about_desc'>I am Muhammadjon, web developer from Kokand, Uzbekistan. I have rich experience in web site design and building and customization, also I am good at Wordpress.</p>
              <Link to='/' className="btn">Download CV</Link>
            </div>
          </div>
          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className='skills_name'>Development</h3>
                <span className='skills_number'>90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className='skills_name'>UI/UX design</h3>
                <span className='skills_number'>80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className='skills_name'>Photography</h3>
                <span className='skills_number'>60%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage photography"></span>
              </div>
            </div>
          </div>
        </div>

        <AboutBox/>
      </section>
    )
  }
}

export default About