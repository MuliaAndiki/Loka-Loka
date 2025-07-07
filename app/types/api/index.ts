import { z } from "zod";

export const userType = z.object({
  token: z.string(),
  user: z.object({
    username: z.string(),
    password: z.string(),
  }),
});

export type userSchema = z.infer<typeof userType>;
