import Link from "next/link"

export const Footer = () => {
  return (
    <>
      <footer className="p-10 bg-neutral text-neutral-content">
        <div className="footer mx-auto max-w-5xl px-4 justify-between">
          <div>
            <span className="footer-title">About Sudo</span>
            <p className="max-w-xs">Elevating your knowledge in technology and programming. Explore, learn, and master
              the digital world with us.</p>
            <Link href="/auth/signup" className="btn btn-outline btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5" />
                <line x1={12} x2={20} y1={19} y2={19} />
              </svg>
              Start Writing
            </Link>
          </div>
          <div>
            <span className="footer-title">Quick Links</span>
            <Link className="link link-hover" href="/">Home</Link>
            <Link className="link link-hover" href="/articles">Articles</Link>
            <Link className="link link-hover" href="/categories">Categories</Link>
            <Link className="link link-hover" href="/about">About</Link>
            <Link className="link link-hover" href="/contact">Contact</Link>
          </div>
          <div>
            <span className="footer-title">Popular Categories</span>
            <Link className="link link-hover" href="/category/linux">Linux</Link>
            <Link className="link link-hover" href="/category/programming">Programming</Link>
            <Link className="link link-hover" href="/category/security">Security</Link>
            <Link className="link link-hover" href="/category/networking">Networking</Link>
            <Link className="link link-hover" href="/category/cloud">Cloud Computing</Link>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © {new Date(Date.now()).getFullYear()} - All rights reserved by Sudo Blog</p>
        </div>
      </footer>
    </>
  )
}
