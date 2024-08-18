import { Footer, Navbar, WrapContainer } from "@/components"
import { AuthProvider } from "@/providers"
import { Toaster } from "sonner"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProvider>
      <WrapContainer>
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>
      </WrapContainer>

      <Footer />
      <Toaster position="top-right" />
    </AuthProvider>
  )
}
