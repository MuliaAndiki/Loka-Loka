import { z } from "zod";

export const PromotionType = z.object({
  title: z.string(),
  desk: z.string(),
  image: z.any().optional(),
});

export type PromotionSchema = z.infer<typeof PromotionType>;
