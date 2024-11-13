export const syncer = (actions) => async (value: OfflineValue) => {
  const context = actions[value.contextValue];
  
  if (!context) {
    console.error(`Not existing context was given: '${value.contextValue}'. Make sure the provider gets an actions object that holds contexts and their actions.`);
    return false;
  }
  if (!context.get || !context.insert || !context.update || !context.remove || !context.check) {
    console.error(`Context '${value.contextValue}' is not complete. See to it that the functions 'get', 'insert', 'update', 'remove' and 'check' are always available!`);
    return false;
  }
  if (!['insert', 'update', 'remove'].includes(value.contextAction)) {
    console.error(`the given action '${value.contextAction}' is not able to be resolved! Make sure that the dispatch action holds the correct data values!`);
    return false;
  }
  
  if (value.contextAction === 'insert') {
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
