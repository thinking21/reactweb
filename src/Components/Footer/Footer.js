import React, {useEffect} from 'react'
import './Footer.css'
import {BiMap} from 'react-icons/bi'
import {BsTelephone} from 'react-icons/bs'
import {BiEnvelope} from 'react-icons/bi'
import {FaHeart} from 'react-icons/fa'
import { motion, useAnimation } from 'framer-motion';
import {useInView} from "react-intersection-observer";


const Footer = () => {
    const {ref, inView} = useInView({
        threshold: 0.2
      });
      const animation = useAnimation();
      const animete = useAnimation();
      const ani = useAnimation();
      const animet = useAnimation();
    
      useEffect(() => {
        if(inView){
          animation.start({
            opacity:1, translateY: 0, translateX: 0,
            transition:{
              duration:2, bounce: 0.3
            }
          });
          ani.start({
            opacity:1, translateY: 0, translateX: 0,
            transition:{
              duration:2, bounce: 0.3
            }
          });
          animet.start({
            y:0, opacity: 1,
            transition: {
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
            ani.start({opacity:-1,translateY: -100, translateX: 300})
          animation.start({opacity:0,translateY: -100, translateX: -300})
          animete.start({y:"-20vw", opacity: -2})
          animet.start({y:"-20vw", opacity: -10})
        } 
      },[inView]);
  return (
    <footer ref={ref} className="footer-distributed">
        <motion.div animate={animet} className="copy">
            <p>Copyright &copy; 2022 All rights reserved | Made with <FaHeart /> by PuzzleX</p>
        </motion.div>
    </footer>
  )
}

export default Footer