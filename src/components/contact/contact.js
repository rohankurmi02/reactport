import React, { useRef }from 'react'
import './contact.css'
import walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import facebook from '../../assets/facebook.png';
import microsoft from '../../assets/microsoft.png';
import FacebookIcon from '../../assets/facebook-icon.png'
import youtubeIcon from '../../assets/youtube.png'
import twitterIcon from '../../assets/twitter.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2v5lar9', 'template_n76ixvo', form.current, 'mF8JYxYZF5l3uhniq')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('email sent')
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
    <section id ="contactPage">
        <div id ="clients">
            <h1 className="contactPageTile">My Client</h1>
          <p className="clientDesc">i have been working and studying bscit , 
           elit. Dolor doloremque fugit itaque voluptatibus corporis hic
           tempora nam iste blanditiis soluta laboriosam dicta, aut ipsum modi 
          repudiandae consequuntur atque, similique minima.
          </p>
          <div className="clientImg">
            <img src={walmart} alt="" className="clientImgs" />
            <img src={Adobe} alt="" className="clientImgs" />
            <img src={microsoft} alt="" className="clientImgs" />
            <img src={facebook} alt="" className="clientImgs" />
            
          </div>
        </div>
        <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please will out te following form to contact me for more information</span>
       <form className='contactForm'ref={form}  onSubmit={sendEmail}>
        <input type="img" className="img" placeholder='Your name' name ='your_name' />
        <input type="email" className="email" placeholder='Enter Your Email'name ='your_email' />
        <textarea className='msg' name="message"  rows="5" placeholder='your message'></textarea>
        <button type='submit' value='send' className="submitBtn">Submit</button>
        <div className="links">
          <img src={FacebookIcon} alt="" className="link" />
          <img src={InstagramIcon} alt="" className="link" />
          <img src={twitterIcon} alt="" className="link" />
          <img src={youtubeIcon} alt="" className="link" />
          
        </div>
       </form>
       </div>
    </section>
  )
}

export default Contact
