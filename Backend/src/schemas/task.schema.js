import {z} from 'zod'

export const createSchema = z.object({
    title: z.string ({ required_error: 'Title is required'}),
    description: z.string({ required_error: 'Description must be a String'}).optional(),
    date: z.string().datetime().optional()
})