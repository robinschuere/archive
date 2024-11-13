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

const defaultSyncerConfig = { shouldInvalidateInsertAfterCheck: true, shouldInvalidateUpdateAfterCheck: true, shouldInvalidateRemoveAfterCheck: true }
const defaultSyncerInterval = 3000
const defaultStorageKey = 'DEFAULT_OFFLINE_KEY_PROVIDER';

const useOfflineReducer = (storageKey, actions) => {
  const [state, dispatch] = useReducer(reducer(storageKey), getLocalStorageData(storageKey) || {});

  return [state, dispatch, syncer(actions)];
}

export const OfflineProvider = ({ children, actions, syncerConfig = defaultSyncerConfig, syncerInterval = defaultSyncerInterval, storageKey= defaultStorageKey }) => {
  const [state, dispatch, synchronize] = useOfflineReducer(storageKey, actions);
  
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
    }, syncerInterval);
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
