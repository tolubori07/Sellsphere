import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Authslice'
import itemReducer from './itemSlice'
import bagReducer from './bagSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemReducer,
    bag:bagReducer
  },
});

