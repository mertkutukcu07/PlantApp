import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from '../features/categories/categoriesSlice';
import questionsReducer from '../features/questions/questionsSlice';
import paywallModalReducer from '../features/paywallModal/paywallModalSlice';
import onboardingReducer from '../features/onboarding/onboardingSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['onboarding'],
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  questions: questionsReducer,
  paywallModal: paywallModalReducer,
  onboarding: onboardingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
