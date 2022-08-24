import React from 'react'
// Icon
import {AiOutlineInstagram, AiOutlineTwitter, AiOutlineBehance, AiOutlineDribbble} from 'react-icons/ai'
import {RiPinterestLine} from 'react-icons/ri'

const HeaderSocial = () => {
  return (
    <div className='home_socials'>
        <a href="https://www.instagram.com/" className="home_socials_link" target='_blank'>
            <AiOutlineInstagram/>
        </a>

        <a href="https://twitter.com/?lang=ru" className="home_socials_link" target='_blank'>
            <AiOutlineTwitter/>
        </a>

        <a href="https://twitter.com/?lang=ru" className="home_socials_link" target='_blank'>
            <AiOutlineBehance/>
        </a>

        <a href="https://twitter.com/?lang=ru" className="home_socials_link" target='_blank'>
            <AiOutlineDribbble/>
        </a>

        <a href="https://twitter.com/?lang=ru" className="home_socials_link" target='_blank'>
            <RiPinterestLine/>
        </a>
    </div>
  )
}

export default HeaderSocial