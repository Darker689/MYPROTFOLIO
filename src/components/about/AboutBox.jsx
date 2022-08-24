import React from 'react'
// Icons
import {AiOutlineFire} from 'react-icons/ai'
import {BiBadge} from 'react-icons/bi'
import {BsPeople} from 'react-icons/bs'
import {TbCup} from 'react-icons/tb'

const AboutBox = () => {
  return (
    <div className='about_boxes grid'>
        <div className="about_box">
            <i className='about_icon'><AiOutlineFire/></i>

            <div>
                <h3 className='about_title'>198</h3>
                <span className='about_subtitle'>Project completed</span>
            </div>
        </div>
        <div className="about_box">
            <i className='about_icon'><TbCup/></i>

            <div>
                <h3 className='about_title'>5670</h3>
                <span className='about_subtitle'>Cup of coffee</span>
            </div>
        </div>
        <div className="about_box">
            <i className='about_icon'><BsPeople/></i>

            <div>
                <h3 className='about_title'>427</h3>
                <span className='about_subtitle'>Satisfied clients</span>
            </div>
        </div>
        <div className="about_box">
            <i className='about_icon'><BiBadge/></i>

            <div>
                <h3 className='about_title'>35</h3>
                <span className='about_subtitle'>Nominees winner</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox