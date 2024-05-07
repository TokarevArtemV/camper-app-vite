import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCars } from '../services/cars-api';

export const apiGetCars = createAsyncThunk(
  'cars/apiGetCars',
  async (page, thankApi) => {
    try {
      const { data } = await getAllCars(page);
      return data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);
