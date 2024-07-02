import axios from "axios";

// const API_URL: any = process.env.REACT_APP_BASE_URL;
const API_URL = "/restaurants";

export const getRestaurants = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getRestaurant = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const addRestaurant = async (data: any) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const updateRestaurant = async (id: string, data: any) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const deleteRestaurant = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
