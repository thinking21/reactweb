import React, {useEffect} from 'react'
import styled from 'styled-components';
import './Portfolio.css'
import { motion, useAnimation } from 'framer-motion';
import {useInView} from "react-intersection-observer";



const Section = styled.section`
min-height: 80vh;
width: 100vw;
position: relative;
background-color: white;
margin-bottom: 100px;
justify-content: center;

padding-top: 150px;
flex-directions: column;
`


const Portfolio = () => {
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
      animation.start({opacity:-3,translateY: -100, translateX: -300})
      animete.start({y:"-20vw", opacity: -1})
      animet.start({y:"20vw", opacity: -3})
    }
  },[inView]);

  return (
    <Section ref={ref}>
        <motion.div animate={animet} className="project-heading">
          <span>Let see my work!</span>
          <h3>My Portfolio</h3>
        </motion.div>

        {/* <ul className="project-filter">
            <li className="list project-filter-active" datatype="all">All</li>
            <li className="list" datatype="App">Web App</li>
            <li className="list" datatype="Design">Web Design</li>
            <li className="list" datatype="Clone">Clone App</li>
            <li className="list" datatype="AI">AI</li>
        </ul> */}
              <div ref={ref} className="higj">
              <motion.div animate={ani} className="portfolios">
                <div className="portfolio-box portfolio-box-1" id="App" ></div>
                <div className="portfolio-box portfolio-box-2" id="Design"></div>
                <div className="portfolio-box portfolio-box-3" id="Clone"></div>
              </motion.div>
              <motion.div animate={animation} className="portfolioes">
                <div className="portfolio-box portfolio-box-4" id="AI Design"></div>
                <div className="portfolio-box portfolio-box-5" id="App"></div>
                <div className="portfolio-box portfolio-box-6" id="Design"></div>
              </motion.div>
              </div>
              
    </Section>
    
  )
  
}

export default Portfolio