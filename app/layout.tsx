import * as React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zeeshan Mushtaq | Full Stack Developer",
  description:
    "Full-Stack Developer (MERN/MEAN) with 5+ years of expertise in building scalable, AI-driven web applications.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head />
      <body
        className="min-h-screen bg-white dark:bg-[#121628] font-sans antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'