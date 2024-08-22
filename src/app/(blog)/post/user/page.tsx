import { getPostsByUserId } from '@/lib/data';
import { Post } from '@/types';

import axios from 'axios';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';
import Link from 'next/link';
import { auth } from '@/auth';


async function handleDelete(postId: string) {
    try {
        await axios.delete(`/api/posts/${postId}`);
    } catch (err) {
        console.error('Failed to delete post', err);
    }
}

export default async function PostsPage() {
    const session = await auth();

    let posts: Post[] = [];
    posts = await getPostsByUserId(session?.user?.id ?? "");

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8">User Posts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div key={post.id} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.content}</p>
                            <div className="card-actions justify-end">
                                <Link href={`/edit/${post.id}`} className="btn btn-primary">
                                    Edit
                                </Link>
                                <button
                                    className="btn btn-error"
                                    onClick={async () => {
                                        await handleDelete(post.id);
                                        redirect('/post/user');
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
