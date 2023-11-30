import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65665bb064fcff8d730eb87a.mockapi.io/todo/';

const params = {
  completed: false,
  page: 1,
  limit: 10,
};
export const getTodo = createAsyncThunk(
  'todo/fetchAll',
  async (_, thankApi) => {
    try {
      const { data } = await axios.get('/', { params });
      return data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);

export const paginationTodo = createAsyncThunk(
  'todo/paginationTodo',
  async (page = 1, thankApi) => {
    const params = {
      completed: false,
      page: page,
      limit: 10,
    };
    try {
      const response = await axios.get('/', { params });
      console.log('response: ', response);
      return response.data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);
