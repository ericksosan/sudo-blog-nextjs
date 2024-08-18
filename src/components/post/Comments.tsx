import { formatDate } from "@/lib"
import { fetchCommantsOfPost } from "@/lib/data"

export async function Comments({ postId }: { postId: string }) {
  const comments = await fetchCommantsOfPost(postId)

  return (
    <ul className="flex flex-col gap-3 w-full">
      {
        comments.map((comment) => (
          <li key={comment.id} className="border-2 bg-base-100 p-6 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-base">{comment.user?.fullname}</span>{" "}
                <span>•</span>{" "}
                <time className="text-sm opacity-70">{formatDate(comment.createdAt)}</time>
              </div>
            </div>

            <p>{comment.content}</p>
          </li>
        ))
      }
    </ul>
  )
}
