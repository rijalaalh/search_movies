/** @format */
import { configureStore } from '@reduxjs/toolkit';
import searchslice from './searchSlice'
export const store = configureStore({
  reducer: {
    search:searchslice

  },
});
