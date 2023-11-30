export const selectTodo = state => state.todoStorage.tasks.items;
export const selectIsLoading = state => state.todoStorage.tasks.isLoading;
export const selectError = state => state.todoStorage.tasks.error;
// export const selectFavorite = state => state.catalogStorage.favorite;
