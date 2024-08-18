import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Code Smarter, Not Harder | Sudo",
  icons: '/sudo_logo.svg',
  description: `Code Smarter, Not Harder. Dive into programming, Linux, cybersecurity, and more with Sudo.
  Your journey to mastering tech starts here.`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
