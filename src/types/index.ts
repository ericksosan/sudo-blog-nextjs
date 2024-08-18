import { loginSchema, signupSchema } from "@/lib/zod"
import { Comment } from "@prisma/client";
import { z } from "zod"

export type LoginFormInputs = z.infer<typeof loginSchema>
export type SignupFormInputs = z.infer<typeof signupSchema>

export interface Post {
  id: string;
  userId: string;
  title: string;
  content: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
  views: number;
  user: User;
  slug: string;
  category: Category;
  comments: Comment[]
}

export interface Category {
  id: string;
  name: string;
}

export interface User {
  firstname: string;
  lastname: string;
  fullname: string
}