"use client"

import { Metadata } from "next"
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { z } from 'zod';
import { toast } from "sonner";
import { ButtonLoading } from "@/components/ui";
import { useState } from "react";

const metadata: Metadata = {
  title: 'Sudo - Sign in'
}

const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters' }),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function SignInPage() {
  const [isFetching, setIsFetching] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setIsFetching(true)
    try {
      const response = await axios.post('/api/auth/login', data);
      if (response.status === 200) {
        toast.success(response.data.message)
        router.push('/');
      }
      setIsFetching(false)
    } catch (e: any) {
      toast.error(e.response?.data?.error || 'An error occurred')
      setIsFetching(false)
    }
  };

  return (
    <div className="w-full flex items-center justify-center min-h-[600px] py-4">
      <div className="absolute inset-x-0 -top-36 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-10rem)] sm:w-[72.1875rem]"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
      </div>
      <div className="card bg-base-100 border border-base-300 max-w-lg p-4 space-y-4 w-full lg:w-1/2">
        <h1 className="text-2xl font-bold text-center">
          Welcome back
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full mb-6">
            <label className="flex items-center mb-2 text-sm font-medium relative before:content-['*'] before:absolute before:text-error before:-right-2 max-w-max">
              Email Address
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
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-secondary group-hover:w-3/6" />
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-secondary group-hover:w-3/6" />
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
