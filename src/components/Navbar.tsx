import { TerminalIcon } from "lucide-react"
import Link from "next/link"

const NAVBAR_ITEMS = [
  { path: '/', title: 'Home', active: false },
  { path: '/articles', title: 'Articles', active: false },
  { path: '/about', title: 'About', active: false },
  { path: '/auth/signin', title: 'Sign in', active: true },
]

export const Navbar = () => {
  return (
    <header className="bg-base-100 shadow-sm lg:shadow-none lg:bg-transparent relative">
      <nav className="navbar mx-auto max-w-5xl px-4">
        <div className="navbar-start">
          <Link href="/" className="text-xl flex items-center font-bold text-primary">
            <TerminalIcon />
            Sudo
          </Link>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base gap-2">
              {
                NAVBAR_ITEMS.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={(item.active) ? 'active' : ''}>
                      {item.title}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="dropdown dropdown-bottom dropdown-end z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-1">
              {
                NAVBAR_ITEMS.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={item.active ? 'active' : ''}>
                      {item.title}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}