import React, { useContext, useState } from 'react';

export const PageContext = React.createContext();

export const usePageContext = () => useContext(PageContext);

const PageProvider = ({children}) => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  }

  const value = {
    currentPage: currentPage,
    handleCurrentPage: handleCurrentPage
  }
  return (
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  )
}

export default PageProvider;