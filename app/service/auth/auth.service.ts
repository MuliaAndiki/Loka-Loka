import AxiosClient from "@/app/utils/axios.client";
import {
  formRegisterSchema,
  formLoginSchema,
  formEditProfileSchema,
} from "@/app/types/form";
import { TResponse } from "@/app/pkg/react-query/mutation-wrapper.type";

class AuthApi {
  async registerUser(payload: formRegisterSchema): Promise<TResponse<any>> {
    const res = await AxiosClient.post("/auth", payload);
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
}

export default new AuthApi();
