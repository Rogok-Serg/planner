import { configureStore } from '@reduxjs/toolkit';
import { todoReducers } from './todoReducer';


export const store = configureStore({
  reducer: {
    todoStorage: todoReducers,
  },
});

