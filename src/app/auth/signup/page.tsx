import { SignupForm } from "@/components"

export default function SignUpPage() {
  return (
    <div className="w-full flex items-center justify-center min-h-[700px] py-4">
      <div className="absolute inset-x-0 -top-36 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-10rem)] sm:w-[72.1875rem]"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
      </div>
      <div className="card lg:bg-base-100 lg:border border-base-300 max-w-lg p-4 space-y-4 w-full lg:w-1/2">
        <h1 className="text-2xl font-bold text-center">
          Register now!
        </h1>
        <SignupForm />
      </div>
    </div>
  )
}
