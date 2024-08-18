import Link from "next/link"

export const Footer = () => {
  return (
    <>
      <footer className="p-10 bg-neutral text-neutral-content">
        <div className="footer mx-auto max-w-5xl px-4 justify-between">
          <div>
            <span className="footer-title">About Sudo</span>
            <p className="max-w-xs">
              Elevating your knowledge in technology and programming. Explore, learn, and master
              the digital world with us.
            </p>
          </div>
          <div>
            <span className="footer-title">Quick Links</span>
            <Link className="link link-hover" href="/">Home</Link>
            <Link className="link link-hover" href="/about">About</Link>
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
