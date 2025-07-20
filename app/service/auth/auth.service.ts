import AxiosClient from "@/app/utils/axios.client";
import {
  formRegisterSchema,
  formLoginSchema,
  formEditProfileSchema,
  formSendOtpSchema,
  formVerifyOtpSchema,
  formResetPasswordSchema,
} from "@/app/types/form";
import { TResponse } from "@/app/pkg/react-query/mutation-wrapper.type";

class AuthApi {
  async registerUser(payload: formRegisterSchema): Promise<TResponse<any>> {
    const res = await AxiosClient.post("/auth/register", payload);
    return res.data;
  }
  async loginUser(payload: formLoginSchema): Promise<TResponse<any>> {
    const res = await AxiosClient.post("/auth/login", payload);
    return res.data;
  }
  async logoutUser(): Promise<TResponse<any>> {
    const res = await AxiosClient.post("/auth/logout");
    return res.data;
  }
  async getProfile(): Promise<TResponse<any>> {
    const res = await AxiosClient.get("/auth/getProfileByUser");
    return res.data;
  }
  async editProfile(payload: formEditProfileSchema): Promise<TResponse<any>> {
    const res = await AxiosClient.put("/auth/editProfile", payload);
    return res.data;
  }
  async verifyOtp(payload: formVerifyOtpSchema): Promise<TResponse<any>> {
    const res = await AxiosClient.post("/auth/verify-otp", payload);
    return res.data;
  }
  async forgotPassword(payload: formSendOtpSchema): Promise<TResponse<any>> {
    const res = await AxiosClient.post(
      "/auth/forgot-password-by-email",
      payload
    );
    return res.data;
  }
  async resetPassword(
    payload: formResetPasswordSchema
  ): Promise<TResponse<any>> {
    const res = await AxiosClient.put("/auth/reset-password", payload);
    return res.data;
  }
  async sendOtpRegister(payload: formSendOtpSchema): Promise<TResponse<any>> {
    const res = await AxiosClient.post("/auth/send-otp-register", payload);
    return res.data;
  }
}

export default new AuthApi();
