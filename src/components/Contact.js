import React, { useEffect } from 'react';
import ContactForm from './Form/ContactForm';
import gsap from 'gsap';

const animation = gsap.timeline();

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    animation
      .fromTo('.contact .svg', {bottom:'3%'}, {delay: 1, repeat: -1, ease: 'back', bottom:'10%', yoyo:true, duration: 2})
}, [])

  return (
    <div className="contact">
      <div className="top">
        <div className="text">
          <h1>Here's how you can reach me.</h1>
        </div>
      </div>
      <div className="middle">
        <a href="https://www.linkedin.com/in/patrick-bello-6796521b3/" target="_blank" rel="noreferrer">
          <p className="text">LinkedIn</p>
          <img style={{transitionDelay: '0.6s'}} src="https://img.icons8.com/color/56/000000/linkedin.png" alt="linkedin logo"/>
        </a>
        <a href="https://github.com/mayorbcode" target="_blank" rel="noreferrer">
          <p className="text">GitHub</p>
          <img style={{transitionDelay: '0.65s'}} src="https://img.icons8.com/fluent/56/000000/github.png" alt="github logo"/>
        </a>
        <a href="https://codepen.io/mayorbcode" target="_blank" rel="noreferrer">
          <p className="text">Codepen</p>
          <img style={{transitionDelay: '0.7s'}} src="https://img.icons8.com/material/56/ffffff/codepen.png" alt="codepen logo"/>
        </a>
      </div>
      <div className="bottom">
        <ContactForm />
        <div className="svg">
        </div>
      </div>
    </div>
  )
}

export default Contact;