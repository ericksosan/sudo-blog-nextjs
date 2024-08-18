"use client"

import Link from "next/link"
import { ChevronDownIcon, MenuIcon, TerminalIcon } from "lucide-react"
import { useSession, signOut } from "next-auth/react"

const NAVBAR_ITEMS = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/auth/signin', title: 'Sign in', active: true },
]

export const Navbar = () => {
  const { data: session } = useSession()

  const filteredItems = NAVBAR_ITEMS.filter(item => {
    if (item.path === '/auth/signin' && session) {
      return false
    }
    return true
  })

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <header className="bg-base-300 lg:bg-transparent">
      <nav className="navbar px-4 lg:px-0">
        <div className="navbar-start">
          <Link href="/" className="text-lg items-center font-bold text-primary hidden lg:flex">
            <TerminalIcon />
            Sudo
          </Link>

          <div className="drawer w-auto lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="flex-none">
              <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
                <MenuIcon />
              </label>
            </div>
            <div className="drawer-side z-50">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <li>
                  <Link href="/" className="text-lg items-center font-bold text-primary flex">
                    <TerminalIcon />
                    Sudo
                  </Link>
                </li>
                {
                  filteredItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className={(item?.active) ? 'active' : ''}>
                        {item.title}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 hidden lg:flex gap-2">
            {
              filteredItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={(item?.active) ? 'active' : ''}>
                    {item.title}
                  </Link>
                </li>
              ))
            }
          </ul>

          {
            (session)
              ? (<div className="dropdown dropdown-end">
                <ul className="menu p-0 text-primary">
                  <li tabIndex={0} role="button">
                    <a className="font-medium">
                      <span>{session?.user?.name}</span>
                      <ChevronDownIcon size={16} />
                    </a>
                  </li>
                </ul>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-5 w-52 p-2 shadow">
                  <li onClick={handleSignOut}>
                    <button>Log Out</button>
                  </li>
                </ul>
              </div>)
              : null
          }
        </div>
      </nav>
    </header>
  )
}
