import { createSlice } from '@reduxjs/toolkit';
import { LoginState } from '../../../types.redux';
import Cookies from 'js-cookie';

const userDetailFromLocalStorage = localStorage.getItem('userDetail');
const isLoggedInFromCookie = Cookies.get('isLoggedIn');
const tokenFromCookie = Cookies.get('bearer_token');

const parsedUserDetail = userDetailFromLocalStorage
  ? JSON.parse(userDetailFromLocalStorage)
  : null;

const parsedIsLoggedIn = isLoggedInFromCookie
  ? JSON.parse(isLoggedInFromCookie)
  : null;
const parsedToken = tokenFromCookie ? tokenFromCookie : null;

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
      Cookies.set('isLoggedIn', JSON.stringify(action.payload.isloggedIn));
      Cookies.set('bearer_token', action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = null;
      state.token = null;
      state.error = null;

      localStorage.removeItem('userDetail');
      Cookies.remove('isLoggedIn');
      Cookies.remove('token');
    },
  },
});

export const selectUser = (state: LoginState) => state.user;
export const selectIsLoggedIn = (state: LoginState) => state.isLoggedIn;
export const selectToken = (state: LoginState) => state.token;

export const { setUserDetails, logout } = loginSlice.actions;
export default loginSlice.reducer;
