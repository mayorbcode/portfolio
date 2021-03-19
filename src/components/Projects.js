import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import works from '../utilities/works.js';

const animation = gsap.timeline();

const Projects = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    animation
      .fromTo('.projects .svg', {bottom:'3%'}, {delay: 1, repeat: -1, ease: 'back', bottom:'10%', yoyo:true, duration: 2})
}, [])

  const gallery = works.map(work => {
    return (
      <div key={work.title} className='item'>
        <h1>{work.title}</h1>
        <figure>
          <img src={work.image} alt={work.title} />
          <figcaption>
            <a href={work.url} target="_blank" rel="noreferrer">Project</a>
            <a href={work.repo} target="_blank" rel="noreferrer">Repository</a>
          </figcaption>
        </figure>
      </div>
    )
  })

  return (
    <div className="projects">
      <div className="top">
        <h1>Here are a few of my projects.</h1>
        <div className="gallery">
          {gallery}
        </div>
      </div>
      <div className="bottom">
        <Link to='/contact'>Get in touch!</Link>
        <div className="svg">
        </div>
      </div>
    </div>
  )
}

export default Projects;