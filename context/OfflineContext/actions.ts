import { ActionContext } from './types';

// this is a mockExample since api does not exist here!
const todoActions: ActionContext<Todo> = {
    get: async (id: string) => api.getTodo(id),
    update: async (id: string, params: any[]) => api.updateTodo(id, ...params),
    remove: async (id: string) => api.removeTodo(id),
    insert: async (params) => api.addTodo(...params),
    checkInsert: async (params) => api.checkInsertTodo(...params),
    checkUpdate: async (params) => api.checkUpdateTodo(...params),
    checkRemove: async (params) => api.checkRemoveTodo(...params),
  }

export const actions = {
  todo: todoActions
}
