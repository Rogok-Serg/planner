export const selectTodo = state => state.todoStorage.tasks.items;
export const selectAllTodo = state => state.todoStorage.tasks.allItems;
export const selectUpdateTask = state => state.todoStorage.tasks.updateTask;
export const selectIsLoading = state => state.todoStorage.tasks.isLoading;
export const selectError = state => state.todoStorage.tasks.error;
