import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
const skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <spanc className='skillDesc'>Web development, also known as 
      website development, refers to the tasks associated with creating, 
      building, and maintaining websites and web applications that run online on a browserI am skilled and 
      passionate web designer who work very hard toward my work you can just on 
      because i do my work with full passion</spanc>
      <div className="skillbars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI Design</h2>
            <p>this is a text where i have to write the info of the img</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>this is a text where i have to write the info of the img</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>this is a text where i have to write the info of the img</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default skills
