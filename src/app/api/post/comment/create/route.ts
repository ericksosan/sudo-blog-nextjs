import { prisma } from '@/lib/prisma'
import { commentSchema } from '@/lib/zod'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const validatedData = commentSchema.parse(body)

    const comment = await prisma.comment.create({
      data: {
        postId: validatedData.postId,
        userId: validatedData.userId,
        content: validatedData.content,
      }
    })

    return NextResponse.json(comment, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }))
      return NextResponse.json({
        error: 'Validation Error',
        details: errorMessages
      }, { status: 400 })
    }

    console.error('Error al crear el comentario:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}