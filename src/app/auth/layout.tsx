import { Footer, WrapContainer } from "@/components"
import { TerminalIcon } from "lucide-react"
import Link from "next/link"
import { Toaster } from "sonner"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <WrapContainer>
        <header className="bg-base-100 shadow lg:shadow-none lg:bg-transparent">
          <nav className="navbar px-4 lg:px-0">
            <div className="navbar-start">
              <Link href="/" className="text-lg flex items-center font-bold text-primary">
                <TerminalIcon />
                Sudo
              </Link>
            </div>
          </nav>
        </header>

        <main className="min-h-screen px-4 lg:px-0">
          {children}
        </main>
      </WrapContainer>

      <Footer />

      <Toaster position="top-right" richColors />
    </>
  )
}
