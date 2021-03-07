import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import expressLogo from '../images/express-logo.svg';

const About = () => {
  const animation = gsap.timeline();

  useEffect(() => {
    animation
      .fromTo('.svg', {bottom:'3%'}, {delay: 1, repeat: -1, ease: 'back', bottom:'10%', yoyo:true, duration: 2})
}, [animation])

  const scaleItem = (target, value, time) => {
    return gsap.to(target, { scale: value , duration: time});
  }
  return (
    <div className="about">
      <div className="top">
        <div className="text">
          <h1>I'm passionate about programming, working out and food (yes, food).</h1>
          <p>Here are a few tools i'm fairly competent at using:</p>
        </div>
       </div>
        <div className="middle">
          <div className="tools">
            <div className="frontend">
              <p>Frontend</p>
              <div className="logos">
                <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="html logo"/>
                <img src="https://img.icons8.com/color/48/000000/css3.png" alt="css logo"/>
                <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="javascript logo"/>
                <img src="https://img.icons8.com/officel/48/000000/react.png" alt="react logo"/>
              </div>
            </div>
            <div className="backend">
              <p>Backend</p>
              <div className="logos">
                <img src="https://img.icons8.com/color/64/000000/nodejs.png" alt="node js logo"/>
                <img className="express-svg" src={expressLogo} alt="express js logo"/>
                <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="mongo db logo"/>
                <img src="https://img.icons8.com/nolan/48/mysql.png" alt="my sql logo" />
              </div>
            </div>
            <div className="other">
              <p>Other</p>
              <div className="logos">
                <img src="https://img.icons8.com/color/48/000000/git.png" alt="git logo" />
                <img src="https://img.icons8.com/color/48/000000/npm.png" alt="npm logo"/>
                <img src="https://img.icons8.com/color/48/000000/firebase.png" alt="firebase logo" />
                <img src="https://img.icons8.com/dusk/48/000000/webpack.png" alt="webpack logo" />
              </div>
            </div>
        </div>
      </div>
      <div className="bottom">
        <Link onMouseEnter={() => scaleItem('.bottom a', 1.2, 0.25)} onMouseLeave={() => scaleItem('.bottom a', 1, 0.25)} to='/projects'>View some of my work!</Link>
        <div className="svg">
        </div>
      </div>
    </div>
  )
}

export default About;