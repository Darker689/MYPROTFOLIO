import React from 'react'
// Css
import './resume.css'

import Data from './Data'
import Card from './Card'


const Resume = () => {
  return (
    <section className='resume container section' id='resume'>
      <h2 className='section_title'>Exprience</h2>

      <div className="resume_container grid">
        <div className="timeline grid">
          {
            Data.map((val) => {
              if(val.category === 'education') {
                return(
                  <Card key={val.id} icon={val.icon} title={val.title} yaer={val.year} desc={val.desc}/>
                )
              }
            })
          }
        </div>

        <div className="timeline grid">
          {
            Data.map((val) => {
              if(val.category === 'experience') {
                return(
                  <Card key={val.id} icon={val.icon} title={val.title} yaer={val.year} desc={val.desc}/>
                )
              }
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Resume