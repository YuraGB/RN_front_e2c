import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Incorrect e-mail"),
  password: z.string().min(6, "At least 6 symbols"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
