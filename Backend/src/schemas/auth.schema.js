import {z} from 'zod'

// Validaciones con Zod
export const registerSchema = z.object({
    username: z.string({ required_error: 'Username is required'}),
    email: z.string({ required_error: 'Email is required'}).email({ message: 'Invalid Email'}),
    password: z.string({ required_error: 'Password is required'}).min(6, { message: 'Password must be at least 6 characters'})
})

export const loginsSchema = z.object({
    email: z.string({ required_error: "Email is required"}).email({ message: "Invalid Email"}),
    password: z.string({ required_error: "Password is required"}).min(6, {message: "Password must be at least 6 characters"})
})

