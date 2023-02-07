import React, { useLayoutEffect, useRef } from 'react'
import styled, {keyframes} from 'styled-components';
import Vector from '../Icons/Vector';
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';

const VectorContainer = styled.div`
position: absolute;
top: 0.5rem;
left: 98%;
transform: translateX(-50%);
width: 100%;
height: 100%;
overflow: hidden;

svg{
    width: 100%;
    height: 100%%;
}

@media (max-width: 48em){
    left: 10rem;
  }
`

const Bounce = keyframes`
    from { transform: translateX(-50%) scale(0.5); }
    to { transform: translateX(-50%) scale(1); }
`

const Ball = styled.div`
    position: absolute;
    top: 0;
    left: 50.9%;
    transform: translateX(-50%);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: black;
    animation: ${Bounce} 0.5s linear infinite alternate;

    @media (max-width: 48em){
        left: 0.5rem;
      }
    @media (max-width: 420px){
        left: 3.3rem;
    }
`


const Drawsvg = () => {
const ref = useRef(null);
const ballRef = useRef(null);

gsap.registerPlugin(scrollTrigger);
useLayoutEffect(() => {
    let element = ref.current;

    let svg = document.getElementsByClassName("svg-path")[0];

    const length = svg.getTotalLength();

    svg.style.strokeDasharray = length;

    svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline({
        scrollTrigger:{
            trigger:element,
            start:"top center",
            end: "bottom bottom",
            onUpdate: (self) => {
                const draw = length * self.progress;

                svg.style.strokeDashoffset = length - draw;
            },
            onToggle: self => {
                if(self.isActive){
                    console.log("Scrolling is active");
                    ballRef.current.style.display = 'none';
                }else{
                    console.log("Scrolling is not active");
                    ballRef.current.style.display = 'inline-block';
                }
            }
        }
    })
    return () => {
        if(t1) t1.kill();
    };

}, []);

  return (
    <>
    <Ball ref={ballRef}/>
    <VectorContainer ref={ref}>
        <Vector />
    </VectorContainer>
    </>
  )
}

export default Drawsvg