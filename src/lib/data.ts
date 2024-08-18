import { Post } from '@/types';
import { Comment } from '@prisma/client';
import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.BACK_BASE_URL,
});

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await api.get<Post[]>('/post')
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw new Error('Failed to fetch posts')
  }
}

export const fetchPost = async (slug: string): Promise<Post> => {
  try {
    const response = await api.get<Post>(`/post/${slug}`)
    return response.data
  } catch (error) {
    console.error('Error fetching post:', error)
    throw new Error('Failed to fetch post')
  }
}

export const fetchCommantsOfPost = async (postId: string): Promise<Comment[]> => {
  try {
    const response = await api.get<Comment[]>(`/post/comment/${postId}`)
    return response.data
  } catch (error) {
    console.error('Error fetching comments post:', error)
    throw new Error('Failed to fetch comments post')
  }
}

export const fetchMostViewedPosts = async (): Promise<Post[]> => {
  try {
    const response = await api.get<Post[]>('/post/most-viewed')
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}