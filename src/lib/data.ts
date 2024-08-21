import type { Post, Comment, Category } from '@/types';
import axios from 'axios';
import { z } from 'zod';
import { writePostSchema } from './zod';

export const api = axios.create({
  baseURL: process.env.BACK_BASE_URL,
});

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await api.get<Post[]>('/post')
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
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
type WritePostData = z.infer<typeof writePostSchema>

export const fetchCreatePost = async (data: WritePostData): Promise<Post> => {
  try {
    const response = await api.post<Post>('/api/post/write', data);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw new Error('Failed to create post');
  }
};

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get<Category[]>('/api/post/category');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories');
  }
};