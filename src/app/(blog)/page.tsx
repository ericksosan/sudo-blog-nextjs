import { MostPopularPost, RecentPost, SkeletonPopularPost, SkeletonRecentPost, TopPost } from "@/components"
import { Suspense } from "react"

async function HomePage() {
  return (
    <>
      <TopPost />

      <div className="flex flex-col items-start px-4 lg:px-0 lg:flex-row gap-8 lg:justify-between py-2">
        <section className="pb-4 max-w-2xl w-full">
          <h2 className="font-semibold text-2xl">Recent posts</h2>
          <Suspense fallback={<SkeletonRecentPost />}>
            <RecentPost />
          </Suspense>
        </section>

        <aside className="w-full hidden lg:w-72 lg:block">
          <Suspense fallback={<SkeletonPopularPost />}>
            <MostPopularPost />
          </Suspense>
        </aside>
      </div>
    </>
  )
}

export default HomePage