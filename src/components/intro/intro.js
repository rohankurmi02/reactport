import React from 'react'
import './intro.css'
import bg from "../../assets/image.png"
import {Link} from "react-scroll"
import Imgbtn from "../../assets/hireme.png"

const Intro = () => {
  return (
   <section id="intro">
    <div className="introContent">
        <span className="hello">hello</span>
        <span className="IntroText">I'm <span className="Introname">Rohan</span><br />Web Developer</span>
        <p className="intropara">I am skill web devep with experience in creating <br /> visually appearing and user friendly websites.</p>
     <Link><div className="btn"><img src={Imgbtn} alt="Hire me" className='btnImg' />hire me</div></Link>
   </div>
    <img src={bg} alt="profile" className="bg" />
   </section>
  )
}

export default Intro
