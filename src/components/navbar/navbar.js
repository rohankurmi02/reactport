import React, { useState } from 'react';
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
// import logo from "../../assets/menu-icon.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {      
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />
      <div className="desktopmenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Client</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
      </div>
      
      <div className="dropdownMenuToggle" onClick={toggleDropdown}>
        <img src={logo} alt="Menu" className="desktopmenuImg" />
      </div>
      
      <div className={`dropdownMenu ${dropdownOpen ? 'show' : ''}`}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="dropdownMenuItem" onClick={toggleDropdown}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="dropdownMenuItem" onClick={toggleDropdown}>Client</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="dropdownMenuItem" onClick={toggleDropdown}>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="dropdownMenuItem" onClick={toggleDropdown}>About</Link>
      </div>

      <button className="desktopmenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactImg} alt="Contact" className="desktopmenuImg" />Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
