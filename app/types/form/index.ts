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

export type formLoginSchema = z.infer<typeof formLoginType>;
export type formRegisterSchema = z.infer<typeof formRegisterType>;
