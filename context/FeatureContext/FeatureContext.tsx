import { createContext } from 'react';

const FeatureContext = createContext(null);

export const FeatureProvider = ({ features }) => {  
  return (
    <FeatureContext.Provider value={{ features }}>
      {children}
    </FeatureContext.Provider>
  );
}

export const useFeatureContext = () => {
  return useContext(FeatureContext)
}
