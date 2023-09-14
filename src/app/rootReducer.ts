import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import loginReducer from './features/auth/login/loginSlice';
import AllLeadsReducer from './features/leads/allLeadSlice';

export const rootReducer = combineReducers({
  login: loginReducer,
  AllLeads: AllLeadsReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
