import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65665bb064fcff8d730eb87a.mockapi.io';

//----------------NUMBER OF TASKS----------------

export const getAllTasks = createAsyncThunk(
  'todo/fetchAll',
  async (_, thankApi) => {
    try {
      const { data } = await axios.get('/todo');
      return data.length;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);

//----------------GET ALL TASKS DIVIDED BY PAGINATION----------------

export const paginationTodo = createAsyncThunk(
  'todo/paginationTodo',
  async (page = 1, thankApi) => {
    const params = {
      page: page,
      limit: 10,
    };
    try {
      const { data } = await axios.get('/todo', { params });
      return data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);

//----------------ADD NEW TASKS----------------

export const addTask = createAsyncThunk(
  'todo/addTask',
  async (tasks, thankApi) => {
    try {
      const { data } = await axios.post('/todo', tasks);
      return data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);

//----------------DELETE TASKS----------------

export const deleteTask = createAsyncThunk(
  'todo/deleteTask',
  async (taskId, thankApi) => {
    try {
      const { data } = await axios.delete(`/todo/${taskId}`);
      return data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);

//----------------EDIT TASKS----------------

export const editTask = createAsyncThunk(
  'todo/updateTask',
  async ({ id, title, completed }, thankApi) => {
    try {
      const { data } = await axios.put(`/todo/${id}`, { title, completed });
      return data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);
