import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

  return (
    <div className="nav">
      <NavLink activeStyle={{ textDecoration: 'underline' }} to="/" exact>Home</NavLink>
      <NavLink activeStyle={{ textDecoration: 'underline' }} to="/about">About</NavLink>
      <NavLink activeStyle={{ textDecoration: 'underline' }} to="/projects">Projects</NavLink>
      <NavLink activeStyle={{ textDecoration: 'underline' }} to="/contact">Contact</NavLink>
      <svg class="hamburger" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="top" d="M0 0H500V100H0V0Z" fill="#110F0F"/>
        <path class="middle1" d="M0 205H500V305H0V205Z" fill="#110F0F"/>
        <path class="bottom" d="M0 400H500V500H0V400Z" fill="#110F0F"/>
        <path class="middle2" d="M0 206H500V306H0V206Z" fill="#110F0F"/>
      </svg>
    </div>
  )
}

export default Nav;