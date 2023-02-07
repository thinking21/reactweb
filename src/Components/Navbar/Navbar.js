import React,{useState} from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
  
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");
    const navToggle = () => {
      active === "nav_menu" 
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

      toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
    };
  return (
    <nav className="nav">
        <div className="nav_brand">PuzzleX</div>
        <ul className={active}>
          <Link spy={true} to="home" smooth={false} activeClass="active-link" >
            <li className="nav_item ty"><a href='#' className="nav_link">
            Home
            </a></li>
            </Link>
            <Link spy={true} to="about" smooth={false}  activeClass="active-link">
            <li className="nav_item tys"><a href='#' className="nav_link">
            About
              </a></li>
              </Link>
              <Link spy={true} to="skills" smooth={false} activeClass="active-link" >
            <li className="nav_item tyu"><a href='#' className="nav_link">
            Skills
              </a></li>
              </Link>
              <Link spy={true} to="services" smooth={false} activeClass="active-link">
            <li className="nav_item tyi"><a href='#' className="nav_link">
            Services
              </a></li>
              </Link>
              <Link spy={true} to="faqs" smooth={false} activeClass="active-link">
            <li className="nav_item tyo"><a href='#' className="nav_link">
            FAQS
              </a></li>
              </Link>
              <Link spy={true} to="contact" smooth={false} activeClass="active-link">
            <li className="nav_item typ"><a href='#' className="nav_link">
            Contact
              </a></li>
              </Link>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </nav>
  )
}

export default Navbar