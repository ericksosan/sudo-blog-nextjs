import Link from "next/link"

export const Navbar = () => {
  return (
    <header className="bg-base-100 shadow-sm lg:shadow-none lg:bg-transparent relative">
      <nav className="navbar mx-auto max-w-5xl px-4">
        <div className="navbar-start">
          <Link href="/" className="text-xl flex items-center font-bold text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 17 10 11 4 5" />
              <line x1={12} x2={20} y1={19} y2={19} />
            </svg>
            Sudo
          </Link>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base gap-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/articles">Articles</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/signin" className="active">Sign in</Link></li>
            </ul>
          </div>

          <div className="dropdown dropdown-bottom dropdown-end z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-1">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/articles">Articles</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/signin" className="active">Sign in</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}