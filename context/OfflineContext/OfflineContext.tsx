import { useReducer, useContext, useEffect } from 'react';
import { syncer } from './syncer';

// get the current data
const getLocalStorageData=(key: string) => {
  const storage = localStorage.getItem(key);
  return JSON.parse(storage)
}

// set the data in localStorage data
const setLocalStorageData = (key: string, value: StateValue) => {
  const isInValid = Object.entries(value).find(s => !s.contextValue || !s.contextAction || !s.id) 
    || Object.entries(value).find(s => ['update', 'insert'].includes(s.contextAction) && (!Array.isArray(s.params) || !s.params.length));
  if (isInValid) {
    throw new Error('Values to store are not in the correct format!');
  }
  localStorage.setItem(key, JSON.stringify(value));
}
 
// Define the reducer function to handle state transitions
const reducer = (key) => (state, action) => {
  const now = new Date().valueOf();
  switch (action.type) {
    case 'add':
      state[now] = { ...action.data, key: now }
      const newState = { ...state };
      setLocalStorageData(key, newState);
      return newState;
    case 'remove':
      delete state[action.key]
      const newState =  { ...state };
      setLocalStorageData(key, newState);
      return newState;
    default:
      throw new Error();
  }
}

export const OfflineProvider = ({ children, actions, syncInterval = 3000, key= 'DEFAULT_OFFLINE_KEY_PROVIDER' }) => {
  const [state, dispatch] = useReducer(reducer(key), getLocalStorageData(key) || {});
  const synchronize = syncer(actions);
  
  useEffect(() => {
    const intervalId = setInterval(async () => {
      const stateValueKeys = Object.keys(state).sort();
      if (stateValueKeys.length > 0) {
        try {
          const resolved = await synchronize(state[stateValueKeys[0]);
          if (resolved) {
            dispatch({ type: 'remove', key: state[stateValueKeys[0].key })
          }
        } catch(ex) {
          console.error(ex)
        }
      }
    }, syncInterval);
    () => clearInterval(intervalId);
  }, [saveValues]);
  
  return (
    <OfflineContext.Provider value={{ ...state, dispatch }}>
      {children}
    </OfflineContext.Provider>
  );
}

export const useOfflineContext = () => {
  return useContext(OfflineContext)
}
