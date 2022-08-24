import React, { Component } from 'react'
// Css
import './testimonials.css'

// import Swiper core and required modules
import{ Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    img: 'https://i.pinimg.com/564x/d9/3e/a1/d93ea1be630ab2cb537571ab36599bf5.jpg',
    title: 'John Doe',
    subtitle: 'Product designer at Dribble',
    comment: 'I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck!'
  },
  {
    id: 2,
    img: 'https://i.pinimg.com/564x/d9/3e/a1/d93ea1be630ab2cb537571ab36599bf5.jpg',
    title: 'John Doe',
    subtitle: 'Product designer at Dribble',
    comment: 'I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck!'
  }
]

export class Testimonials extends Component {
  render() {
    return (
      <section className='testimonials container section'>
        <h2 className='section_title'>Clients & Reviews</h2>

        <Swiper className="testimonials_container grid"        
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          {
            data.map(({id, img, title, subtitle, comment}) => {
              return(
                <SwiperSlide className="testimonial_item" key={id}>
                  <div className="thumb">
                    <img src={img} alt="" />
                  </div>
                  <h3 className="testimonials_title">{title}</h3>
                  <span className='subtitle'>{subtitle}</span>
                  <div className="comment">{comment}</div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </section>
    )
  }
}

export default Testimonials;