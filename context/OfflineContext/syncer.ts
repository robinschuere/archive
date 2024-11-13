import { SyncerConfig, OfflineValue } from './types';

const defaultCheck = () => true;

export const syncer = (actions, config : SyncerConfig) => async (value: OfflineValue) => {
  const context = actions[value.contextValue];
  
  if (!context) {
    console.error(`Not existing context was given: '${value.contextValue}'. Make sure the provider gets an actions object that holds contexts and their actions.`);
    return false;
  }
  if (!context.get || !context.insert || !context.update || !context.remove) {
    console.error(`Context '${value.contextValue}' is not complete. \r\nSee to it that the functions \r\n'get', 'insert', 'update', 'remove'\r\nare always available!`);
    return false;
  }
  
  if (!['insert', 'update', 'remove'].includes(value.contextAction)) {
    console.error(`the given action '${value.contextAction}' is not able to be resolved! Make sure that the dispatch action holds the correct data values!`);
    return false;
  }
  
  if (!context.checkInsert || !context.checkUpdate || !context.checkRemove) {
    console.warn(`Context '${value.contextValue}' misses some functions which will check if specific actions can be inserted through the offline logic. They will default to 'true'`);
  }
  
  if (value.contextAction === 'insert') {
    const canInsert = await context.checkInsert ? context.checkInsert(value.params) : defaultCheck();
    if (canInsert) {
      await context.insert(value.params);
      return true;
    }
    return shouldValidateInsertAfterCheck ? true : false;
  }
  if (value.contextAction === 'update') {
    const canUpdate = await context.checkUpdate ? context.checkUpdate(value.params) : defaultCheck();
    if (canUpdate) {
      await context.update(value.id, value.params);
      return true;
    }
    return shouldValidateUpdateAfterCheck ? true : false;
  }
  if (value.contextAction === 'remove') {
    const canRemove = await context.checkRemove ? context.checkRemove(value.params) : defaultCheck();
    if (canRemove) {
      await context.remove(value.id);
      return true;
    }
    return shouldValidateRemoveAfterCheck ? true : false;
  }
  return false
}
