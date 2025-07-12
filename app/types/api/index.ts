import { z } from "zod";

export const userType = z.object({
  token: z.string(),
  user: z.object({
    _id: z.string(),
    role: z.string(),
    methotPayment: z.string(),
    fullname: z.string(),
    email: z.string(),
    password: z.string(),
  }),
});

export type userSchema = z.infer<typeof userType>;
