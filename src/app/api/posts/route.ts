import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = req.query;

    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    if (!userId || typeof userId !== 'string') {
        return res.status(400).json({ message: 'Invalid user ID' });
    }

    try {
        const posts = await prisma.post.findMany({
            where: { userId },
            include: {
                comments: true,
                likes: true,
                saves: true,
                category: true,
            },
        });

        if (!posts) {
            return res.status(404).json({ message: 'No posts found for this user' });
        }

        return res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
