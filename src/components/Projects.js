import React, { useEffect } from 'react';
import { usePageContext } from '../store/PageContext';

const Projects = () => {
  const { handleCurrentPage } = usePageContext();
  useEffect(() => {
    handleCurrentPage('projects');
  }, [handleCurrentPage]);

  return (
    <div className="projects">
      Projects
    </div>
  )
}

export default Projects;