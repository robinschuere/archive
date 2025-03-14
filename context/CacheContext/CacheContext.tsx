import { createContext } from 'react';

const CacheContext = createContext(null);

const CacheProvider = ({ dataConfig }) => {
  return (
    <CacheContext.Provider value={{  }}>
      {children}
    </CacheContext.Provider>
  );
}

const useCacheContext = () => {
  return useContext(CacheContext)
}

export default { FeatureProvider, useCacheContext };
