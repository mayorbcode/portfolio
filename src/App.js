import React from 'react';
import { BrowserRouter as Router, Route, useLocation, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { CSSTransition } from 'react-transition-group';
// import { gsap } from 'gsap';
// import animations from './utilities/animationFunctions';

const App = () => {
  // const location = useLocation();
  const routes = [
    {path: '/', name: 'Home', Component: Home},
    {path: '/about', name: 'About', Component: About},
    {path: '/projects', name: 'Projects', Component: Projects},
    {path: '/contact', name: 'Contact', Component: Contact}
  ]

  return (
    <div className="app">
      <Router>
          <Nav />
              {routes.map(({ path, name, Component }) => {
                return (
                  <Route key={name} path={path} exact>
                    {({match}) => (
                      <CSSTransition
                        in={match != null}
                        unmountOnExit
                        timeout={1500}
                        classNames='page'
                      >
                        <div className="page">
                          <Component />
                        </div>
                      </CSSTransition>)}
                  </Route>
                )}
              )}
      </Router>
    </div>
  )
}

// const animation = gsap.timeline();

// const animations = {
//   homeIn: () => {
//     return  (
//       animation
//         .fromTo('.selfie', {scale: 0}, {scale: 1, delay: 0.25, ease: 'back', duration: 1})
//         .from('.top div:first-child', {xPercent: -100, ease: 'back', duration: 0.5}, '-=0.5')
//         .from('.top div:nth-child(2)', {yPercent: -400, ease: 'back', duration: 0.5}, '-=0.25')
//         .from('.top div:last-child', {xPercent: 100, ease: 'back', duration: 0.5}, '-=0.25')
//         .from('.bottom a', {yPercent: 400, ease: 'back', duration: 0.5}, '-=0.25')
//         .from('.home .svg', {yPercent: 150, ease: 'back', duration: 0.5}, '<')
//         .fromTo('.home .svg', { y: 0 }, {y: 30, repeat: -1, ease: 'linear', duration: 2, yoyo: true, delay: .4})
//     )
//   },
//   homeOut: () => {
//     return (
//       animation
//         .fromTo('.selfie', {scale: 1}, {scale: 0, delay: 0, duration: 0.5})
//         .to('.top div:first-child', {xPercent: -100, duration: 0.5}, '<')
//         .to('.top div:nth-child(2)', {yPercent: -400, duration: 0.5}, '<')
//         .to('.top div:last-child', {xPercent: 100, duration: 0.5}, '<')
//         .to('.bottom a', {yPercent: 400, duration: 0.5}, '<')
//         .to('.home .svg', {yPercent: -1000, duration: 0.5}, '<')
//     )
//   },
//   aboutIn: () => {
//     return (
//       animation
//       .from('.about .svg', {yPercent: 150, ease: 'back', duration: 0.5, delay: 0.5}, '<')
//       .fromTo('.about .svg', { y: 0 }, {y: 30, repeat: -1, ease: 'linear', duration: 2, yoyo: true, delay: .4})
//     )
//   },
//   aboutOut: () => {
//     return (
//       animation
//       .to('.about .svg', {yPercent: -1000, delay: 0, duration: 0.5})
//     )
//   }
// }

export default App;