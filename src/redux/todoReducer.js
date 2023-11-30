import { createSlice } from '@reduxjs/toolkit';
import { getTodo, paginationTodo } from './operations';

const initialState = {
  tasks: {
    items: [],
    isLoading: false,
    error: null,
  },
};
const todoStorageSlice = createSlice({
  name: 'todoStorage',
  initialState,
  // reducers: {
  //   addCar: (state, action) => {
  //     state.favorite = [...state.favorite, action.payload];
  //   },
  //   removeCar: (state, action) => {
  //     state.favorite = state.favorite.filter(el => el.id !== action.payload.id);
  //   },
  // },
  extraReducers: builder =>
    builder
      .addCase(getTodo.pending, state => {
        state.tasks.isLoading = true;
        state.tasks.error = null;
      })
      .addCase(paginationTodo.pending, state => {
        state.tasks.isLoading = true;
        state.tasks.error = null;
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.items = action.payload;
      })
      .addCase(paginationTodo.fulfilled, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.items = action.payload;
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.error = action.payload;
      })
      .addCase(paginationTodo.rejected, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.error = action.payload;
      }),
});

// export const { addCar, removeCar } = todoStorageSlice.actions;
export const todoReducers = todoStorageSlice.reducer;
