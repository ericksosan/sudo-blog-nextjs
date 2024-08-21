"use client"

import { fetchCategories, fetchCreatePost } from "@/lib/data"
import { Category, WritePostData } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Editor } from "novel-lightweight"
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const schemaWritePost = z.object({
  title: z.string({ required_error: "Title is required" }).min(1, "Title is required"),
  content: z.string({ required_error: "Content is required" }).min(1, "Content is required"),
  categoryId: z.string({ required_error: "Category is required" }).min(1, "Category is required"),
})

const WritePage = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    const getCategories = async () => {
      try {
        setIsLoading(true)
        const categoriesData = await fetchCategories()
        setCategories(categoriesData)
      } catch (error) {
        console.error("Error fetching categories:", error)
        toast.error("Error fetching categories")
      } finally {
        setIsLoading(false)
      }
    }
    getCategories()
  }, [])

  const {
    register,
    handleSubmit,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
      categoryId: "",
    },
    resolver: zodResolver(schemaWritePost)
  });

  const title = watch("title");
  const content = watch("content");
  const categoryId = watch("categoryId");

  const onSubmit: SubmitHandler<z.infer<typeof schemaWritePost>> = async (data) => {
    try {
      setIsLoading(true)
      const dataPost: WritePostData = {
        ...data,
        userId: session?.user?.id ?? "",
      }
      await toast.promise(
        fetchCreatePost(dataPost),
        {
          loading: "Creating post...",
          success: (post) => {
            router.push(`/post/${post.slug}`)
            return "Post created successfully!"
          },
          error: (error) => {
            console.error("Error creating post:", error)
            return "Error creating post"
          }
        }
      )
    } catch (error) {
      console.error("Error creating post:", error)
      toast.error("Error creating post")
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <section className="flex flex-col gap-4 py-4 relative">
      <div className="flex items-center justify-end w-full">
        <button
          disabled={isLoading || !(title.length > 0 && content.length > 0 && categoryId.length > 0)}
          className="btn btn-sm btn-primary self-end"
          onClick={handleSubmit(onSubmit)}
        >
          Publish
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div>
          {isLoading ? (
            <div className="px-12">Loading categories...</div>
          ) : (
            <select
              {...register("categoryId")}
              className="px-12 input input-bordered font-medium"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          )}
        </div>

        <div>
          <input
            type="text"
            {...register("title")}
            className="px-12 input input-bordered w-full font-medium"
            placeholder="Enter title"
          />
        </div>


        <div>
          <Editor
            defaultValue={watch("content")}
            className="border-none outline-none"
            disableLocalStorage={true}
            onUpdate={(editor) => {
              setValue("content", editor?.storage.markdown.getMarkdown())
            }}
          />
        </div>
      </form>
    </section>
  )
}

export default WritePage