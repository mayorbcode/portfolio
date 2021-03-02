import React, { useEffect, useRef } from 'react';
import me from '../images/selfie.jpg';
import { usePageContext } from '../store/PageContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { handleCurrentPage } = usePageContext();

  const heading = useRef();
  const image = useRef();

  const mouseEnter = () => {
    image.current.style.transform = "scale(1.1)"
  }
  const mouseLeave = () => {
    image.current.style.transform = "scale(1)"
  }

  console.log(image);

  useEffect(() => {
    handleCurrentPage('home');
  }, [handleCurrentPage]);

  return (
    <div className="home">
      <div className="top">
        <h1 ref={heading} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} >
          <div>Hi there,</div>
          <div>I'm Patrick Bello,</div>
          <div>Developer.</div>
        </h1>
        <img ref={image} src={me} alt="selfie of patrick"/>
      </div>
      <div className="bottom">
        <Link to='/about'>Get to know me better!</Link>
      </div>
    </div>
  )
}

export default Home;