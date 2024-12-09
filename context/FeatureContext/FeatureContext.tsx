import { createContext } from 'react';
import { hasFeature } from '@ROOT_FeatureFlags';

const FeatureContext = createContext(null);

export const FeatureProvider = ({ features }) => {  
  return (
    <FeatureContext.Provider value={{ features, hasFeature: hasFeature(features) }}>
      {children}
    </FeatureContext.Provider>
  );
}

export const useFeatureContext = () => {
  return useContext(FeatureContext)
}
