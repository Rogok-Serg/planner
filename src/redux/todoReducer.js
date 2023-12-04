import { createSlice } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  editTask,
  getAllTasks,
  paginationTodo,
} from './operations';

const initialState = {
  tasks: {
    items: [],
    allItems: [],
    updateTask: null,
    isLoading: false,
    error: null,
  },
};
const todoStorageSlice = createSlice({
  name: 'todoStorage',
  initialState,
  reducers: {
    getUpdateTask: (state, action) => {
      const { id, title, completed } = action.payload;
      state.tasks.updateTask = { id, title, completed };
    },
  },
  extraReducers: builder =>
    builder

      //----------------GET ALL TASKS DIVIDED BY PAGINATION----------------

      .addCase(paginationTodo.pending, state => {
        state.tasks.isLoading = true;
        state.tasks.error = null;
      })
      .addCase(paginationTodo.fulfilled, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.items = action.payload;
      })
      .addCase(paginationTodo.rejected, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.error = action.payload;
      })

      //----------------ADD NEW TASKS----------------

      .addCase(addTask.pending, state => {
        state.tasks.isLoading = true;
        state.tasks.error = null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.items = [...state.tasks.items, action.payload];
      })
      .addCase(addTask.rejected, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.error = action.payload;
      })

      //----------------DELETE TASKS----------------

      .addCase(deleteTask.pending, state => {
        state.tasks.isLoading = true;
        state.tasks.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.items = state.tasks.items.filter(
          item => item.id !== action.payload.id
        );
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.error = action.payload;
      })

      //----------------NUMBER OF TASKS----------------

      .addCase(getAllTasks.pending, state => {
        state.tasks.isLoading = true;
        state.tasks.error = null;
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.allItems = action.payload;
      })

      .addCase(getAllTasks.rejected, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.error = action.payload;
      })

      //----------------EDIT TASKS----------------

      .addCase(editTask.fulfilled, (state, action) => {
        state.tasks.isLoading = false;
        const index = state.tasks.items.findIndex(
          item => item.id === action.payload.id
        );
        state.tasks.items.splice(index, 1, action.payload);
        state.tasks.updateTask = null;
      })
      .addCase(editTask.rejected, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.error = action.payload;
      }),
});

export const { getUpdateTask } = todoStorageSlice.actions;
export const todoReducers = todoStorageSlice.reducer;
