export const WrapContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-5xl">
      {children}
    </div>
  )
}
