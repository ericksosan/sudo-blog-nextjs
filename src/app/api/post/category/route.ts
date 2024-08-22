import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}