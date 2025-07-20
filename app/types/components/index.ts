import { z } from "zod";

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

export type KategoriSchema = z.infer<typeof KategoriType>;
export type PromotionSchema = z.infer<typeof PromotionType>;
export type RekomendasiSchema = z.infer<typeof RekomendasiType>;
