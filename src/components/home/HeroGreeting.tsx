import Image from 'next/image'
import Link from 'next/link'

export const HeroGreeting = () => {
  return (
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
  )
}
