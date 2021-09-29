import { configureStore } from '@reduxjs/toolkit';
import userActivityReducer from './userActivityReducer';

export const store = configureStore({
  reducer: {
    userActivityReducer: userActivityReducer
  },
});
