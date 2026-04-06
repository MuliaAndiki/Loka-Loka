import { string, z } from 'zod';
import {
  formBikinBrandSchema,
  formEditProfileSchema,
  formLoginSchema,
  formRegisterSchema,
  formResetPasswordSchema,
  formSendOtpEmail,
  formSendOtpPhoneNumber,
  formVerifyOtpSchema,
} from '../form';
import { CredentialResponse } from '@react-oauth/google';
import React, { RefObject } from 'react';
import { AlertContexType } from '../ui';
import { setFormBrand } from '@/app/stores/BrandSlice/brandSlice';
import { AppDispatch } from '@/app/stores/store';
import { showNameProps } from '@/app/types/ui';

export const PromotionType = z.object({
  title: z.string(),
  desk: z.string(),
  image: z.any().optional(),
});

export const TiketType = z.object({
  image: z.any(),
  title: z.string(),
  organizer: z.string(),
  price: z.number(),
  cart: z.string(),
});

export const KategoriType = z.object({
  image: z.string(),
  title: z.string(),
  params: z.string(),
});

export const BrandHomeType = z.object({
  image: z.string(),
  brand: z.string(),
  promo: z.string(),
  secoundImage: z.string(),
  location: z.string(),
  rating: z.string(),
});

export const spesialOfficerType = z.object({
  image: z.string(),
  secoundImage: z.string(),
  title: z.string(),
  brands: z.string(),
  rating: z.string(),
});

export type LocationMarkerProps = {
  markerRef: React.MutableRefObject<L.Marker | null>;
  setLatLng?: (lat: number, lng: number) => void;
};

export const RiwayatComponetsType = z.object({
  image: z.string(),
  title: z.string(),
  date: z.string(),
  label: z.string().optional(),
  pricing: z.number(),
  items: z.string(),
});

export const CreaditCardType = z.object({
  title: z.string(),
  noCard: z.number(),
  username: z.string(),
  // Date Type
  expEnd: z.string(),
});

export interface PaymentMethodCardShema {
  icon: any;
  title: string;
  description: string;
  onClick?: () => void;
  selected?: boolean;
}

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

export type EditProfileHeaderProps = {
  isMobile: boolean;
  formEditProfile: formEditProfileSchema;
  handleChangeFoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type EditProfileFormProps = {
  formEditProfile: formEditProfileSchema;
  setFormEditProfile: React.Dispatch<React.SetStateAction<formEditProfileSchema>>;
  handleChangeGender: (e: string) => void;
  handleOpenModal: (value: string) => void;
  isActive: string | null;
  setIsActive: React.Dispatch<React.SetStateAction<'Location' | null>>;
  markerRef: React.MutableRefObject<L.Marker | null>;
  alert: AlertContexType;
  handleEditProfile: () => void;
  isPending: boolean;
  center: [number, number];
};

export type BuatBrandFormProps = {
  formBrand: Partial<formBikinBrandSchema>;
  setFormBrand: typeof setFormBrand;
  dispatch: AppDispatch;
  handleNext: () => void;
};

export type Slide2FormProps = {
  formBrand: Partial<formBikinBrandSchema>;
  setFormBrand: typeof setFormBrand;
  dispatch: AppDispatch;
  handleNext: () => void;
  showName: showNameProps;
  handleChangeKtp: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeIzinUsaha: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeProposalBrand: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeLogo: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type Slide4FormProps = {
  formBrand: Partial<formBikinBrandSchema>;
  setFormBrand: typeof setFormBrand;
  isPending: boolean;
  dispatch: AppDispatch;
  handleCreateBrand: () => void;
};

export type CreaditCardShema = z.infer<typeof CreaditCardType>;
export type KategoriSchema = z.infer<typeof KategoriType>;
export type PromotionSchema = z.infer<typeof PromotionType>;
export type TiketSchema = z.infer<typeof TiketType>;
export type BrandHomeSchema = z.infer<typeof BrandHomeType>;
export type SpesialOfficerSchema = z.infer<typeof spesialOfficerType>;
export type RiwayatComponetsShcema = z.infer<typeof RiwayatComponetsType>;
