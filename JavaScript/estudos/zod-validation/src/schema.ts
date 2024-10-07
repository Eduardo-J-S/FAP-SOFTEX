import { z } from "zod"

export const createUsuarioSchema = z.object({
    nome: z.string({message: "Nome é obrigatório"}).min(3, {message: "Nome deve ter 3 caracteres"}),
    email: z.string({message: "Email é obrigatório"}).email("Email inválido")
}) 

export const updateUsuarioSchema = z.object({
    id: z.string({message: "ID é obrigatório"}),
    nome: z.string().min(3, {message: "Nome deve ter 3 caracteres"}).optional(),
    email: z.string().email("Email inválido").optional()
})

export const deleteUsuarioSchema = z.object({
    id: z.string({message: "ID é obrigatório"})
})

export const getUsuarioSchema = z.object({
    id: z.string({message: "ID é obrigatório"})
})

export type CreateUsuarioSchemaInput = z.infer<typeof createUsuarioSchema>