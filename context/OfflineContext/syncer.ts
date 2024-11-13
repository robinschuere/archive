const saveValue = (actions) => async (value: OfflineValue) => {
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
