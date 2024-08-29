import { api } from '../api';
import { CategoriesResponse } from '../types/response/categories';

export const getCategories = async (): Promise<CategoriesResponse> => {
  const response = await api.get('/getCategories');
  return response.data;
};
