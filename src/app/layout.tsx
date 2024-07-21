import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer, Navbar } from "@/components"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sudo",
  icons: '/sudo_logo.svg',
  description: `Elevate your tech knowledge with Sudo. Dive into the world of programming, Linux,
  cybersecurity, and more. Your journey to mastering the command line starts here.`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen mx-auto max-w-5xl px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
