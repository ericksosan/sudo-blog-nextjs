import Image from "next/image";
import Link from "next/link";

const categories = [
  'Facebook',
  'Disney',
  'Airbnb',
  'Apple',
  'Spark',
  'Samsung',
  'Quora',
  'Sass',
]

export default function HomePage() {
  return (
    <>
      <section className="hero py-4 relative min-h-[500px]">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[90deg] bg-gradient-to-tr from-primary to-secondary opacity-15 sm:left-[calc(50%-10rem)] sm:w-[72.1875rem]"
            style={{ clipPath: 'polygon(0% 15%, 15% 0%, 35% 5%, 50% 0%, 65% 10%, 50% 0%, 0% 10%, 10% 30%, 100% 50%, 90% 70%, 50% 32%, 85% 100%, 70% 95%, 50% 100%, 30% 90%, 15% 80%, 0% 85%, 10% 65%, 0% 50%, 5% 30%)' }} />
        </div>
        <div className="hero-content flex-col lg:flex-row px-0">
          <div className="text-center lg:text-left lg:pr-12 lg:w-1/2 relative">
            <h1 className="text-5xl font-bold">Welcome to{" "}
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent relative">
                Sudo
              </span>
            </h1>
            <p className="py-6">Elevate your tech knowledge with Sudo. Dive into the world of programming, Linux,
              cybersecurity, and more. Your journey to mastering the command line starts here.</p>
            <Link href="/sign-up" className="btn btn-primary">Get Started</Link>
            <Link href="/articles" className="btn btn-outline ml-2">Explore Articles</Link>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <div className="relative w-full h-80 overflow-hidden rounded-xl mask mask-squircle">
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-secondary opacity-50 z-50"></div>
              <Image
                src="/man-using-pc.avif"
                alt="Man using a computer"
                width={500}
                height={500}
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREzFBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8AoNxbhL3xvpeNluNyeQ0pwCxJGwA51j81BJQ4JOAJVo9PZtHn4vqJFjj5AZ3/2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-4 space-y-2">
        <h2 className="font-bold text-xl inline-block uppercase">Recent posts</h2>

        <div className="py-4">
          <article className="">
            <Link href="" className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-7 rounded-full">
                    <span className="text-xs">ES</span>
                  </div>
                </div>
                <span className="text-sm font-medium">Erick Manuel Sosa</span>
              </div>
              <div className="flex flex-row items-start justify-between space-y-2">
                <div className="flex flex-col space-y-2 items-start max-w-2xl">
                  <h3 className="font-bold text-2xl">
                    The resume that got a software engineer a $300,000 job
                    at Google.
                  </h3>

                  <p className="text-sm line-clamp-2 lg:line-clamp-3">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Dolores
                    quasi
                    reiciendis
                    sint suscipit
                    soluta culpa voluptatibus nam accusantium hic? Doloremque repellendus magni officiis
                    reprehenderit
                    quaerat quisquam in, assumenda numquam deserunt.
                  </p>
                  <div className="flex items-center gap-2 justify-between w-full">
                    <div className="flex items-center gap-4">
                      <span className="text-sm">3d ago</span>
                      <span className="flex items-center gap-x-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        3
                      </span>
                    </div>
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path fill="#000"
                          d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        </div>
      </section>

      <section className="pb-4 space-y-2">
        <h2 className="font-bold text-xl inline-block uppercase">
          MOST POPULAR CATEGORIES
        </h2>

        <div className="py-4 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group hover:[animation-play-state:paused]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll group-hover:[animation-play-state:paused] will-change-transform">
            {categories.map((category, index) => (
              <li key={index} className="card bg-primary min-w-max px-3 py-1 rounded-xl">
                <Link href="" className="font-medium text-primary-content">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll [animation-delay:-25s] group-hover:[animation-play-state:paused] will-change-transform" aria-hidden="true">
            {categories.map((category, index) => (
              <li key={index} className="card bg-primary min-w-max px-3 py-1 rounded-xl">
                <Link href="" className="font-medium text-primary-content">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
