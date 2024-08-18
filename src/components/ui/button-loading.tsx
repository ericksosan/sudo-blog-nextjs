type ButtonLoadingProps = {
  children: React.ReactNode,
  loading: boolean,
  className?: string
}

export const ButtonLoading = ({ children, loading, className }: ButtonLoadingProps) => {
  return (
    <button disabled={loading} className={`flex items-center btn btn-primary w-full ${className}`}>
      {
        (loading)
          ? <span className="loading loading-spinner loading-xs" />
          : null
      }
      {children}
    </button>
  )
}
