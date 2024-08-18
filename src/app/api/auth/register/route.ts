import { NextRequest, NextResponse } from 'next/server'
import { hash } from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { capitalize } from '@/lib'

export async function POST(req: NextRequest) {
  const { email, firstname, lastname, password } = await req.json()

  const existingUser = await prisma.user.findUnique({
    where: { email },
  })

  if (existingUser) {
    return NextResponse.json({ message: 'User already exists' }, { status: 400 })
  }

  const hashedPassword = await hash(password, 10)

  const newUser = await prisma.user.create({
    data: {
      email,
      firstname,
      lastname,
      fullname: capitalize(firstname).concat(' ', capitalize(lastname)),
      password: hashedPassword,
    },
  })

  const { password: _, ...userCreated } = newUser

  return NextResponse.json({ message: 'User created', user: userCreated }, { status: 201 })
}
