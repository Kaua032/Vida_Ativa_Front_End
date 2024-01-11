import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório"),
  cpf: z
    .string()
    .nonempty("CPF é obrigatório")
    .regex(/^[0-9.-]*$/, "CPF deve conter apenas números."),
  registration: z
    .string()
    .nonempty("Data de registro é obrigatória")
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      "Data de registro deve estar no formato AAAA-MM-DD."
    ),
});
