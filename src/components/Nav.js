import React, {useRef} from 'react';
import { NavLink } from 'react-router-dom';
// import gsap from 'gsap';


const Nav = () => {
  const ham = useRef(null);
  const list = useRef(null);
  
  const toggleHamburger = () => {
    console.log('i ran');
    if (ham.current !== null && list.current !== null) {
      ham.current.classList.toggle('animate');
      list.current.classList.toggle('nav-list');
    }
  }
  const toggleHamburgerLinks = (e) => {
    if ((e.target.classList.contains('active') === false) && (window.innerWidth <= 880)) {
      toggleHamburger();
  }

  }
  return (
    <div className="nav" ref={list}>
      <svg 
          className="hamburger"
          ref={ham}
          onClick={toggleHamburger}
          viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="top" d="M0 0H500V100H0V0Z" fill="white"/>
        <path className="middle1" d="M0 205H500V305H0V205Z" fill="white"/>
        <path className="bottom" d="M0 400H500V500H0V400Z" fill="white"/>
        <path className="middle2" d="M0 206H500V306H0V206Z" fill="white"/>
      </svg>
      <div className="nav-links">
        <NavLink onClick={toggleHamburgerLinks} activeStyle={{ textDecoration: 'underline' }} to="/" exact>Home</NavLink>
        <NavLink onClick={toggleHamburgerLinks} activeStyle={{ textDecoration: 'underline' }} to="/about">About</NavLink>
        <NavLink onClick={toggleHamburgerLinks} activeStyle={{ textDecoration: 'underline' }} to="/projects">Projects</NavLink>
        <NavLink onClick={toggleHamburgerLinks} activeStyle={{ textDecoration: 'underline' }} to="/contact">Contact</NavLink>
      </div>
    </div>
  )
}

export default Nav;