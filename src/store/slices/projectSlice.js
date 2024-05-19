import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scrollToDescription: false,
  scrollToProject: false,
  scrollToContact: false,
  contactSucess: false,
  isDesktop: false,
  isLightMode: true,
  reloadVanta: false,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    showMessageContact: (state, action) => {
      state.contactSucess = action.payload;
    },
    showReloadVanta: (state, action) => {
      state.reloadVanta = action.payload;
    },
    changeTheme: (state) => {
      state.isLightMode = !state.isLightMode;
    },
    scrollOnTheDescription: (state, action) => {
      state.scrollToDescription = action.payload;
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
  showReloadVanta,
  scrollOnTheProject,
  scrollOnTheContact,
  scrollOnTheDescription,
  isDesktopMediaQuery,
  changeTheme,
  showMessageContact,
} = projectSlice.actions;

export default projectSlice.reducer;
