import { Bookmark, ChevronRight, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            <p className="py-6">
              Code Smarter, Not Harder. Dive into programming, Linux, cybersecurity, and more with Sudo.
              Your journey to mastering tech starts here.
            </p>
            <Link href="/auth/signup" className="btn btn-primary">Get Started</Link>
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
        <h2 className="font-semibold text-lg">
          Most popular categories
        </h2>

        <div className="py-4 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group hover:[animation-play-state:paused]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll group-hover:[animation-play-state:paused] will-change-transform">
            {CATEGORIES.map((category, index) => (
              <li key={index} className="card bg-neutral min-w-max px-3 py-1 rounded-sm">
                <Link href={`/category/${category}`} className="font-medium text-neutral-content">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll group-hover:[animation-play-state:paused] will-change-transform" aria-hidden="true">
            {CATEGORIES.map((category, index) => (
              <li key={index} className="card bg-neutral min-w-max px-3 py-1 rounded-sm">
                <Link href={`/category/${category}`} className="font-medium text-neutral-content">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="flex flex-col items-start lg:flex-row gap-4 lg:justify-between py-2">
        <section className="pb-4 max-w-2xl w-full">
          <h2 className="font-semibold text-lg border-b border-neutral/50 inline-block w-full pb-1">Recent posts</h2>

          <div className="py-4 flex flex-col divide-y divide-neutral/50">
            {
              Array(10).fill('').map((_, i) => (
                <article key={i} className="py-2 [&>div>div]:hover:translate-y-0 relative">
                  <Link href="" className="space-y-2">
                    <div className="flex flex-row items-start justify-between space-y-2">
                      <div className="flex flex-col space-y-2 items-start max-w-2xl text-left">
                        <h3 className="font-bold text-xl">
                          The resume that got a software engineer a $300,000 job
                          at Google.
                        </h3>

                        <p className="text-sm line-clamp-2 lg:line-clamp-2 max-w-xl">Lorem ipsum dolor sit amet consectetur
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
                </article>
              ))
            }
          </div>

          <Link href="/articles" className="btn btn-neutral font-medium mt-2">
            See all
            <ChevronRight className="size-5" />
          </Link>
        </section>

        <aside className="w-full lg:w-auto lg:flex-grow lg:sticky lg:top-4 bg-base-100 rounded-xl hidden lg:block border border-neutral/50 overflow-hidden">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg px-4 py-2 border-b border-neutral/50 inline-block w-full">
              Top writers
            </h2>
          </div>

          <ul className="divide-y divide-neutral/50 flex flex-col">
            {
              Array(5).fill('').map(() => (
                <li className="hover:bg-base-300 transition-colors duration-300 ease-linear px-4 py-2">
                  <Link href="" className="flex flex-row items-center gap-x-1.5">
                    <div className="avatar placeholder">
                      <div className="bg-neutral text-neutral-content w-8 rounded-full">
                        <span className="text-xs">ES</span>
                      </div>
                    </div>
                    <div className="">
                      <h4>Erick Manuel Sosa</h4>
                    </div>
                  </Link>
                </li>
              ))
            }
          </ul>
        </aside>
      </div>
    </>
  )
}
