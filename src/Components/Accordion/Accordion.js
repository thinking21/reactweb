import React, { useState } from 'react'
import styled from 'styled-components'
import './Accordion.css'
import {BiPlus} from 'react-icons/bi'
import {BiMinus} from 'react-icons/bi'


const Container = styled.div`
cursor:pointer;
padding: 1rem 0.5rem;
display: flex;
flex-direction: column;
border-radius: .25rem;
background-color: white;
padding-left: 25px;
margin: 2rem 0;
color: #555D59;
font-family: 'Poppins', sans-serif;

@media (max-width: 48em){
    margin: 2rem 0;
}
`

const Title = styled.div`
font-size: 15px;
font-weight: 500;
display: flex;
justify-content: space-between;
align-items: center;
`

const Reveal = styled.div`
display: ${props => props.clicked ? 'block' : 'none'};
margin-top: 1rem;
color: grey;
font-size: 13px;
font-weight: 400;
line-height; 1.1rem;
`

const Name = styled.div`
display: flex;
align-items: center;

`

const Indicator = styled.span`
display: flex;
justify-content: center;
align-items: center;
font-size: 21px;
padding-right: 10px;
`


const Accordion = ({title, children}) => {
    const [collapse, setCollapse] = useState(false)
    
  return (
    <Container className="fok">
        <Title onClick={() => setCollapse(!collapse)}>
            <Name>
                <span>{title}</span>
            </Name>
            {
                collapse ? 
                <Indicator><BiMinus/></Indicator> : <Indicator><BiPlus/></Indicator>
            }
        </Title>
        <Reveal clicked={collapse}>
            {children}
        </Reveal>
    </Container>
  )
}

export default Accordion