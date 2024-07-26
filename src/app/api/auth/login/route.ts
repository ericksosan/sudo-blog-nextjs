import { NextRequest, NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import { prisma } from '@/lib/prisma';

const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters' }),
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const { email, password } = loginSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !(await compare(password, user.password))) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET as string, {
      expiresIn: '1h',
    });

    const serializedCookie = serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60,
      path: '/',
    });

    const response = NextResponse.json({ message: 'Login successful' });
    response.headers.append('Set-Cookie', serializedCookie);

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Invalid data provided' }, { status: 400 });
  }
}
