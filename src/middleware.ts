import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { NextResponse } from "next/server"

const { auth } = NextAuth(authConfig)

function matchPath(pathname: string, pattern: string) {
  const patternParts = pattern.split('/')
  const pathParts = pathname.split('/')

  // Permite que rutas con parámetros dinámicos coincidan correctamente
  return patternParts.every((part, i) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      // Coincide si es un parámetro dinámico
      return true
    }
    return part === pathParts[i]
  })
}

const publicPaths = [
  '/',
  '/about',
  '/post/[id]',
  '/auth/signin',
  '/auth/signup'
]

export default auth((req) => {
  const { nextUrl } = req
  const pathname = nextUrl.pathname
  const isLoggedIn = !!req.auth

  const isPublicPath = publicPaths.some(pattern => matchPath(pathname, pattern))

  if (isPublicPath || pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/auth/signin", nextUrl))
  }

  if (["/auth/signin", "/auth/signup"].includes(pathname)) {
    return NextResponse.redirect(new URL("/", nextUrl))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
