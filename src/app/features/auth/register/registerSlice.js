import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: null,
  token: null,
  error: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    addUser: () => {
      console.log('hello');
    },
  },
});

export const selectUser = (state) => state.login.user;

const { addUser } = loginSlice.actions;
export default loginSlice.reducer;
