const actions = {
  todo: {
    get: async (id: string): Promise<Todo> => api.getTodo(id),
    update: async (id: string, params: any[]): Promise<void> => api.updateTodo(id, ...params),
    remove: async (id: string): Promise<void> => api.removeTodo(id),
    insert: async (params): Promise<void> => api.addTodo(...params),
    check: async (params): Promise<boolean> => api.checkIfDuplicateTodo(...params),
  }
}
