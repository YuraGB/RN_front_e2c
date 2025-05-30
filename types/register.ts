import { z } from "zod";

export const ReisterSchema = z.object({
  username: z.string(),
  lastname: z.string(),
  email: z.string().email("Incorrect e-mail"),
  password: z.string().min(6, "At least 6 symbols"),
});

export type RegisterFormData = z.infer<typeof ReisterSchema>;
