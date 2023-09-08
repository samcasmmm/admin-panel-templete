import { createSlice } from '@reduxjs/toolkit';
import { RegisterState, User } from '../../../types.redux';

const initialState: RegisterState = {
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

export const selectUser = (state: { register: RegisterState }) =>
  state.register.user;

const { addUser } = registerSlice.actions;
export default registerSlice.reducer;
