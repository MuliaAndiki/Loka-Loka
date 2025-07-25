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

export const formBikinBrandType = z.object({
  userId: z.string().nullable().optional(),
  nama: z.string(),
  document: z.object({
    ktp: z.string(),
    izinUsaha: z.string(),
    logo: z.string(),
    proposalBrand: z.string(),
    other: z.array(z.string()).optional(),
  }),
  kontak: z.object({
    email: z.string(),
    phone: z.string(),
    website: z.string().optional(),
    other: z.array(z.string()).optional(),
  }),
  sosialMedia: z.object({
    instagram: z.string().optional(),
    facebook: z.string().optional(),
    tiktok: z.string().optional(),
    other: z.array(z.string()).optional(),
  }),
  description: z.string().optional(),
});

export type formBikinBrandSchema = z.infer<typeof formBikinBrandType>;
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
