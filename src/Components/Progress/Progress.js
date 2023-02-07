import React, {useEffect} from 'react'
import "./Progress.css"
import { motion, useAnimation } from 'framer-motion';
import {useInView} from "react-intersection-observer";

const Progress = () => {
  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();
  const animete = useAnimation();
  const anime = useAnimation();

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
      anime.start({
        x:0, opacity: 1,
        transition: {
          duration:2, bounce: 0.3
        }
      });
    }
    if(!inView){
      animation.start({translateY: 150,translateX: -150, opacity: -3})
      animete.start({translateY: -150,translateX: 150, opacity: -3})
      anime.start({x:"-40vw", opacity: 0})
    }
  },[inView]);
  return (
    <div ref={ref} className="progress">
        <motion.div animate={animation} className="each">" a <span className="little">little progress</span> each day</motion.div>
        <motion.div animate={anime} className="up"> adds up to <span className="little">big results </span> "</motion.div>
    </div>
  )
}

export default Progress