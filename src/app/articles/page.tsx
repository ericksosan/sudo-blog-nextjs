import Link from "next/link";
import { Bookmark, Heart, MessageCircle, Search } from "lucide-react";

const CATEGORIES = [
  "Web Development",
  "JavaScript",
  "CSS",
  "HTML",
  "Frameworks",
  "Back-end",
  "Front-end",
  "Databases",
  "DevOps",
  "Security",
  "APIs",
  "Tools",
  "Tutorials",
  "Projects",
  "Interviews",
  "News",
  "Opinions",
  "Resources",
  "Events",
  "Trends"
]

export default function ArticlesPage() {
  return (
    <div>
      <div className="absolute inset-x-0 -top-36 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-10rem)] sm:w-[72.1875rem]"
          style={{ clipPath: 'polygon(30.1% 44.1%, 8% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 50.7% 2%, 72.5% 32.5%, 60.2% 8.4%, 52.4% 96.1%, 77.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
      </div>

      <div className=" flex flex-col justify-center mt-4 lg:mt-10 gap-y-4">
        <h2 className="font-bold text-2xl lg:text-4xl">
          Articles
        </h2>

        <div className="flex flex-col items-start lg:flex-row gap-4 lg:justify-between py-2">

          {/* // ? Articles */}
          <section className="flex flex-col gap-4 max-w-2xl w-full">

            {/* // ? Search Box */}
            <div className="flex flex-row justify-between gap-2 mx-auto w-full max-w-2xl">
              <label className="input input-bordered flex items-center gap-2 w-full">
                <input type="text" className="grow" placeholder="Search..." />
                <Search className="h-4 w-4 opacity-70" />
              </label>

              <select className="select select-bordered max-w-xs">
                <option>Latest</option>
                <option>Oldest</option>
              </select>
            </div>

            <ul className="flex flex-col gap-4">
              {
                Array(5).fill('').map((_, i) => (
                  <li key={i} className="py-2 [&>div>div]:hover:translate-y-0 relative bg-base-100 p-4 rounded-md border border-neutral/50">
                    <Link href={`/articles/${i}`} className="space-y-2">
                      <div className="flex flex-row items-start justify-between space-y-2">
                        <div className="flex flex-col space-y-2 items-start">
                          <h3 className="font-bold text-xl">
                            The resume that got a software engineer a $300,000 job
                            at Google.
                          </h3>

                          <p className="text-sm line-clamp-2 lg:line-clamp-2">Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Dolores
                            quasi
                            reiciendis
                            sint suscipit
                            soluta culpa voluptatibus nam accusantium hic? Doloremque repellendus magni officiis
                            reprehenderit
                            quaerat quisquam in, assumenda numquam deserunt.
                          </p>
                        </div>
                      </div>
                    </Link>
                    <div className="text-[11px] uppercase text-neutral-content/70 my-2">
                      <time>7 Jun</time>{" "}
                      <span>•</span>{" "}
                      <Link href="" className="link link-hover">Erick Manuel Sosa</Link>
                    </div>
                    <div className="min-h-6 mt-1 overflow-hidden">
                      <div className="flex items-center justify-between max-w-md  translate-y-full transition-transform duration-300 ease-in-out">
                        <button className="btn btn-xs btn-ghost">
                          <Heart className="size-4" />
                          1
                        </button>

                        <button className="btn btn-xs btn-ghost">
                          <MessageCircle className="size-4" />
                          1
                        </button>

                        <button className="btn btn-xs btn-ghost">
                          <Bookmark className="size-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>

            <div className="flex items-center justify-center mt-4 my-6">
              <button className="btn btn-sm btn-outline btn-neutral">Load more</button>
            </div>
          </section>

          <aside className="w-full lg:w-auto lg:flex-grow lg:sticky lg:top-4 bg-base-100 rounded-xl hidden lg:block border border-neutral/50 overflow-hidden">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg px-4 py-2 border-b border-neutral/50 inline-block w-full">
                Popular Categories
              </h2>
              {/* {(category) && (
                <button onClick={() => router.push({ query: {} })}>clear</button>
              )} */}
            </div>

            <ul className="divide-y divide-neutral/50 flex flex-col">
              {
                CATEGORIES.slice(0, 5).map((category) => (
                  <li className="hover:bg-base-300 transition-colors duration-300 ease-linear px-4 py-2">
                    <Link href={`/articles?category=${category}`} className="flex flex-row items-center gap-x-1.5 text-sm">
                      {category}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </aside>

        </div>
      </div>
    </div>
  )
}
