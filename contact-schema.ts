import { z } from 'zod'

export const contactSchema = z.object({
  nome: z.string().trim().min(2, 'Informe seu nome completo.'),
  telefone: z.string().trim().min(8, 'Informe um telefone válido.'),
  email: z.string().trim().email('Informe um e-mail válido.'),
  observacao: z
    .string()
    .trim()
    .min(10, 'Descreva brevemente sua dúvida ou objetivo (mín. 10 caracteres).'),
})

export type ContactInput = z.infer<typeof contactSchema>
