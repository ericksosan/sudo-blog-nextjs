import { z } from "zod"

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Email is required' })
    .min(1, 'Email is required'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, { message: 'Password is required' })
})

export const signupSchema = z.object({
  firstname: z.string().min(1, 'First name is required'),
  lastname: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(8, 'Password must be at least 8 characters'),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export const commentSchema = z.object({
  postId: z.string({ required_error: 'Post id is required' }).min(1, 'Post id is required'),
  userId: z.string({ required_error: 'User id is required' }).min(1, 'User id is required'),
  content: z.string({ required_error: 'Comment content is required' }).min(1, 'Comment content is required'),
})