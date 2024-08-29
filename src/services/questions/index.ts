import { api } from '../api';
import { QuestionsResponse } from '../types/response/questions';

export const getQuestions = async (): Promise<QuestionsResponse> => {
  const response = await api.get('/getQuestions');
  return response.data;
};
