import React, {useRef, useEffect} from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi';
import {TiPhoneOutline} from 'react-icons/ti';
import {RiMessengerLine} from 'react-icons/ri'
import {BsGithub} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion, useAnimation } from 'framer-motion';
import {useInView} from "react-intersection-observer";

const Contact = () => {
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_umjkz6v','template_069dfnq',form.current,'Ooj5z0_r5UrH85lS6')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
    e.target.reset()
  };
  return (
        <div className="contain" id='contact'>
        <div className="formm" ref={ref}>
          <motion.div animate={animation} className="left">
          <div className="opo">
            <h2 className="wannabe">Contact Me</h2>
            <div className="de">Got a question that google can't seem to figure out?</div>
            <div className="dea">Pick my brain guys.. I'd love to hear from you!</div>
            <div className="row">
              <div className="column">
                <a href="mailto:thinkingsai@gmail.com" className="ic"><HiOutlineMail/></a>
                <div className="gre">Email</div>
                <span className="mk">thinkingsai@gmail.com</span>
              </div>
              <div className="column">
                <span className="ic"><TiPhoneOutline/></span>
                <div className="gre">Phone</div>
                <span className="mkk">09778173272</span>
              </div>
              <div className="column">
                <a href="https://m.me/sai.thukha.1" className="ic"><RiMessengerLine/></a>
                <span ></span>
                <div className="gre">Messenger</div>
                <span className="mkm">m.me/sai.thukha.1</span>
              </div>
            </div>
          <form className="formBx" ref={form} onSubmit={sendEmail} >
            <div className="inputBox">
              <input type="text" name="to_name" required="required" />
              <span className="no">Name</span>
            </div>
            <div className="inputBox">
              <input type="email" name="from_name" required="required" />
              <span className="no">Email</span>
            </div>
            <div className="inputBox">
              <input type="text" name="from_name" required="required" />
              <span className="no">Subject</span>
            </div>
            <div className="inputBox">
              <textarea name="message" id="" required="required"></textarea>
              <span className="no">Type Your Message Here...</span>
            </div>
            <div className="mati">
            <button type="submit" className="buttonds" >Send Message</button>
            </div>

            </form>
            </div>
            <h4 className="fol">Follow Me Here</h4>
            <div className='ife'>
            <a href="https://www.facebook.com/sai.thukha.1/" className="logp"><FaFacebookF/></a>
            <a href="https://twitter.com/rikustk" className="lop"><FaTwitter/></a>
            <a href="https://github.com/Thinking95" className="lop"><BsGithub /></a>
            </div>

          </motion.div>

          <motion.div animate={animete} className="right"></motion.div>
        </div>
    </div> 
  )
}

export default Contact