import NextAuth from "next-auth"

import authConfig from '@/auth.config'

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from "@/lib/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig
})