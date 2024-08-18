import { CommentBox, CommentListSkeleton, Comments, MostPopularPost } from "@/components"
import { fetchPost } from "@/lib/data"
import { formatDate } from "@/lib"
import { Suspense } from "react"

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug)

  if (!post) {
    return (
      <>
        <h1>Post not found!</h1>
      </>
    )
  }

  return (
    <section>
      <div className="min-h-56 flex flex-col items-center justify-center space-y-2">
        <h1 className="text-5xl font-black text-center">
          {post.title}
        </h1>

        <div>
          <time>{formatDate(post.createdAt)}</time>
          <span> - By <span className="text-secondary font-semibold">{post.user.fullname}</span></span>
        </div>
      </div>

      <div className="flex flex-col items-start lg:flex-row gap-8 lg:justify-between py-4">
        <section className="pb-4 max-w-2xl w-full">
          <p>{post.content}</p>

          <div className="flex flex-col gap-4 items-start">
            <h2 className="font-semibold text-lg text-primary py-4 border-b border-base-300 text-center w-full">Comments</h2>
            <h4 className="text-lg font-bold">{post.comments.length ?? 0}{" "}{(post.comments.length > 1) ? "Comments" : "Comment"}</h4>

            <CommentBox postId={post.id} />

            <Suspense fallback={<CommentListSkeleton count={post.comments.length ?? 5} />}>
              <Comments postId={post.id} />
            </Suspense>
          </div>
        </section>

        <aside className="w-full hidden lg:w-72 lg:block">
          <MostPopularPost />
        </aside>
      </div>
    </section>
  )
}
