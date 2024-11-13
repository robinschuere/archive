const actions = {
  todo: {
    get: async (id: string): Promise<Todo> => api.getTodo(id),
    update: async (id: string, params: any[]): Promise<void> => api.updateTodo(id, ...params),
    remove: async (id: string): Promise<void> => api.removeTodo(id),
    insert: async (params): Promise<void> => api.addTodo(...params),
    check: async (params): Promise<boolean> => api.checkIfDuplicateTodo(...params),
  }
}

const saveValue = async (value: OfflineValue) => {
  const context = actions[value.contextValue];
  if(!context) {
    console.error(`Context is available for value '${value.contextValue}'. See to it that the functions 'get', 'insert', 'update', 'remove' and 'check' are available as wel as the context!`);
    return false;
  }
  if(!context.get || !context.insert || !context.update || !context.remove || !context.check) {
    console.error(`Context is not complete for '${value.contextValue}'. See to it that the functions 'get', 'insert', 'update', 'remove' and 'check' are available!`);
    return false;
  }
  if(value.contextAction === 'insert') {
    const isDuplicate = await context.check(value.params);
    if (!isDuplicate) {
      await context.insert(value.params);
    }
    return true;
  }
  if (value.contextAction === 'update') {
    const existingValue = await context.get(value.id);
    if (existingValue.updatedAt < value.time) {
      await context.update(value.id, ...value.params);
    }
    return true;
  }
  if (value.contextAction === 'remove') {
    const existingValue = await context.get(value.id);
    if (!existingValue.removedAt) {
      await context.remove(value.id);
    }
    return true;
  }
  return false
}

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

const OfflineProvider = ({ children ) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const saveValues = () => {
    // get the oldest value
    const eldest = state[Object.keys(state).sort()[0]];
    saveValue(eldest);
  }

  useEffect(() => {
    const intervalId = setInterval(saveValues, 1000);
    () => clearInterval(intervalId);
  }, []);

// In this return value, we passed-in children as the CONSUMER of the PROVIDER
// This will able children components to access the data inside the context
  return (
    <IncrementContext.Provider value={{ ...state, dispatch }}>
      {children}
    </IncrementContext.Provider>
  );
}
