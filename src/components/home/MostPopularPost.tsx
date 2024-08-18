import Link from 'next/link'
import { fetchMostViewedPosts } from '@/lib/data'
import { formatDate } from '@/lib'

export const MostPopularPost = async () => {
  const mostViewedPosts = await fetchMostViewedPosts()

  return (
    <section>
      <div className="flex flex-col mb-4">
        <span className="text-xs">what's hot</span>
        <h2 className="font-semibold text-2xl">
          Most popular
        </h2>
      </div>

      <ul className="flex flex-col gap-6">
        {
          mostViewedPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/post/${post.slug}`} className="space-y-2">
                <h3 className="font-medium text-base opacity-95 text-balance">
                  {post.title}
                </h3>
                <div className="text-[10px] uppercase my-2">
                  <time>{formatDate(post.createdAt)}</time>{" "}
                  <span>•</span>{" "}
                  <span>{post.user.fullname}</span>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
