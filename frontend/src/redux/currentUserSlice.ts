import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/user';

const initialState: User = {
  id: '',
  firstName: '',
  lastName: '',
};

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },

    resetUser: (state) => {
      (state.id = ''), (state.firstName = ''), (state.lastName = '');
    },
  },
});

export const { setUser, resetUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
