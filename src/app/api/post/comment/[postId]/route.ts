import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { postId: string } }) {
  const { postId } = params

  if (!postId) {
    return NextResponse.json({ error: 'Invalid slug' }, { status: 400 })
  }

  try {
    const comments = await prisma.comment.findMany({
      where: { postId },
      orderBy: {
        createdAt: "desc"
      },
      include: {
        user: true
      }
    })

    if (!postId) {
      return NextResponse.json({ error: 'Comments of this post not found' }, { status: 404 })
    }

    return NextResponse.json(comments)
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}