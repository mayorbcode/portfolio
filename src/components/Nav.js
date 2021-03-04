import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

  return (
    <div className="nav">
      <NavLink activeStyle={{ textDecoration: 'underline' }} to="/" exact>Home</NavLink>
      <NavLink activeStyle={{ textDecoration: 'underline' }} to="/about">About</NavLink>
      <NavLink activeStyle={{ textDecoration: 'underline' }} to="/projects">Projects</NavLink>
      <NavLink activeStyle={{ textDecoration: 'underline' }} to="/contact">Contact</NavLink>
    </div>
  )
}

export default Nav;