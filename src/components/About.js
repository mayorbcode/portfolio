import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import expressLogo from '../images/express-logo.svg';

const animation = gsap.timeline();

const About = (props) => {

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    animation
      .fromTo('.about .svg', {bottom:'3%'}, {delay: 1, repeat: -1, ease: 'back', bottom:'10%', yoyo:true, duration: 2})
}, [])

  return (
    <div className="about">
      <div className="top">
        <div className="text">
          <h1>I'm passionate about programming, working out and food (yes, food).</h1>
          <p>Here are a few tools I'm fairly competent at using:</p>
        </div>
       </div>
        <div className="middle">
          <div className="tools">
            <div className="frontend">
              <p>Frontend</p>
              <div className="logos">
                <img style={{transitionDelay:"0.6s"}} src="https://img.icons8.com/color/48/000000/html-5.png" alt="html logo"/>
                <img style={{transitionDelay:"0.65s"}} src="https://img.icons8.com/color/48/000000/css3.png" alt="css logo"/>
                <img style={{transitionDelay:"0.7s"}} src="https://img.icons8.com/color/48/000000/javascript.png" alt="javascript logo"/>
                <img style={{transitionDelay:"0.75s"}} src="https://img.icons8.com/officel/48/000000/react.png" alt="react logo"/>
              </div>
            </div>
            <div className="backend">
              <p>Backend</p>
              <div className="logos">
                <img style={{transitionDelay:"0.6s"}} src="https://img.icons8.com/color/64/000000/nodejs.png" alt="node js logo"/>
                <img style={{transitionDelay:"0.65s"}} className="express-svg" src={expressLogo} alt="express js logo"/>
                <img style={{transitionDelay:"0.7s"}} src="https://img.icons8.com/color/48/000000/mongodb.png" alt="mongo db logo"/>
                <img style={{transitionDelay:"0.75s"}} src="https://img.icons8.com/nolan/48/mysql.png" alt="my sql logo" />
              </div>
            </div>
            <div className="other">
              <p>Other</p>
              <div className="logos">
                <img style={{transitionDelay:"0.6s"}} src="https://img.icons8.com/color/48/000000/git.png" alt="git logo" />
                <img style={{transitionDelay:"0.65s"}} src="https://img.icons8.com/color/48/000000/npm.png" alt="npm logo"/>
                <img style={{transitionDelay:"0.7s"}} src="https://img.icons8.com/color/48/000000/firebase.png" alt="firebase logo" />
                <img style={{transitionDelay:"0.75s"}} src="https://img.icons8.com/dusk/48/000000/webpack.png" alt="webpack logo" />
              </div>
            </div>
        </div>
      </div>
      <div className="bottom">
        <Link to='/projects'>View some of my work!</Link>
        <div className="svg">
        </div>
      </div>
    </div>
  )
}

export default About;