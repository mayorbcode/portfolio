import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const About = () => {
  const animation = gsap.timeline();

  useEffect(() => {
    animation
      .fromTo('.svg', {bottom:'3%'}, {delay: 1, repeat: -1, ease: 'back', bottom:'10%', yoyo:true, duration: 2})
}, [])

  const scaleItem = (target, value, time) => {
    return gsap.to(target, { scale: value , duration: time});
  }
  return (
    <div className="about">
      <div className="bottom">
        <Link onMouseEnter={() => scaleItem('.bottom a', 1.2, 0.25)} onMouseLeave={() => scaleItem('.bottom a', 1, 0.25)} to='/projects'>View some of my work!</Link>
        <div className="svg">
        </div>
      </div>
    </div>
  )
}

export default About;