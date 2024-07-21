import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="w-full flex items-center justify-center min-h-[600px] py-4">
      <div className="absolute inset-x-0 -top-36 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-10rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}>
        </div>
      </div>
      <div className="card bg-base-100 border border-neutral max-w-lg p-4 space-y-4 w-full lg:w-1/2">
        <h1 className="text-2xl font-bold text-center">
          Welcome back
        </h1>
        <form>
          <div className="w-full relative mb-6">
            <label className="flex  items-center mb-2 text-sm font-medium">
              Email Address
              <svg width={7} height={7} className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
              </svg>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="goodluck@goodluck.com"
              required />
          </div>
          <div className="w-full relative mb-6">
            <label className="flex  items-center mb-2  text-sm font-medium">Password <svg width={7} height={7} className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
            </svg>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
              required />
          </div>
          <button className="btn btn-primary w-full">Sign in</button>
          <div className="p-4 flex items-center justify-center">
            <span>Don't have an account?{" "}
              <Link href="/signup" className="text-secondary font-medium group relative w-max">
                Sign up
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-secondary group-hover:w-3/6" />
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-secondary group-hover:w-3/6" />
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
