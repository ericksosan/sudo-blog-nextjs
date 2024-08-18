"use client"

import { useState } from "react"
import Link from "next/link"
import { type SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import type { LoginFormInputs } from "@/types"
import { loginSchema } from "@/lib/zod"
import { ButtonLoading } from "@/components"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export const LoginForm = () => {
  const [isFetching, setIsFetching] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setIsFetching(true)
    try {
      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (response?.error) throw new Error("Invalid email or password")

      router.push('/')

      setIsFetching(false)
    } catch (e: any) {
      toast.error(e.message || 'An error occurred')
      setIsFetching(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full mb-6">
        <label className="flex items-center mb-2 text-sm font-medium relative before:content-['*'] before:absolute before:text-error before:-right-2 max-w-max">
          Email
        </label>
        <input
          type="text"
          {...register("email")}
          className="input input-bordered w-full"
          placeholder="goodluck@goodluck.com"
        />

        {(errors.email) &&
          (<span className="label-text-alt text-error">
            {errors.email.message}
          </span>)}
      </div>
      <div className="w-full relative mb-6">
        <label className="flex  items-center mb-2  text-sm font-medium relative before:content-['*'] before:absolute before:text-error before:-right-2 max-w-max">
          Password
        </label>
        <input
          type="password"
          {...register("password")}
          className="input input-bordered w-full"
          placeholder="Password"
        />
        {(errors.password) &&
          (<span className="label-text-alt text-error">
            {errors.password.message}
          </span>)}
      </div>
      <ButtonLoading loading={isFetching}>
        Sign in
      </ButtonLoading>
      <div className="p-4 flex items-center justify-center">
        <span>Don't have an account?{" "}
          <Link href="/auth/signup" className="text-secondary font-medium group relative w-max">
            Sign up
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 h-0.5 bg-secondary group-hover:w-3/6" />
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 h-0.5 bg-secondary group-hover:w-3/6" />
          </Link>
        </span>
      </div>
    </form>
  )
}
