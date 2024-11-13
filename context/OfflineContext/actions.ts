import { ActionContext } from './types';

export const actions = {
  todo: {
    get: async (id: string) => api.getTodo(id),
    update: async (id: string, params: any[]) => api.updateTodo(id, ...params),
    remove: async (id: string) => api.removeTodo(id),
    insert: async (params) => api.addTodo(...params),
    check: async (params) => api.checkIfDuplicateTodo(...params),
  } as ActionContext<Todo>
}
