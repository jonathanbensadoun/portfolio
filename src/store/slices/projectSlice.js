import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scrollToProject: false,
  scrollToContact: false,
  isDesktop: false,
  isLightMode: true,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isLightMode = !state.isLightMode;
    },
    scrollOnTheProject: (state, action) => {
      state.scrollToProject = action.payload;
    },
    scrollOnTheContact: (state, action) => {
      state.scrollToContact = action.payload;
    },
    isDesktopMediaQuery: (state, action) => {
      state.isDesktop = action.payload;
    },
  },
});

export const {
  scrollOnTheProject,
  scrollOnTheContact,
  isDesktopMediaQuery,
  changeTheme,
} = projectSlice.actions;

export default projectSlice.reducer;
