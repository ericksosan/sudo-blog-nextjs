import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { fetchPosts } from "@/lib/data";
import { formatDate } from '@/lib';

export const RecentPost = async () => {
  const posts = await fetchPosts()

  return (
    <ul className="py-8 flex flex-col gap-10">
      {
        posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.slug}`} className="flex flex-col lg:flex-row items-center gap-6">
              {/* <div className="min-h-40 min-w-60 max-h-40 max-w-60 relative overflow-hidden aspect-video">
                <Image
                  height={2000}
                  width={2000}
                  sizes="400"
                  className="rounded-md object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1592096304832-62463bfdc822?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div> */}
              <div className="flex flex-col space-y-4 items-start">
                <span className="badge badge-sm badge-info">{post.category.name}</span>
                <h3 className="font-bold text-xl text-balance">
                  {post.title}
                </h3>

                <p className="text-sm line-clamp-2">{post.content}</p>
                <div className="text-xs uppercase">
                  <time>{formatDate(post.createdAt)}</time>{" "}
                  <span>•</span>{" "}
                  <span>{post.user.fullname}</span>
                </div>
                <span className="text-xs font-medium">{post.views} views</span>
              </div>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
