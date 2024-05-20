import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scrollToDescription: false,
  scrollToProject: false,
  scrollToContact: false,
  contactSucess: false,
  isDesktop: false,
  isLightMode: true,
  reaload: false,
  language: 'FR',
  textEncode: 'Salut, je suis Encode, assistant de Jonathan. 🤗',
  textEncodeEN: "Hi, I'm Encode, Jonathan's assistant. 🤗",
  showButtonUrl: '',
  page: 'home',
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
    changeShowButtonUrl: (state, action) => {
      state.showButtonUrl = action.payload;
    },
    changeTextEncodeEN: (state, action) => {
      state.textEncodeEN = action.payload;
    },
    changeTextEncode: (state, action) => {
      state.textEncode = action.payload;
    },
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
    showreaload: (state, action) => {
      state.reaload = action.payload;
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
  showreaload,
  scrollOnTheProject,
  scrollOnTheContact,
  scrollOnTheDescription,
  isDesktopMediaQuery,
  changeTheme,
  showMessageContact,
  changeLanguage,
  getLocalStorage,
  changeTextEncode,
  changeTextEncodeEN,
  changeShowButtonUrl,
  changePage,
} = projectSlice.actions;

export default projectSlice.reducer;
