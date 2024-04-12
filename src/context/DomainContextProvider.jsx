import React, { useState } from 'react';
import DomainContext from './DomainContext';

const DomainContextProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <DomainContext.Provider value={{ showForm, setShowForm }}>
      {children}
    </DomainContext.Provider>
  );
};

export default DomainContextProvider;
