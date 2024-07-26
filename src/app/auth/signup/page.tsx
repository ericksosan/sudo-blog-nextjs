"use client"
// import { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import axios from 'axios';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonLoading } from "@/components/ui";
import { toast } from "sonner";

const registerSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(8, 'Password must be at least 8 characters'),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

type RegisterFormInputs = z.infer<typeof registerSchema>;

export default function SignUpPage() {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      await axios.post('/api/auth/register', data);
      router.push('/auth/signin');
    } catch (e: any) {
      toast.error(e.response.data.message)
      console.error(e)
    }
  };

  return (
    <div className="w-full flex items-center justify-center min-h-[700px] py-4">
      <div className="absolute inset-x-0 -top-36 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-10rem)] sm:w-[72.1875rem]"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
      </div>
      <div className="card bg-base-100 border border-base-300 max-w-lg p-4 space-y-4 w-full">
        <h1 className="text-2xl font-bold text-center">
          Register now!
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="flex gap-y-6 mb-6 flex-col lg:flex-row gap-x-4 w-full">
              <div className="w-full">
                <label className="flex items-center mb-2 text-sm font-medium relative before:content-['*'] before:absolute before:text-error before:-right-2 max-w-max">
                  Username
                </label>
                <input
                  type="text"
                  className="input input-bordered !w-full"
                  placeholder="Good"
                  {...register("username")}
                />
                {(errors.username) &&
                  (<span className="label-text-alt text-error">
                    {errors.username.message}
                  </span>)}
              </div>
            </div>
            <div className="mb-6">
              <label className="flex items-center mb-2 text-sm font-medium relative before:content-['*'] before:absolute before:text-error before:-right-2 max-w-max">
                Email Address
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
      </div>
    </div>
  )
}
