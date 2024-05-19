import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scrollToDescription: false,
  scrollToProject: false,
  scrollToContact: false,
  contactSucess: false,
  isDesktop: false,
  isLightMode: true,
  reloadVanta: false,
  language: 'FR',
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = state.language === 'FR' ? 'GB' : 'FR';
      localStorage.setItem('language', state.language);
    },
    getLocalStorage: (state, action) => {
      return {
        ...state,
        isLightMode: action.payload.isLightMode,
        language: action.payload.language,
      };
    },
    showMessageContact: (state, action) => {
      state.contactSucess = action.payload;
    },
    showReloadVanta: (state, action) => {
      state.reloadVanta = action.payload;
    },
    changeTheme: (state) => {
      state.isLightMode = !state.isLightMode;
      localStorage.setItem('isLightMode', state.isLightMode);
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
  changeLanguage,
  getLocalStorage,
} = projectSlice.actions;

export default projectSlice.reducer;
