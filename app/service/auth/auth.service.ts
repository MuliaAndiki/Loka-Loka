import AxiosClient from "@/app/utils/axios.client";
import { formRegisterSchema, formLoginSchema } from "@/app/types/form";

export const registerUser = async (form: formRegisterSchema) => {
  const res = await AxiosClient.post("auth", form);
  return res.data;
};

export const loginUser = async (form: formLoginSchema) => {
  const res = await AxiosClient.post("/auth/login", form);
  return res.data;
};
