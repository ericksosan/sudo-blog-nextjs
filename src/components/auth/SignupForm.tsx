"use client"

import Link from "next/link"
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonLoading } from "@/components"
import { toast } from "sonner"
import { signupSchema } from "@/lib/zod"
import { SignupFormInputs } from "@/types"

export const SignupForm = () => {
  const router = useRouter()

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema)
  })

  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    try {
      await axios.post('/api/auth/register', data)
      router.push('/auth/signin')
    } catch (e: any) {
      toast.error(e.response.data.message)
      console.error(e)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="flex gap-y-6 mb-6 flex-col lg:flex-row gap-x-4 w-full">
          <div className="w-full lg:w-1/2">
            <label className="flex items-center mb-2 text-sm font-medium relative before:content-['*'] before:absolute before:text-error before:-right-2 max-w-max">
              First Name
            </label>
            <input
              type="text"
              className="input input-bordered !w-full"
              placeholder="Good"
              {...register("firstname")}
            />
            {(errors.firstname) &&
              (<span className="label-text-alt text-error">
                {errors.firstname.message}
              </span>)}
          </div>

          <div className="w-full lg:w-1/2">
            <label className="flex items-center mb-2 text-sm font-medium relative before:content-['*'] before:absolute before:text-error before:-right-2 max-w-max">
              Last Name
            </label>
            <input
              type="text"
              className="input input-bordered !w-full"
              placeholder="Luck"
              {...register("lastname")}
            />
            {(errors.lastname) &&
              (<span className="label-text-alt text-error">
                {errors.lastname.message}
              </span>)}
          </div>

        </div>
        <div className="mb-6">
          <label className="flex items-center mb-2 text-sm font-medium relative before:content-['*'] before:absolute before:text-error before:-right-2 max-w-max">
            Email
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="goodluck@goodluck.com"
            {...register("email")}
          />
          {(errors.email) &&
            (<span className="label-text-alt text-error">
              {errors.email.message}
            </span>)}
        </div>
        <div className="flex gap-y-6 mb-6 flex-col lg:gap-x-6">
          <div className="w-full">
            <label className="flex items-center mb-2 text-sm font-medium relative before:content-['*'] before:absolute before:text-error before:-right-2 max-w-max">
              Password
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
              {...register("password")}
            />
            {(errors.password) &&
              (<span className="label-text-alt text-error">
                {errors.password.message}
              </span>)}
          </div>
          <div className="w-full">
            <label className="flex items-center mb-2 text-sm font-medium relative before:content-['*'] before:absolute before:text-error before:-right-2 max-w-max">
              Confirm Password
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
              {...register("confirmPassword")}
            />
            {(errors.confirmPassword) &&
              (<span className="label-text-alt text-error">
                {errors.confirmPassword.message}
              </span>)}
          </div>
        </div>
      </div>

      <ButtonLoading loading={isSubmitting}>
        Sign up
      </ButtonLoading>

      <div className="p-4 flex items-center justify-center">
        <span>Already have an account?{" "}
          <Link href="/auth/signin" className="text-secondary font-medium group relative w-max">
            Sign in
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-secondary group-hover:w-3/6" />
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-secondary group-hover:w-3/6" />
          </Link>
        </span>
      </div>
    </form>
  )
}