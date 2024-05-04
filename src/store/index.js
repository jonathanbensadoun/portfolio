import { configureStore } from '@reduxjs/toolkit';
import projectSlice from './slices/projectSlice';

const store = configureStore({
  reducer: {
    project: projectSlice,
  },
});

export default store;
