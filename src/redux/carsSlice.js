import { createSlice } from '@reduxjs/toolkit';
import { apiGetCars } from './operations';
import { statusState } from './constants';

const initialState = {
  cars: [],
  favoriteCars: [],
  filteredCars: null,
  page: 1,
  limit: 4,
  status: statusState.idle,
  error: null,
  isLoadMore: true,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page = state.page + 1;
    },
    addFavoriteCar: (state, { payload }) => {
      state.favoriteCars.push(payload);
    },
    deleteFavoriteCar: (state, { payload }) => {
      const index = state.favoriteCars.findIndex((car) => car._id === payload);
      state.favoriteCars.splice(index, 1);
    },
    clearCars: (state) => {
      state.cars = [];
      state.page = 1;
      state.isLoadMore = true;
    },
    addFilteredCars: (state, { payload }) => {
      state.filteredCars = payload;
    },
    clearFilteredCars: (state) => {
      state.filteredCars = null;
    },
  },
  extraReducers: (builder) =>
    builder
      // ============= GET All Cars ===============
      .addCase(apiGetCars.pending, (state) => {
        state.status = statusState.pending;
        state.error = null;
      })
      .addCase(apiGetCars.fulfilled, (state, { payload }) => {
        state.status = statusState.success;
        state.error = null;
        state.cars.push(...payload);
        if (payload.length < state.limit) state.isLoadMore = false;
      })
      .addCase(apiGetCars.rejected, (state, { payload }) => {
        state.status = statusState.error;
        state.error = payload;
      }),
});
export const {
  incrementPage,
  addFavoriteCar,
  addFilteredCars,
  clearFilteredCars,
  deleteFavoriteCar,
  clearCars,
} = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
