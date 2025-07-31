import { z } from 'zod';
import {
  formLoginSchema,
  formRegisterSchema,
  formResetPasswordSchema,
  formSendOtpEmail,
  formSendOtpPhoneNumber,
  formVerifyOtpSchema,
} from '../form';
import { CredentialResponse } from '@react-oauth/google';
import React, { RefObject } from 'react';

export const PromotionType = z.object({
  title: z.string(),
  desk: z.string(),
  image: z.any().optional(),
});

export const RekomendasiType = z.object({
  image: z.any(),
  title: z.string(),
  organizer: z.string(),
  price: z.string(),
  cart: z.string(),
});

export const KategoriType = z.object({
  image: z.string(),
  title: z.string(),
  href: z.string(),
});

export type LocationMarkerProps = {
  markerRef: React.MutableRefObject<L.Marker | null>;
  setLatLng?: (lat: number, lng: number) => void;
};

// Props
export type LoginFormProps = {
  formLogin: formLoginSchema;
  setFormLogin: React.Dispatch<React.SetStateAction<formLoginSchema>>;
  showPassword: boolean;
  isPending: boolean;
  handleLogin: () => void;
  handleLoginGoogle: (e: CredentialResponse) => void;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

export type RegisterFormProps = {
  formRegister: formRegisterSchema;
  setFormRegister: React.Dispatch<React.SetStateAction<formRegisterSchema>>;
  handleLoginGoogle: (e: CredentialResponse) => void;
  isPending: boolean;
  handleRegister: () => void;
};

export type LupaKataSandiFormProps = {
  formForgotPassword: formSendOtpEmail;
  setFormForgotPassword: React.Dispatch<React.SetStateAction<formSendOtpEmail>>;
  isPending: boolean;
  handleForgotPassword: () => void;
};

export type MetodeLainFormProps = {
  formForgotPassword: formSendOtpPhoneNumber;
  setFormForgotPassword: React.Dispatch<React.SetStateAction<formSendOtpPhoneNumber>>;
  isPending: boolean;
  handleForgotPassword: () => void;
};

export type PemulihaKataSandiFormProps = {
  showPasswordV1: boolean;
  setShowPasswordV1: React.Dispatch<React.SetStateAction<boolean>>;
  showPasswordV2: boolean;
  setShowPasswordV2: React.Dispatch<React.SetStateAction<boolean>>;
  formResetPassword: formResetPasswordSchema;
  setFormResetPassword: React.Dispatch<React.SetStateAction<formResetPasswordSchema>>;
  confirmPasswordRef: RefObject<HTMLInputElement | null>;
  isPending: boolean;
  handleResetPassword: () => void;
};

export type VerifyOtpFormProps = {
  formVerifyOtp: formVerifyOtpSchema;
  setFormVerifyOtp: React.Dispatch<React.SetStateAction<formVerifyOtpSchema>>;
  isPending: boolean;
  handleVerifyOtp: () => void;
};

export type VerifyOtpFooterProps = {
  handleSendOtp: () => void;
  isPending: boolean;
};

export type KategoriSchema = z.infer<typeof KategoriType>;
export type PromotionSchema = z.infer<typeof PromotionType>;
export type RekomendasiSchema = z.infer<typeof RekomendasiType>;
