import axios from 'axios';
const API_SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

export const carsInstance = axios.create();

export const getAllCars = async (page = 1, limit = 4) => {
  const url = new URL(API_SERVER_BASE_URL);
  url.searchParams.append('page', page);
  url.searchParams.append('limit', limit);
  const response = await carsInstance.get(url.href);

  return response;
};
