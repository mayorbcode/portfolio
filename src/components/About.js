import React, { useEffect } from 'react';
import { usePageContext } from '../store/PageContext';

const About = () => {
  const { handleCurrentPage } = usePageContext();
  useEffect(() => {
    handleCurrentPage('about');
  }, [handleCurrentPage]);

  return (
    <div className="about">
      About
    </div>
  )
}

export default About;