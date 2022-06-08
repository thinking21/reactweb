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
                <Accordion title="Where Can i Meet Myself?">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, porro illum, sunt recusandae magnam quasi eligendi fugit ratione veritatis deleniti voluptas neque. Tenetur beatae, perferendis nobis molestiae minima excepturi cum.
                </Accordion>
                <Accordion title="Where Can i Meet Myself?">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, porro illum, sunt recusandae magnam quasi eligendi fugit ratione veritatis deleniti voluptas neque. Tenetur beatae, perferendis nobis molestiae minima excepturi cum.
                </Accordion>
                <Accordion title="Where Can i Meet Myself?">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, porro illum, sunt recusandae magnam quasi eligendi fugit ratione veritatis deleniti voluptas neque. Tenetur beatae, perferendis nobis molestiae minima excepturi cum.
                </Accordion>
            </Box>
            <Box>
                <Accordion title="Where Can i Meet Myself?">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, porro illum, sunt recusandae magnam quasi eligendi fugit ratione veritatis deleniti voluptas neque. Tenetur beatae, perferendis nobis molestiae minima excepturi cum.
                </Accordion>
                <Accordion title="Where Can i Meet Myself?">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, porro illum, sunt recusandae magnam quasi eligendi fugit ratione veritatis deleniti voluptas neque. Tenetur beatae, perferendis nobis molestiae minima excepturi cum.
                </Accordion>
                <Accordion title="Where Can i Meet Myself?">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, porro illum, sunt recusandae magnam quasi eligendi fugit ratione veritatis deleniti voluptas neque. Tenetur beatae, perferendis nobis molestiae minima excepturi cum.
                </Accordion>
            </Box>
        </Container>
    </Section>
  )
}

export default Faq