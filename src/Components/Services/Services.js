import React, {useEffect} from 'react'
import './Services.css'
import Card from '../Card/Card'
import { motion, useAnimation } from 'framer-motion';
import {useInView} from "react-intersection-observer";

const Services = () => {
  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();
  const animete = useAnimation();
  const ani = useAnimation();
  const anim = useAnimation();
  const anima = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        opacity:1, translateY: 0, translateX: 0,
        transition:{
          duration:2, bounce: 0.3
        }
      });
      anim.start({
        opacity:1, translateY: 0, translateX: 0,
        transition:{
          duration:2, bounce: 0.3
        }
      });
      anima.start({
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
      ani.start({
        y:0, opacity: 1,
        transition: {
          duration:2, bounce: 0.3
        }
      });
    }
    if(!inView){
      anim.start({opacity:0,translateY: 100, translateX: 300})
      anima.start({opacity:0,translateY: 100, translateX: -300})
      animation.start({opacity:0,translateY: -100, translateX: -300})
      animete.start({y:"-30vw", opacity: -3})
      ani.start({y:"30vw", opacity: -1})
    }
  },[inView]);

  return (
    <div ref={ref} className="services" id='services'>
        <motion.div animate={animation} className="awesome">
        <span className="mmc">Things I'm crazy and loved to do</span>
        <span className="jg">My Services</span>
        <span className="big">
        We help our clients succeed by creating brand identities,digital experiences, and
        printmaterials that communicate clearly,achieve marketing goals, and look fantastic.
        </span>
        </motion.div>
        <div>
          <motion.div animate={anim} className="dev">
            <Card
              heading = {'Web Development'}
              detail = {"Premium Quality Web Development Services Within Your Door!"}
            />
          </motion.div>
          <motion.div animate={anima} className="design">
            <Card
              heading = {'Web Design'}
              detail = {"Premium Quality Web Development Services Within Your Door!"}
            />
          </motion.div>
          <motion.div animate={anima} className="brand">
            <Card
              heading = {'Branding'}
              detail = {"Premium Quality Web Development Services Within Your Door!"}
            />
          </motion.div>
          <motion.div animate={anim} className="commer">
            <Card
              heading = {'E-Commerce'}
              detail = {"Premium Quality Web Development Services Within Your Door!"}
            />
          </motion.div>
        </div>
    </div>
  )
}

export default Services