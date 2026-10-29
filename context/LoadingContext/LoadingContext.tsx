import { createContext } from 'react';
import { hasFeature } from '@ROOT_FeatureFlags';

const FeatureContext = createContext(null);

const FeatureProvider = ({ features }) => {  
  return (
    <FeatureContext.Provider value={{ features, hasFeature: hasFeature(features) }}>
      {children}
    </FeatureContext.Provider>
  );
}

const useFeatureContext = () => {
  return useContext(FeatureContext)
}

export default { FeatureProvider, useFeatureContext };
