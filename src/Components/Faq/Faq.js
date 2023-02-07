import React, { useLayoutEffect } from 'react'
import './Faq.css'
import styled from 'styled-components';
import Accordion from '../Accordion/Accordion';
import scrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useRef } from 'react';
import ConfettiCompo from './Confetti';

const Section = styled.section`
min-height: 80vh;
width: 100vw;
position: relative;
background-color: #E0DAD6;
margin-bottom: 100px;

@media (max-width: 1250px){
    margin-top: 350px;
}
@media (max-width: 920px){
    margin-top: 500px;
}
@media(max-width: 420px){
    margin-top: 1000px;
}

`

const Title = styled.h1`
text-align:center;
padding-top: 40px;
font-size: 34px;
text-transform: capitalize;
color: #555D59;
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
font-family: 'Poppins', sans-serif;
width: fit-content;

@media (max-width: 48em){
    font-size: 28px;
  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-evenly;
align-content: center;

@media (max-width: 64em){
    width: 80%;
}
@media (max-width: 48em){
    width: 90%;
    flex-direction: column;

    &>*:last-child{
        &>*:first-child{
            margin-top: 0;
        }
    }
}
`

const Box = styled.div`
width: 45%;
@media (max-width: 64em){
    width: 90%;
    align-self: center;

}
`
const Faq = () => {

    const ref = useRef(null);
    gsap.registerPlugin(scrollTrigger);
    useLayoutEffect(()=>{
        let element = ref.current;

        scrollTrigger.create({
            trigger: element,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            scrub: true,
        })

        return () =>{
        };
    }, [])

  return (
    <Section ref={ref} id="faqs">
        <ConfettiCompo />
        <Title>A Few Common Questions <br/> were Often Asked</Title>
        <Container>
            <Box>
                <Accordion title="What goals am I currently working towards?">
                “I'm currently working to become a Professional JavaEE Developer to build applications that helps the company process and also can give a solutions that every others asked in stakoverflow.”
                </Accordion>
                <Accordion title="When can I start?">
                “After learning more about this role, I am confident it would be a great fit for my experience and skill set. I can be available to start as soon as the beginning of the next work week.”
                </Accordion>
                <Accordion title="What is my wage expectation?">
                “As a fresher, My 1st priority is to gain knowledge and enhance my skills to be more productive for the company & also I need to become financially independent.
So, I will accept what you offered as per the company norms which will fulfill my economical needs.”
                </Accordion>
            </Box> 
            <Box>
                <Accordion title="What types of project I would like to work on?">
                “I consider my delivery app development project that connects with cloud native solutions to help it collect, track and analyze data about its customers’ ordering habits. The best one I’ve ever worked on. The reason is I learned so much while working on this project.”
                </Accordion>
                <Accordion title="What skills am I most interested in developing?">
                “I’d like to focus on improving my full-stack development skills. I feel like I have a good understanding of front-end development, and a fluency in back-end development, but I’d like to bridge those two more and get better at managing all parts of development.”
                </Accordion>
                <Accordion title="What was I doing during Covid pandemic?">
                “I studied Angular and React to good understanding of full-stack development with JavaEE, Spring. I mostly learned react and spring projects and aws services from youtube and udemy courses.”
                </Accordion>
            </Box>
        </Container>
    </Section>
  )
}

export default Faq