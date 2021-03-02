import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { usePageContext } from '../store/PageContext';

const Nav = () => {
  const { currentPage } = usePageContext();

  const underline = useMemo(() => {
    if (currentPage === 'home') {
      return {
        home: 'underline',
        about: 'none',
        projects: 'none',
        contact: 'none'
      }
    }
    else if (currentPage === 'about') {
      return {
        home: 'none',
        about: 'underline',
        projects: 'none',
        contact: 'none'
      }
    }
    else if (currentPage === 'projects') {
      return {
        home: 'none',
        about: 'none',
        projects: 'underline',
        contact: 'none'
      }
    }
    else if (currentPage === 'contact') {
      return {
        home: 'none',
        about: 'none',
        projects: 'none',
        contact: 'underline'
      }
    }
  }, [currentPage])

  return (
    <div className="nav">
      <Link style={{ textDecoration: `${underline.home}` }} to="/">Home</Link>
      <Link style={{ textDecoration: `${underline.about}` }} to="/about">About</Link>
      <Link style={{ textDecoration: `${underline.projects}` }} to="/projects">Projects</Link>
      <Link style={{ textDecoration: `${underline.contact}` }} to="/contact">Contact</Link>
    </div>
  )
}

export default Nav;