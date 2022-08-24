import React, { Component } from 'react'
// Css
import './services.css'

const data = [
  {
    id: 1,
    img: 'https://cygnussofttech.com/images/web-design/ui-ux-design.png',
    title: 'UI/UX design',
    desc: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo liguli eget.'
  },
  {
    id: 2,
    img: 'https://img.freepik.com/premium-vector/web-development-concept-website-coding-web-page-3d-vector-icon-cartoon-minimal-style_365941-672.jpg',
    title: 'Web Development',
    desc: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo liguli eget.'
  },
  {
    id: 3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThYkksD3QA0UsbBoY1AFCaRwNXwR50CMprKw&usqp=CAU',
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