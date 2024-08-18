"use server"
import { commentSchema } from "@/lib/zod"
import { z } from "zod"
import axios, { AxiosError } from "axios"

export async function createComment(data: z.infer<typeof commentSchema>) {
  const result = commentSchema.safeParse(data)
  if (!result.success) {
    return {
      success: false,
      errors: result.error.issues
    }
  }

  try {
    const response = await axios.post('/api/comments', result.data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })

    return {
      success: true,
      data: response.data
    }
  } catch (error) {
    console.error('Error creating comment:', error)

    if (error instanceof AxiosError) {
      return {
        success: false,
        errors: error.response?.data?.details || [{ message: error.response?.data?.error || 'An unexpected error occurred' }]
      }
    }

    return {
      success: false,
      errors: [{ message: 'An unexpected error occurred' }]
    }
  }
}

export default createComment
