import React, {useEffect} from 'react';
import './About.css';
import {Link} from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import {useInView} from "react-intersection-observer";
 
const About = () => {
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
      animete.start({y:"30vw", opacity: -3})
    }
  },[inView]);
  return (
    <div ref={ref} className="about">
        <div className="i-lefta">
            <motion.div className="img"
              animate={animete}
            ></motion.div>
        </div>
        <motion.div
          animate={animation}
        className="i-rightg">
        <div><span className="nameq">Need a Creative Product?</span></div>
        <div><span className="namesq">I Can Help You</span></div>
            <div><span className="typingsq">Here Are Some Words About Me!</span></div>
            <div><span className="nonsq">Hi! I’m Sai ThuKha Myat Thu, and I’m a developer who has passion for building clean web 
            applications with intuitive functionality. I enjoy the process of turning ideas into reality using creative 
            solutions. I’m always curious about learning new skills, tools, and concepts. In addition to 
            working on various solo full stack projects, I have worked with creative teams,
             which involves daily stand-ups and communications, source control, and project management.
            </span></div>
            <div className="hui">
            <Link spy={true} to="contact" smooth={true} >
            <button className="buttones">Get In Touch</button>
            </Link>
            </div>
        </motion.div>
    </div>
  )
}

export default About