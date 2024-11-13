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
// Define the initial state
const initialState: StateValue = getLocalStorageData('OFFLINE_DATA') || {};
 
// Define the reducer function to handle state transitions
const reducer = (state, action) => {
  const now = new Date().valueOf();
  switch (action.type) {
    case 'add':
      state[now] = { ...action.data, time: now }
      return { ...state };
    case 'remove':
      delete state[action.time]
      return { ...state };
    default:
      throw new Error();
  }
}

export const OfflineProvider = ({ children, syncer , syncInterval = 3000 }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const intervalId = setInterval(syncer, syncInterval);
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
