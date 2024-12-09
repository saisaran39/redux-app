import { configureStore } from '@reduxjs/toolkit';
import showMessageReducer from '../reducer/showMessageReducer';

export const store = configureStore({
  reducer: {
    showMessageReducer
  },
})