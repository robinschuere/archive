import { createContext, useEffect } from 'react';
import { initialize, checkData, getData, refreshData } from './cache';

const CacheContext = createContext(null);

const CacheProvider = ({ dataConfig }) => {
  useEffect(() => {
    initialize();
    setInterval(checkData, 60 * 1000);
  }, []);
  
  return (
    <CacheContext.Provider value={{ getData, refreshData }}>
      {children}
    </CacheContext.Provider>
  );
}

const useCacheContext = () => {
  return useContext(CacheContext)
}

export default { FeatureProvider, useCacheContext };
