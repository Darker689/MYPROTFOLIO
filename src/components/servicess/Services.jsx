import React, { Component } from 'react'
// Css
import './services.css'
// Img
import img1 from '../assets/img.png'
import img2 from '../assets/img.webp'
import img3 from '../assets/img.jpeg'

const data = [
  {
    id: 1,
    img: img1,
    title: 'UI/UX design',
    desc: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo liguli eget.'
  },
  {
    id: 2,
    img: img2,
    title: 'Web Development',
    desc: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo liguli eget.'
  },
  {
    id: 3,
    img: img3,
    title: 'Photography',
    desc: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo liguli eget.'
  }
]

export class Services extends Component {
  render() {
    return (
      <section className='services container section' id='services'>
        <h2 className='section_title'>Services</h2>

        <div className="services_container grid">
          {
            data.map(({id, img, title, desc}) => {
              return(
                <div className="services_card" key={id}>
                  <img src={img} alt="" className="services_img" />

                  <h3 className="services_title">{title}</h3>
                  <p className='services_desc'>{desc}</p>
                </div>
              )
            })
          }
        </div>
      </section>
    )
  }
}

export default Services