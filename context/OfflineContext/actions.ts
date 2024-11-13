import { ActionContext } from './types';

// this is a mockExample since api does not exist here!
const todoActions: ActionContext<Todo> = {
    get: async (id: string) => api.getTodo(id),
    update: async (id: string, params: any[]) => api.updateTodo(id, ...params),
    remove: async (id: string) => api.removeTodo(id),
    insert: async (params) => api.addTodo(...params),
    check: async (params) => api.checkIfDuplicateTodo(...params),
    getAll: async () => api.getTodos(),
  }

export const actions = {
  todo: todoActions
}
