import { z } from "zod";

export const signupSchema = z.object({
  cpf: z.string(),
  add_student: z.boolean(),
  add_teacher: z.boolean(),
});
