import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLanguage: 'en', // Set an initial language (e.g., 'en' for English)
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload?.currentLanguage;
      state.currentLanguageFullName = action.payload?.currentLanguageFullName;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;