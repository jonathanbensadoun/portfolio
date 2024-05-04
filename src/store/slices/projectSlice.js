import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {}, // Pour l'instant c'est vide, on va le remplir dans la suite du cours
});

export default projectSlice.reducer;
