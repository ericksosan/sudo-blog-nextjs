export const CommentListSkeleton = ({ count = 3 }) => {
  return (
    <ul className="flex flex-col gap-3 w-full">
      {[...Array(count)].map((_, index) => (
        <li key={index} className="border-2 bg-base-100 p-6 rounded-xl space-y-3">
          <div className="flex items-center space-x-2">
            <div className="skeleton w-32 h-4"></div>
            <div className="skeleton w-4 h-4 rounded-full"></div>
            <div className="skeleton w-16 h-3"></div>
          </div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-3/4"></div>
        </li>
      ))}
    </ul>
  )
}