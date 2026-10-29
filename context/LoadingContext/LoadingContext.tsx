import { createContext } from 'react';

const LoadingContext = createContext(null);

export type PageLoadingLevel = 'Page';

type LoadingState = {
  name: string     // The name of the loading state 
  level: string    // The level (this could be a logical block like PageLoadingLevel or something more granular. for the user to listen to
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'add';
      return [
        ...state,
        { name: action.name, level: action.level },
      ];
    case 'remove':
      return state.filter(s => s.name !== action.name);
    default:
      throw new Error();
  }
}

const LoadingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  const isPageLoading = state.filter(s => s.level === PageLoadingLevel).length > 0;
  
  const isLoading = (name: string) => {
    return state.filter(s => s.name === name).length > 0;
  };
  
  return (
    <LoadingContext.Provider value={{ isPageLoading, isLoading, dispatch }}>
      {children}
    </LoadingContext.Provider>
  );
}

const useLoadingContext = () => {
  return useContext(LoadingContext)
}

export default { LoadingProvider, useLoadingContext };
