import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import loginReducer from './features/auth/login/loginSlice';

export const rootReducer = combineReducers({
  login: loginReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
