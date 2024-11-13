type SyncerConfig = {
  shouldValidateInsertAfterCheck: boolean;
  shouldValidateUpdateAfterCheck: boolean;
  shouldValidateRemoveAfterCheck: boolean;
}

export const syncer = (actions, config : SyncerConfig) => async (value: OfflineValue) => {
  const context = actions[value.contextValue];
  
  if (!context) {
    console.error(`Not existing context was given: '${value.contextValue}'. Make sure the provider gets an actions object that holds contexts and their actions.`);
    return false;
  }
  if (!context.get || !context.insert || !context.update || !context.remove || !context.checkInsert || !context.checkUpdate || !context.checkRemove) {
    console.error(`Context '${value.contextValue}' is not complete. \r\nSee to it that the functions \r\n'get', 'insert', 'update', 'remove', 'checkInsert', 'checkUpdate', 'checkRemove' \r\nare always available!`);
    return false;
  }
  if (!['insert', 'update', 'remove'].includes(value.contextAction)) {
    console.error(`the given action '${value.contextAction}' is not able to be resolved! Make sure that the dispatch action holds the correct data values!`);
    return false;
  }
  
  if (value.contextAction === 'insert') {
    const canInsert = await context.checkInsert(value.params);
    if (canInsert) {
      await context.insert(value.params);
      return true;
    }
    return shouldValidateInsertAfterCheck ? true : false;
  }
  if (value.contextAction === 'update') {
    const canUpdate = await context.checkUpdate(value.params);
    if (canUpdate) {
      await context.update(value.id, value.params);
      return true;
    }
    return shouldValidateUpdateAfterCheck ? true : false;
  }
  if (value.contextAction === 'remove') {
    const canRemove = await context.checkRemove(value.params);
    if (canRemove) {
      await context.remove(value.id);
      return true;
    }
    return shouldValidateRemoveAfterCheck ? true : false;
  }
  return false
}
