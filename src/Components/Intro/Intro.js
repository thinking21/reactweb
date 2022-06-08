import React, {useEffect} from 'react';
import './Intro.css';
import Image from '../../img/355.jpg';
import Imagez from '../../img/bib.jpeg';
import Resume from "../../img/SAI THUKHA MYAT THU.pdf";
import {Link} from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import {useInView} from "react-intersection-observer";


const Intro = () => {
  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();
  const animete = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        opacity:1, translateY: 0, translateX: 0,
        transition:{
          duration:2, bounce: 0.3
        }
      });
      animete.start({
        y:0, opacity: 1,
        transition: {
          duration:2, bounce: 0.3
        }
      });
    }
    if(!inView){
      animation.start({opacity:0,translateY: -100, translateX: -300})
      animete.start({y:"-40vw", opacity: 0})
    }
  },[inView]);
  
    
  return (
    <div id='home'>
      <div ref={ref} className="intro">
        <motion.div className="i-left" 
        animate={animation}
          >
            <div className="i-name">
            <div><span className="welcome">Welcome to my world!</span></div>
            <div><span className="name">Hi, I'm &nbsp;<span className="hello">Sai ThuKha </span></span></div>
                    <div><span className="typing">Java EE Developer / Freelance Web Developer</span></div>
                    <div><span className="non">A Passion to become Java Web Developer Who focuses on writing clean, elegant and efficient code.
                        Have Rich Experience in website design and building. I’m always curious about learning new skills, tools, and concepts.
                        Love Java, HTML, CSS And Javascript And Work For Money!
                    </span></div>
            </div>
            <div> 
            <span className="bun">
            <Link spy={true} to="contact" smooth={true} >
            <button className="buttons">Hire Me</button>
            </Link>
            </span>
            <span className="ton">
            <a href={Resume} download>
            <button className="button">Download CV</button>
            </a>

            </span>
            </div>
        </motion.div>
        <div className="i-right"
         >
          <motion.img className="about_me" 
            animate={animete}
           src={Image} alt="" />
          <img className="top-img"  src={Imagez} alt="" />
          <div className="shape" ></div>
        </div>
    </div>
    </div>
    
    
  )
}

export default Intro