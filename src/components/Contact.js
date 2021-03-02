import React, { useEffect } from 'react';
import { usePageContext } from '../store/PageContext';

const Contact = () => {
  const { handleCurrentPage } = usePageContext();
  useEffect(() => {
    handleCurrentPage('contact');
  }, [handleCurrentPage]);

  return (
    <div className="contact">
      Contact
    </div>
  )
}

export default Contact;