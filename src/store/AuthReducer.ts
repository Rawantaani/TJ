import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  name: string;
  phone: string;
};

const initialState: InitialState = {
  name: '',
  phone: '',
};

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
  },
});

export default authSlice.reducer;

export const { setPhone } = authSlice.actions;
