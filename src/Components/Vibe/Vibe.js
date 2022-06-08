import React, {useEffect} from 'react'
// import Image from '../../img/banner-bg.jpg';
import './Vibe.css';
import {Link} from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import {useInView} from "react-intersection-observer";

const Vibe = () => {
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
        translateY:0, translateX: 0, opacity: 1,
        transition: {
          duration:2, bounce: 0.3
        }
      });
    }
    if(!inView){
      animation.start({opacity:0,translateY: -100, translateX: -300})
      animete.start({translateY: 150,translateX: -150, opacity: -2})
    }
  },[inView]);
  return (
    <div ref={ref} className="vibe">
        <div className="i-leftbo" >
        <motion.div animate={animete} className="imgap"></motion.div>
        </div>
        <motion.div animate={animation} className="i-rightbo">
        <div><span className="namez">My Formal Bio </span></div>
            <div><span className="nonz">Nothing ever goes as plans in this world so I don’t plans. I always start with first step to begin my journey of a thousand miles and look at what’s not working and make a way to solve it and then plans to become a successful journey. So if you interest my journey, check my services to work together.
            </span></div>
            <Link spy={true} to="services" smooth={true} >
            <button className="butten">Check My Services</button>
            </Link>
        </motion.div>

    </div>
  )
}

export default Vibe