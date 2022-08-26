import React, { Component } from 'react'
// Css
import './blog.css'
// Img
import img from '../assets/img5.png'
import img1 from '../assets/img3.jpeg'
import img2 from '../assets/img6.png'
import { Link } from 'react-router-dom'

export class Blog extends Component {
  render() {
    return (
      <section className='blog container section' id='blog'>
        <h2 className="section_title">Latest Posts</h2>

        <div className="blog_container grid">

          <div className="blog_card">
            <div className="blog_thumb">
              <Link to='/'>
                <span className='blog_category'>Reviews</span>
              </Link>
              <Link to='/'>
                <img src={img} alt=""  className='blog_img'/>
              </Link>
            </div>
            <div className="blog_details">
              <h3 className='blog_title'>5 Best App Development Tool for Your Projects</h3>
              <div className="blog_meta">
                <span>09 February, 2022</span>
                <span className="blog_dot">.</span>
                <span>Muhammad Jon</span>
              </div>
            </div>
          </div>

          <div className="blog_card">
            <div className="blog_thumb">
              <Link to='/'>
                <span className='blog_category'>Tutorial</span>
              </Link>
              <Link to='/'>
                <img src={img1} alt=""  className='blog_img'/>
              </Link>
            </div>
            <div className="blog_details">
              <h3 className='blog_title'>Commom Misconception About Payment</h3>
              <div className="blog_meta">
                <span>07 February, 2022</span>
                <span className="blog_dot">.</span>
                <span>Muhammad Jon</span>
              </div>
            </div>
          </div>

          <div className="blog_card">
            <div className="blog_thumb">
              <Link to='/'>
                <span className='blog_category'>Business</span>
              </Link>
              <Link to='/'>
                <img src={img2} alt=""  className='blog_img'/>
              </Link>
            </div>
            <div className="blog_details">
              <h3 className='blog_title'>3 Things to know about startup business</h3>
              <div className="blog_meta">
                <span>05 February, 2022</span>
                <span className="blog_dot">.</span>
                <span>Muhammad Jon</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Blog