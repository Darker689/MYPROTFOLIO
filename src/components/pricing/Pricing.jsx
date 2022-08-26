import React, { Component } from 'react'
// Css
import './pricing.css'
// Img
import img from '../assets/img1.png'
import img1 from '../assets/img2.png'
import img2 from '../assets/img3.png'
import { Link } from 'react-router-dom'


export class Pricing extends Component {
  render() {
    return (
      <section className='pricing container section'>
        <h2 className="section_title">Pricing Plans</h2>

        <div className="pricing_container grid">
          <div className="pricing_item">
            <img src={img} alt="" />
            <h3 className="pricing_plan">Basic</h3>
            <p className="pricing_title">A Simple option but powerful to manage your  business</p>
            <p className="pricing_support">Email Support</p>
            <h3 className="price">
              <em>$</em> 9 <span>Month</span>
            </h3>
            <Link to='/' className="btn">Get Started</Link>
          </div>

          <div className="pricing_item best">
            <span className='badge'>Recommended</span>
            <img src={img1} alt="" />
            <h3 className="pricing_plan">Premium</h3>
            <p className="pricing_title">Unlimited product including app integration and more features</p>
            <p className="pricing_support">Mon-Fri Support</p>
            <h3 className="price">
              <em>$</em> 15 <span>Month</span>
            </h3>
            <Link to='/' className="btn">Get Started</Link>
          </div>

          <div className="pricing_item">
            <img src={img2} alt="" />
            <h3 className="pricing_plan">Ultimate</h3>
            <p className="pricing_title">A wise option for large companies and individuals</p>
            <p className="pricing_support">24/7 Support</p>
            <h3 className="price">
              <em>$</em> 19 <span>Month</span>
            </h3>
            <Link to='/' className="btn">Get Started</Link>
          </div>
        </div>
      </section>
    )
  }
}

export default Pricing