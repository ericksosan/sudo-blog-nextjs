import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const { email, username, password } = await req.json();

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  const existingUsername = await prisma.user.findUnique({
    where: { username },
  });

  if (existingUsername) {
    return NextResponse.json({ message: 'Username already taken' }, { status: 400 });
  }

  if (existingUser) {
    return NextResponse.json({ message: 'User already exists' }, { status: 400 });
  }

  const hashedPassword = await hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
    },
  });

  const { password: _, ...userCreated } = newUser

  return NextResponse.json({ message: 'User created', user: userCreated }, { status: 201 });
}
