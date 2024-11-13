import { SyncerConfig, OfflineValue } from './types';

const defaultCheck = () => true;

const checkContextSynchronizerSetup = (actions) => {
  const invalidSetups = Object.entries(actions).filter(context => {
    if (!context.insert || !context.update || !context.remove) {
      console.error(`Context '${value.contextValue}' is not complete. \r\nSee to it that the functions \r\n'insert', 'update' and 'remove'\r\n are always available!`);
      return true;
    }
  
    if (!context.checkInsert || !context.checkUpdate || !context.checkRemove) {
      console.warn(`Context '${value.contextValue}' misses some functions which will check if specific actions can be inserted through the offline logic. They will default to 'true'`);
    }
  });
  if (invalidSetups.length > 0) {
    throw new Error('Invalid Synchronization setups encountered.');
  }
}

const checkDispatchedContextAction = (contextAction) => {
  if (!['insert', 'update', 'remove'].includes(contextAction)) {
    throw new Error(`the given action '${contextAction}' is not able to be resolved! Make sure that the dispatch action holds the correct data values!`);
  }
}

const getContext = (actions, contextValue) => {
  const context = actions[value.contextValue];
  if (!context) {
    throw new Error(`Not existing context was given: '${contextValue}'. Make sure the provider gets an actions object that holds contexts and their specific actions!`);
  }
  return context;
}

const insert = async (context, params, shouldValidateInsertAfterCheck) => {
  const canInsert = await (context.checkInsert ? context.checkInsert(params) : defaultCheck());
  if (canInsert) {
    await context.insert(value.params);
    return true;
  }
  return shouldValidateInsertAfterCheck ? true : false;
}

const update = async (context, id, params, shouldValidateUpdateAfterCheck) => {
  const canUpdate = await (context.checkUpdate ? context.checkUpdate(id, params) : defaultCheck());
  if (canUpdate) {
    await context.update(value.id, value.params);
    return true;
  }
  return shouldValidateUpdateAfterCheck ? true : false;
}

const remove = async (context, id, shouldValidateRemoveAfterCheck) => {
  const canRemove = await (context.checkRemove ? context.checkRemove(id) : defaultCheck());
  if (canRemove) {
    await context.remove(value.id);
    return true;
  }
  return shouldValidateRemoveAfterCheck ? true : false;
}

export const syncer = (actions, config : SyncerConfig) => {
  if (checkContextSynchronizerSetup(actions)) {
    throw new Error('Syncer setup is invalid...');
  } 
  
  const synchronizer = async (value: OfflineValue) => {
    const context = getContext(actions, value.contextValue);
    checkDispatchedContextAction(value.contextAction)

    if (value.contextAction === 'insert') {
      const inserted = await insert(context, value.params, config.shouldValidateInsertAfterCheck);
      return inserted;
    }
    if (value.contextAction === 'update') {
      const updated = await update(context, value.id, value.params, config.shouldValidateUpdateAfterCheck)
      return updated;
    }
    if (value.contextAction === 'remove') {
      const removed = await remove(context, id, config.shouldValidateRemoveAfterCheck);
      return removed;
    }
    return false
  };
};

export const wrappedActions = (actions) => ({
  insert: async (contextValue: string, params: any[]) => {
    if (window.navigator.onLine) {
      try {
        const context = getContext(actions, contextValue);
        await insert(context, params);
        return true;
      } catch (ex) {
        return false;
      }
    } else {
      dispatch({ type: 'add', data: { params, contextValue, contextAction: 'insert' }});
      return true;
    }
  },
  update: async (contextValue: string, id: string, params: any[]) => {
    if (window.navigator.onLine) {
      try {
        const context = getContext(actions, contextValue);
        await update(context, id, params);
        return true;
      } catch (ex) {
        return false;
      }
    } else {
      dispatch({ type: 'add', data: { id, params, contextValue, contextAction: 'update' }});
      return true;
    }
  },
  remove: async (contextValue: string, id: string) => {
    if (window.navigator.onLine) {
      try {
        const context = getContext(actions, contextValue);
        await remove(context, id);
        return true;
      } catch (ex) {
        return false;
      }
    } else {
      dispatch({ type: 'add', data: { id, contextValue, contextAction: 'remove' }});
      return true;
    }
  }
});
