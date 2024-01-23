import { z } from "zod";

export const changePasswordSchema = z.object({
  current_password: z
    .string()
    .min(6, { message: "A senha precisa conter no mínimo 6 caracteres" }),
  new_password: z
    .string()
    .min(6, { message: "A senha precisa conter no mínimo 6 caracteres" }),
});
