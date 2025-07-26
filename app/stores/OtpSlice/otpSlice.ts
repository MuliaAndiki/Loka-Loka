import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OtpState {
  email: string | null;
  source: 'register' | 'forgotPasswordByEmail' | 'forgotPasswordByPhoneNumber' | null;
  phoneNumber: string | null;
}

const initialState: OtpState = {
  email: null,
  source: null,
  phoneNumber: null,
};

export const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setSource: (
      state,
      action: PayloadAction<'register' | 'forgotPasswordByEmail' | 'forgotPasswordByPhoneNumber'>
    ) => {
      state.source = action.payload;
    },
    clearOtp: (state) => {
      state.email = null;
      state.source = null;
    },
  },
});

export const { setEmail, clearOtp, setSource, setPhoneNumber } = otpSlice.actions;
export default otpSlice.reducer;
