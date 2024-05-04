import { configureStore } from '@reduxjs/toolkit';
import projectSlice from './slices/ProjectSlice';

const store = configureStore({
  reducer: {
    project: projectSlice,
  },
});

export default store;
