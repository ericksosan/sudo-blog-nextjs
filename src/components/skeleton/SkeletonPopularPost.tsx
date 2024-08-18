export const SkeletonPopularPost = () => {
  return (
    <section>
      <div className="flex flex-col mb-4">
        <span className="text-xs">what&apos;s hot</span>
        <h2 className="font-semibold text-2xl">
          Most popular
        </h2>
      </div>

      <ul className="flex flex-col gap-6">
        {
          Array(4).fill('').map((_, index) => (
            <li key={index}>
              <div className="space-y-2 animate-pulse">
                <div className="h-6 w-3/4 bg-base-300 skeleton"></div>
                <div className="text-[10px] uppercase my-2 flex space-x-2">
                  <div className="h-4 w-16 bg-base-300 skeleton"></div>
                  <span>•</span>
                  <div className="h-4 w-20 bg-base-300 skeleton"></div>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}