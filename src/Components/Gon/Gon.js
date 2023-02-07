import React,{useEffect} from 'react'
import './Gon.css'
import  Images from '../../img/angular.png'
import Imags from '../../img/html.png'
import Imagss from '../../img/javascript.png'
import Imag from '../../img/css.png'
import Imagds from '../../img/react.png'
import Imagqs from '../../img/git.png'
import Imagws from '../../img/nodejs.png'
import Imagrs from '../../img/jquery.png'
import Imagts from '../../img/mysql.png'
import Imagas from '../../img/bootstrap.png'
import Imagls from '../../img/java.png'
import Imajs from '../../img/javaee.png'
import Imaas from '../../img/aws.png'
import Imahs from '../../img/hibernate.png'
import Imasp from '../../img/spring.png'
import Imads from '../../img/docker.png'
import Imaps from '../../img/postgresql.png'
import Imadb from '../../img/mongodb.png'
import Imaju from '../../img/junit.png'
import Imave from '../../img/maven.png'
import { motion, useAnimation } from 'framer-motion';
import {useInView} from "react-intersection-observer";

const Gon = () => {
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
      animete.start({translateY: -150,translateX: 150, opacity: -3})
    }
  },[inView]);
  return (
    <div ref={ref} className="gon" id='skills'>
         <motion.div className="i-leftt" animate={animete}>
         <div><span className="namee">Here is my skills to </span></div> 
        <div><span className="namees">represent my Expertise</span></div>
        <div><span className="typingsv">Have Experiences With</span></div>
        <div className="nb">I develop simple, intuitive and responsive user interface
           that helps users get things done with less effort and time with those technologies.
        </div>

        {/* <div className="btn-container">
      <label className="switch btn-color-mode-switch">
            <input type="checkbox" name="color_mode" id="color_mode" value="1"></input>
            <label htmlFor="color_mode" data-on="Tools" data-off="Skills" className="btn-color-mode-switch-inner"></label>
        </label>
        </div> */}
    </motion.div>

        <motion.div animate={animation} className="i-rightt">
          <div className="flex-container">
            <div className="flex-box">
              <img className="sii" src={Imags} alt="" />
            </div> 
            <div className="flex-box">
              <img className="sia" src={Imag} alt="" />
            </div>  
            <div className="flex-box">
            <img className="sii" src={Imagss} alt="" />
            </div> 
            <div className="flex-box">
            <img className="si" src={Images} alt="" />
            </div> 
            <div className="flex-box">
            <img className="sic" src={Imagds} alt="" />
            </div> 
            <div className="flex-box">
            <img className="siz" src={Imagws} alt="" />
            </div> 
            <div className="flex-box">
            <img className="sib" src={Imagqs} alt="" />
            </div> 
            <div className="flex-box">
            <img className="sif" src={Imagas} alt="" />
            </div> 
            <div className="flex-box">
            <img className="si" src={Imagrs} alt="" />
            </div> 
            <div className="flex-box">
            <img className="siv" src={Imagts} alt="" />
            </div> 

            <div className="flex-box">
              <img className="sis" src={Imagls} alt="" />
            </div> 
            <div className="flex-box">
              <img className="sia" src={Imajs} alt="" />
            </div>  
            <div className="flex-box">
            <img className="siw" src={Imaas} alt="" />
            </div> 
            <div className="flex-box">
            <img className="sih" src={Imahs} alt="" />
            </div> 
            <div className="flex-box">
            <img className="sib" src={Imasp} alt="" />
            </div> 
            <div className="flex-box">
            <img className="siz" src={Imads} alt="" />
            </div> 
            <div className="flex-box">
            <img className="sin" src={Imave} alt="" />
            </div> 
            <div className="flex-box">
            <img className="sib" src={Imaju} alt="" />
            </div> 
            <div className="flex-box">
            <img className="siz" src={Imadb} alt="" />
            </div> 
            <div className="flex-box">
            <img className="sil" src={Imaps} alt="" />
            </div> 
          </div>
        </motion.div>
    </div>
  )
}

export default Gon;