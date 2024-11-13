import { ActionContext } from './types';

// this is a mere example...

const actions: ActionContext<Todo> = {
  todo: {
    get: async (id: string) => api.getTodo(id),
    update: async (id: string, params: any[]) => api.updateTodo(id, ...params),
    remove: async (id: string) => api.removeTodo(id),
    insert: async (params) => api.addTodo(...params),
    check: async (params) => api.checkIfDuplicateTodo(...params),
  }
}
