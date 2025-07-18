import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OtpState {
  email: string | null;
}

const initialState: OtpState = {
  email: null,
};

export const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    clearEmail: (state) => {
      state.email = null;
    },
  },
});

export const { setEmail, clearEmail } = otpSlice.actions;
export default otpSlice.reducer;
