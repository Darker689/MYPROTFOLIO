import React, { Component } from 'react'
// Css
import './blog.css'

export class Blog extends Component {
  render() {
    return (
      <section className='blog container section' id='blog'>
        <h2 className="section_title">Latest Posts</h2>

        <div className="blog_container grid">

          <div className="blog_card">
            <div className="blog_thumb">
              <a href="#">
                <span className='blog_category'>Reviews</span>
              </a>
              <a href="#">
                <img src="https://www.pngall.com/wp-content/uploads/8/Team-Work-PNG.png" alt=""  className='blog_img'/>
              </a>
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
              <a href="#">
                <span className='blog_category'>Tutorial</span>
              </a>
              <a href="#">
                <img src="data:image/jpeg;base64,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" alt=""  className='blog_img'/>
              </a>
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
              <a href="#">
                <span className='blog_category'>Business</span>
              </a>
              <a href="#">
                <img src="https://www.pngitem.com/pimgs/m/35-357827_work-png-images-transparent-free-download-work-png.png" alt=""  className='blog_img'/>
              </a>
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