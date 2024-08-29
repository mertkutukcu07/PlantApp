import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../features/categories/categoriesSlice';
import questionsReducer from '../features/questions/questionsSlice';
import paywallModalReducer from '../features/paywallModal/paywallModalSlice';
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    questions: questionsReducer,
    paywallModal: paywallModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
