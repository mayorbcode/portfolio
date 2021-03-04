import React, {useEffect, useRef} from 'react';
import me from '../images/selfie.jpg';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const animation = gsap.timeline();

const Home = () => {
  const scaleItem = (target, value, time) => {
    return gsap.to(target, { scale: value , duration: time});
  }

  useEffect(() => {
    animation
      .fromTo('.svg', {bottom:'3%'}, {delay: 2, repeat: -1, ease: 'back', bottom: '10%', yoyo:true, duration: 2})
}, [])
  return (
    <div className="home">
      <div className="top">
        <h1 className="home-text">
          <div>Hi there,</div>
          <div>I'm Patrick Bello,</div>
          <div>Developer.</div>
        </h1>
        <img className='selfie' src={me} alt="selfie of patrick"/>
      </div>
      <div className="bottom">
        <Link to='/about'>Get to know me better!</Link>
        <div className="svg">
        </div>
      </div>
    </div>
  )
}

export default Home;