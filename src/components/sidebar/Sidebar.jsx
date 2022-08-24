import React, { useState } from 'react'

// Css
import './sidebar.css'

// Icon
import {AiOutlineUserSwitch, AiOutlineMenu} from 'react-icons/ai'
import {FaGraduationCap} from 'react-icons/fa'
import {GrNotes} from 'react-icons/gr'
import {IoHome, IoLayers} from 'react-icons/io5'
import {ImBriefcase, ImBubbles2} from 'react-icons/im'


const Sidebar = () => {

  const [show, setShow] = useState(false)

  return (
    <>     
      <aside className={show ? 'aside show_menu' : 'aside'}>
        <a href="#home" className='nav_logo'>
          <img src="https://cdn3.vectorstock.com/i/thumb-large/72/47/luxury-minimalist-crown-label-logo-icon-vector-38807247.jpg" alt="" />
        </a>

        <nav className="nav">
          <div className="nav_manu">
            <ul className="nav_list">

              <li className="nav_item">
                <a href="#home" className="nav_link">
                  <IoHome/>
                </a>
              </li>

              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <AiOutlineUserSwitch/> 
                </a>
              </li>

              <li className="nav_item">
                <a href="#services" className="nav_link">
                  <ImBriefcase/>
                </a>
              </li>

              <li className="nav_item">
                <a href="#resume" className="nav_link">
                  <FaGraduationCap/>
                </a>
              </li>

              <li className="nav_item">
                <a href="#work" className="nav_link">
                  <IoLayers/>
                </a>
              </li>

              <li className="nav_item">
                <a href="#blog" className="nav_link">
                  <GrNotes/>
                </a>
              </li>

              <li className="nav_item">
                <a href="#contact" className="nav_link">
                  <ImBubbles2/>
                </a>
              </li> 
            </ul>
          </div>
        </nav>

        <div className="nav_footer">
          <span className='copyright'>&copy; 2022 - 2023</span>
        </div>
      </aside>

      <div className={show ? "nav_toggle nav_toggle_open" : "nav_toggle"} onClick={() => setShow(!show)}>
        <AiOutlineMenu/>
      </div>
    </>
  )
}

export default Sidebar