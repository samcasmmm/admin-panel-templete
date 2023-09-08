import { createSlice } from '@reduxjs/toolkit';
import { LoginState } from '../../../types.redux';

const userDetailFromLocalStorage = localStorage.getItem('userDetail');
const isLoggedInFromLocalStorage = localStorage.getItem('isLoggedIn');
const tokenFromLocalStorage = localStorage.getItem('token');

const parsedUserDetail = userDetailFromLocalStorage
  ? JSON.parse(userDetailFromLocalStorage)
  : null;

const parsedIsLoggedIn = isLoggedInFromLocalStorage
  ? JSON.parse(isLoggedInFromLocalStorage)
  : null;
const parsedToken = tokenFromLocalStorage
  ? JSON.parse(tokenFromLocalStorage)
  : null;

const initialState: LoginState = {
  user: parsedUserDetail,
  isLoggedIn: parsedIsLoggedIn,
  token: parsedToken,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;

      localStorage.setItem('userDetail', JSON.stringify(action.payload.user));
      localStorage.setItem(
        'isLoggedIn',
        JSON.stringify(action.payload.isloggedIn),
      );
      localStorage.setItem('token', JSON.stringify(action.payload.token));
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = null;
      state.token = null;
      state.error = null;

      localStorage.removeItem('userDetail');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('token');
    },
  },
});

export const selectUser = (state: { login: LoginState }) => state.login.user;
export const selectIsLoggedIn = (state: { login: LoginState }) =>
  state.login.isLoggedIn;
export const selectToken = (state: { login: LoginState }) => state.login.token;

export const { setUserDetails, logout } = loginSlice.actions;
export default loginSlice.reducer;
