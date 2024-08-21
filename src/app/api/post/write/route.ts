import { generateUniqueSlug } from "@/lib";
import { prisma } from "@/lib/prisma";
import { writePostSchema } from "@/lib/zod";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = writePostSchema.parse(body);

    const post = await prisma.post.create({
      data: {
        userId: data.userId,
        title: data.title,
        slug: generateUniqueSlug(data.title),
        content: data.content,
        categoryId: data.categoryId,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}