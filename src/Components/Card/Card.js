import React from 'react'
import './Card.css'
import {FaTimes} from 'react-icons/fa';
import {BiCheckCircle} from 'react-icons/bi'
 
const Card = ({heading,detail}) => { 

        const modalViews = document.querySelectorAll('.services_modal');
        const modalBtns = document.querySelectorAll('.services_button2');
        const modalCloses = document.querySelectorAll('.services_modal-close');

        let modal = function(modalClick){
            modalViews[modalClick].classList.add('active-modal');
        }
        modalBtns.forEach((modalBtn, i) => {
            modalBtn.addEventListener('click', () => {
                modal(i)
            })
        })
        modalCloses.forEach((modalClose) => {
            modalClose.addEventListener('click', ()=>{
                modalViews.forEach((modalView) => {
                    modalView.classList.remove('active-modal');
                })
            })
        })
  return (
    <div className="card">
        <span className="hed">{heading}</span>
        <span className="det">{detail}</span>
        <div className="project-link">
            <span className="services_button1 servicess">See more </span>
            <span className="services_button2 servicess">Check over </span>
        </div>
        
        <div className="services_modal">
            <div className="services_modal-content">
            <span className="hed">{heading}</span>
            <span className="services_modal-close"><FaTimes /></span>
            <span className="services_modal-services grid">
                <span className="services_modal-service">
                    <span className="bicheck"><BiCheckCircle /></span>
                    <p>I Develop the user interface</p>
                </span>
                <span className="services_modal-service">
                    <span className="bicheck"><BiCheckCircle /></span>
                    <p>I Develop the user interface</p>
                </span>
                <span className="services_modal-service">
                    <span className="bicheck"><BiCheckCircle /></span>
                    <p>I Develop the user interface</p>
                </span>
                <span className="services_modal-service">
                    <span className="bicheck"><BiCheckCircle /></span>
                    <p>I Develop the user interface</p>
                </span>
            </span>
            </div>
        </div>
    </div>
  )
};

export default Card