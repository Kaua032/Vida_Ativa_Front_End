import { z } from "zod";

export const signinSchema = z.object({
    cpf: z.string().nonempty("CPF é obrigatório").regex(/^[0-9.-]*$/, "CPF deve conter apenas números."),
    password: z.string().min(6, {message: "A senha precisa conter no mínimo 6 caracteres"}),
})