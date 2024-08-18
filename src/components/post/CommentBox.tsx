"use client"

import { commentSchema } from "@/lib/zod"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { toast } from "sonner"
import createComment from "../../../actions/create-comment-action"
import { z } from "zod"
import { useRef } from "react"

export const CommentBox = ({ postId }: { postId: string }) => {
  const { data: session } = useSession()
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleCreateComment = async (formData: FormData) => {
    const form = Object.fromEntries(formData.entries())

    const data: z.infer<typeof commentSchema> = {
      content: form.content as string ?? "",
      userId: session?.user?.id ?? "",
      postId
    }

    const result = commentSchema.safeParse(data)

    if (!result.success) {
      for (const issue of result.error.issues) {
        toast.error(issue.message)
      }

      return
    }

    const response = await createComment(result.data)

    if (response?.errors) {
      for (const error of response?.errors) {
        toast.error(error.message)
      }

      return
    }

    toast.success('Comment successfully created')

    if (textareaRef.current) {
      textareaRef.current.value = ""
    }
  }

  return (
    <form action={handleCreateComment} className="flex flex-col gap-3 items-start w-full">
      <textarea
        rows={4}
        name="content"
        ref={textareaRef}
        className={`outline-none w-full resize-none border-2 bg-base-100 rounded-xl focus:border-primary p-6 ${!session ? 'pointer-events-none' : ''}`}
        placeholder="Leave a comment..."
        disabled={!session}
      />
      {(session)
        ? (<button type="submit" className="btn btn-sm btn-primary w-auto">Comment</button>)
        : (<Link href="/auth/signup" className="btn btn-sm btn-primary">Sign In or Sign Up to comment</Link>)
      }
    </form>
  )
}
