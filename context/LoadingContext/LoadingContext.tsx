import { createContext } from 'react';

const LoadingContext = createContext(null);

const reducer = () => (state, action) => {
  switch (action.type) {
    case 'add';
      return [
        ...state,
        action.name
      ];
    case 'remove':
      return state.filter(s => s !== action.name);
    default:
      throw new Error();
  }
}

const LoadingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer(), []);
  const isLoading = loadingStates.length > 0;
  return (
    <LoadingContext.Provider value={{ isLoading, dispatch }}>
      {children}
    </LoadingContext.Provider>
  );
}

const useLoadingContext = () => {
  return useContext(LoadingContext)
}

export default { LoadingProvider, useLoadingContext };
