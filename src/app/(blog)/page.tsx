import { MostPopularPost, RecentPost, SkeletonPopularPost, SkeletonRecentPost, TopPost } from "@/components"
import { Suspense } from "react"

async function HomePage() {
  return (
    <>
      <TopPost />

      <div className="flex flex-col items-start lg:flex-row gap-8 lg:justify-between py-2">
        <section className="pb-4 max-w-2xl w-full">
          <h2 className="font-semibold text-2xl">Recent posts</h2>
          <Suspense fallback={<SkeletonRecentPost />}>
            <RecentPost />
          </Suspense>
          {/* <Link href="/articles" className="btn btn-neutral font-medium mt-2">
            See all
            <ChevronRightIcon className="size-5" />
          </Link> */}
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