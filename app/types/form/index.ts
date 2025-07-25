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
  phoneNumber: z.string(),
  gender: z.boolean().nullable(),
});

export const formVerifyOtpType = z.object({
  otp: z.string(),
  email: z.string().nullable(),
  phoneNumber: z.string().nullable(),
});

export const formSendOtpType = z.object({
  email: z.string(),
  phoneNumber: z.string(),
});

export const formResetPassword = z.object({
  email: z.string().nullable(),
  phoneNumber: z.string().nullable(),
  password: z.string(),
});

export const formUpdateRoleType = z.object({
  userId: z.string().nullable().optional(),
  brand: z.string(),
  document: z.object({
    ktp: z.string(),
    izinUsaha: z.string(),
    logo: z.string(),
    proposalBrand: z.string(),
    other: z.array(z.string()).optional(),
  }),
  description: z.string().optional(),
});

export type formUpdateRoleSchema = z.infer<typeof formUpdateRoleType>;
export type formResetPasswordSchema = z.infer<typeof formResetPassword>;
export type formLoginSchema = z.infer<typeof formLoginType>;
export type formRegisterSchema = z.infer<typeof formRegisterType>;
export type formEditProfileSchema = z.infer<typeof formEditProfileType>;
export type formVerifyOtpSchema = z.infer<typeof formVerifyOtpType>;
export type formSendOtpSchema = z.infer<typeof formSendOtpType>;

// Pick
export const formSendOtpEmail = formSendOtpType.pick({
  email: true,
});
export type formSendOtpEmail = z.infer<typeof formSendOtpEmail>;

export const formSendOtpPhoneNumber = formSendOtpType.pick({
  phoneNumber: true,
});

export type formSendOtpPhoneNumber = z.infer<typeof formSendOtpPhoneNumber>;
