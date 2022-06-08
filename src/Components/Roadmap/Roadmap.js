import React, { useLayoutEffect } from 'react'
import { useRef } from 'react';
import styled from 'styled-components';
import Drawsvg from '../Drawsvg'
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.section`
padding-left: 320px;
min-height: 100vh;
width: 53vw;
background-color: ${props => props.theme.body};
position: relative;
margin-top:6rem;

@media(max-width: 48em){
  padding-left: 50px;
}
`

const Title = styled.h1`
font-size: 34px;
text-transform: capitalize;
color: #555D59;
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
font-family: 'Poppins', sans-serif;
width: fit-content;

@media (max-width: 40em){
  width: 150%;
  font-size: 24px;
}
`;

const Grai = styled.h4`
color: #9e9ea1;
font-size: 17px;
font-family: 'Cabin', cursive;
display: flex;
justify-content: center;
align-items: center;
margin-top: -18px;

@media (max-width: 40em){
  width: 150%;
  font-size: 17px;
}
`

const Container = styled.div`
width: 97%;
height: 145vh;
background-color: ${(props) => props.theme.body};
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;

@media (max-width: 64em){
  width: 80%;
}

@media (max-width: 48em){
  width: 130%;
}

`
const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Items = styled.ul`
list-style: none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em){
  width: 90%;
}

&>*:nth-of-type(2n + 1){
  justify-content: start;

  @media (max-width: 48em){
    justify-content: center;
  }

  div{
    margin-top: -80px;
    text-align: right;
    margin-left: -40px;

    @media (max-width: 48em){
      text-align: left;
    p{
      border-radius: 0 20px 20px 40px;
    }
  }
  }

  p{
    border-radius: 20px 0 40px 20px;
  }

}

&>*:nth-of-type(2n){
  justify-content: end;

  @media (max-width: 48em){
    justify-content: center;
  }

  div{
    margin-top: -80px;
    text-align: left;
  }

  p{
    border-radius: 0 20px 20px 40px;
    
  }
}


`

const Item = styled.li`
width: 100%;
height: 100%;
display: flex;

@media (max-width: 48em){
  justify-content: flex-end !important;
}
`

const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;

@media (max-width: 48em){
  width: 70%;
}
`

const Box = styled.p`
height: fit-content;
color: black;
padding: 1rem;
margin-left: 15px;
position: relative;
border: 2px solid black;
box-shadow: 0 4px 8px rgba(0,0,0,0.15);
`

const SubTitle = styled.span`
display: block;
font-size: 16px;
font-family: 'Poppins', sans-serif;
color: rgb(132, 31, 3);
font-weight: 600;

@media (max-width: 40em){
  font-size: 12px;
}
`;

const Text= styled.span`
display: block;
font-size: 12px;
font-family: 'Poppins', sans-serif;
color: #9e9ea1;
font-weight: 400;
margin: 0.5rem 0;

@media (max-width: 40em){
  font-size: 8px;
}
`



const RoadMapItem = ({title, subtext, double,triple ,addToRefs}) => {
  return (
    <Item ref={addToRefs}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}<br/>{double}<br/>{triple}</Text>
        </Box>
      </ItemContainer>
    </Item>
  )
}


const Roadmap = () => {

  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(scrollTrigger);

  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)){
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {

    let t1 = gsap.timeline();
    revealRefs.current.forEach( (el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y:'0'
        },{
          y:'-30%',

          scrollTrigger:{
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=200px',
            end:'bottom center',
            scrub: true,
            // markers: true,
          }
        }
      )
    })

    return () => {

    };
  }, []);


  return (
      <Section>
          <Title className="key">My Key Abilities</Title>
          <Grai className="skil">Soft Skills</Grai>
          <Container>
            <SvgContainer>
                <Drawsvg />
            </SvgContainer>
            <Items>
              <Item>&nbsp;</Item>
              <RoadMapItem addToRefs={addToRefs} title="Time Management" subtext="- Stress Management" double="- Goal Setting" triple="- Organization"/>
              <RoadMapItem addToRefs={addToRefs} title="Problem Solving" subtext="Brainstorming -" double="Observation -" triple="Analysis -"/>
              <RoadMapItem addToRefs={addToRefs} title="Creativity" subtext="- Imagination " double="- Mind-mapping " triple="- Innovation "/>
              <RoadMapItem addToRefs={addToRefs} title="InterPersonal Skills" subtext="Networking -" double="Tolerance -" triple="Empathy -"/>
              <RoadMapItem addToRefs={addToRefs} title="Work Ethic" subtext="- Responsibility " double="- Discipline " triple="- Commitment "/>
              <RoadMapItem addToRefs={addToRefs} title="TeamWork" subtext="Conflict Management And Solution -" double="Idea Exchange -" triple="Collaboration -"/>
            </Items>
          </Container>
      </Section>
    
  )
}

export default Roadmap