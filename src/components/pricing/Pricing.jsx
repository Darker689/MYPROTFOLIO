import React, { Component } from 'react'
// Css
import './pricing.css'

export class Pricing extends Component {
  render() {
    return (
      <section className='pricing container section'>
        <h2 className="section_title">Pricing Plans</h2>

        <div className="pricing_container grid">
          <div className="pricing_item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Light_bulb_%28yellow%29_icon.svg/1200px-Light_bulb_%28yellow%29_icon.svg.png" alt="" />
            <h3 className="pricing_plan">Basic</h3>
            <p className="pricing_title">A Simple option but powerful to manage your  business</p>
            <p className="pricing_support">Email Support</p>
            <h3 className="price">
              <em>$</em> 9 <span>Month</span>
            </h3>
            <a href="#" className="btn">Get Started</a>
          </div>

          <div className="pricing_item best">
            <span className='badge'>Recommended</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJY8mzh4dtcWI_ZvHtTOrPFlMREMJemmnplS93UyNAETIONXiVQIWm_qHQchXY9lftsw&usqp=CAU" alt="" />
            <h3 className="pricing_plan">Premium</h3>
            <p className="pricing_title">Unlimited product including app integration and more features</p>
            <p className="pricing_support">Mon-Fri Support</p>
            <h3 className="price">
              <em>$</em> 15 <span>Month</span>
            </h3>
            <a href="#" className="btn">Get Started</a>
          </div>

          <div className="pricing_item">
            <img src="https://cdn-icons-png.flaticon.com/512/3712/3712123.png" alt="" />
            <h3 className="pricing_plan">Ultimate</h3>
            <p className="pricing_title">A wise option for large companies and individuals</p>
            <p className="pricing_support">24/7 Support</p>
            <h3 className="price">
              <em>$</em> 19 <span>Month</span>
            </h3>
            <a href="#" className="btn">Get Started</a>
          </div>
        </div>
      </section>
    )
  }
}

export default Pricing