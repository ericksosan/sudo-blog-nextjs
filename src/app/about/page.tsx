import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Sudo - About',
  description: `Welcome to Sudo, your top source for all things tech. Founded in 2023 by Erick Sosa in Santo Domingo, República Dominicana, Sudo aims to provide the latest and most reliable tech news. Erick's passion for technology drove him to create a platform where tech enthusiasts can connect, share stories, and inspire each other.
  Today, Sudo serves tech lovers around the world, sharing the stories behind every byte and innovation. We hope you enjoy our content as much as we enjoy creating it for you.`
}

export default function AboutPage() {
  return (
    <>
      <div>
        <section className="hero pt-4 relative min-h-[500px]">
          <div className="absolute inset-x-0 -top-80 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-30" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-10rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
          </div>
          <div className="hero-content flex-col-reverse lg:flex-row px-0">
            <div className="text-center lg:text-left lg:w-1/2">
              <h3 className="text-secondary font-semibold text-xl py-2">How It Started</h3>
              <h1 className="text-4xl font-semibold py-2">Every algorithm has a story behind it.</h1>
              <p className="py-2">
                Welcome to Sudo, your top source for all things tech. Founded in 2023 by Erick Sosa in Santo Domingo,
                República Dominicana, Sudo aims to provide the latest and most reliable tech news. Erick's passion for
                technology drove him to create a platform where tech enthusiasts can connect, share stories, and inspire
                each other.
              </p>
              <p>
                Today, Sudo serves tech lovers around the world, sharing the stories behind every byte and innovation.
                We hope you enjoy our content as much as we enjoy creating it for you.
              </p>
            </div>
            <div className="w-1/2">
              <div className="relative w-full h-80 overflow-hidden rounded-xl mask mask-triangle-2">
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-secondary opacity-30 z-50" />
                <Image
                  src="/team-working.avif"
                  alt="Team working together in an office environment"
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
        <section>
          <div className="stats stats-vertical lg:stats-horizontal">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-earth">
                  <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                  <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                  <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                  <circle cx={12} cy={12} r={10} />
                </svg>
              </div>
              <div className="stat-title">Global Reach</div>
              <div className="stat-value text-primary">50+</div>
              <div className="stat-desc">countries</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-newspaper">
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>
              </div>
              <div className="stat-title">Published Articles</div>
              <div className="stat-value text-secondary">200+</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
            <div className="stat">
              <div className="stat-figure">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-telescope">
                  <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
                  <path d="m13.56 11.747 4.332-.924" />
                  <path d="m16 21-3.105-6.21" />
                  <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
                  <path d="m6.158 8.633 1.114 4.456" />
                  <path d="m8 21 3.105-6.21" />
                  <circle cx={12} cy={13} r={2} />
                </svg>
              </div>
              <div className="stat-title">Monthly Visitors</div>
              <div className="stat-value">50,000+</div>
              <div className="stat-desc">5% more than last month</div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}
