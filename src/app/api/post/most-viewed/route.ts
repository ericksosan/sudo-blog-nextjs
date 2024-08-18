import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const posts = await prisma.post.findMany({
      take: 4,
      orderBy: {
        views: 'desc'
      },
      include: {
        user: {
          select: {
            firstname: true,
            lastname: true,
            fullname: true
          }
        },
        category: true,
        _count: {
          select: {
            comments: true,
            likes: true,
            saves: true
          }
        }
      }
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching top 4 most viewed posts:', error);
    return NextResponse.json(
      { error: 'Error fetching top 4 most viewed posts' },
      { status: 500 }
    );
  }
}