import React from 'react'

export const SkeletonRecentPost = () => {
  return (
    <ul className="py-8 flex flex-col gap-10">
      {
        Array(10).fill('').map((_, index) => (
          <li key={index}>
            <div className="flex flex-col lg:flex-row items-center gap-6 animate-pulse">
              {/* <div className="min-h-40 min-w-60 max-h-40 max-w-60 relative overflow-hidden aspect-video bg-base-300 skeleton rounded-md"></div> */}
              <div className="flex flex-col space-y-4 items-start w-full">
                <div className="h-4 w-1/4 bg-base-300 skeleton rounded-full"></div>
                <div className="h-6 w-3/4 bg-base-300 skeleton rounded"></div>
                <div className="h-4 w-full bg-base-300 skeleton rounded"></div>
                <div className="h-4 w-5/6 bg-base-300 skeleton rounded"></div>
                <div className="text-xs uppercase flex space-x-2">
                  <div className="h-4 w-20 bg-base-300 skeleton rounded"></div>
                  <span>•</span>
                  <div className="h-4 w-24 bg-base-300 skeleton rounded"></div>
                </div>
                <div className="h-4 w-1/4 bg-base-300 skeleton rounded"></div>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}