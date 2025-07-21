import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OtpState {
  email: string | null;
  source:
    | "register"
    | "forgotPasswordByEmail"
    | "forgotPasswordByPhoneNumber"
    | null;
}

const initialState: OtpState = {
  email: null,
  source: null,
};

export const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setSource: (
      state,
      action: PayloadAction<
        "register" | "forgotPasswordByEmail" | "forgotPasswordByPhoneNumber"
      >
    ) => {
      state.source = action.payload;
    },
    clearOtp: (state) => {
      state.email = null;
      state.source = null;
    },
  },
});

export const { setEmail, clearOtp, setSource } = otpSlice.actions;
export default otpSlice.reducer;
