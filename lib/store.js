import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice'; // Import your language reducer (explained later)

const store = configureStore({
  reducer: {
    language: languageReducer, // Add your language reducer to the store
  },
});

export default store;