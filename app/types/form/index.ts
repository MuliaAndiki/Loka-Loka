import { z } from "zod";

export const formLoginType = z.object({
  email: z.string(),
  password: z.string(),
});

export const formRegisterType = z.object({
  fullname: z.string(),
  email: z.string(),
  password: z.string(),
});

export const formEditProfileType = z.object({
  fullname: z.string(),
  email: z.string(),
  nomorhp: z.string(),
  gender: z.boolean().nullable(),
});

export const formVerifyOtpType = z.object({
  otp: z.string(),
  email: z.string().nullable(),
});

export const formSendOtpType = z.object({
  email: z.string(),
});

export type formLoginSchema = z.infer<typeof formLoginType>;
export type formRegisterSchema = z.infer<typeof formRegisterType>;
export type formEditProfileSchema = z.infer<typeof formEditProfileType>;
export type formVerifyOtpSchema = z.infer<typeof formVerifyOtpType>;
export type formSendOtpSchema = z.infer<typeof formSendOtpType>;
