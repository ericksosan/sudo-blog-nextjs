import type { Post, Comment, Category } from '@/types'
import axios from 'axios'
import { z } from 'zod'
import { writePostSchema } from './zod'

export const api = axios.create({
  baseURL: process.env.BACK_BASE_URL,
})

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await api.get<Post[]>('/post')
  return response.data
}

export const fetchPost = async (slug: string): Promise<Post> => {
  const response = await api.get<Post>(`/post/${slug}`)
  return response.data
}

export const fetchCommantsOfPost = async (postId: string): Promise<Comment[]> => {
  const response = await api.get<Comment[]>(`/post/comment/${postId}`)
  return response.data
}

export const fetchMostViewedPosts = async (): Promise<Post[]> => {
  const response = await api.get<Post[]>('/post/most-viewed')
  return response.data
}
type WritePostData = z.infer<typeof writePostSchema>

export const fetchCreatePost = async (data: WritePostData): Promise<Post> => {
  const response = await api.post<Post>('/api/post/write', data)
  return response.data
}

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await api.get<Category[]>('/api/post/category')
  return response.data
}