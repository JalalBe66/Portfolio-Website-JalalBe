import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jalal Belych | Développeur Full-Stack Laravel",
  description:
    "Portfolio de Jalal Belych - Développeur Full-Stack Laravel & Spécialiste Backend PHP. Création d'applications web sécurisées et performantes.",
  keywords: ["Laravel", "PHP", "Développeur", "Full-Stack", "Freelance", "Casablanca", "Maroc"],
  authors: [{ name: "Jalal Belych" }],
  openGraph: {
    title: "Jalal Belych | Développeur Full-Stack Laravel",
    description: "Building secure, scalable Laravel applications with passion for clean code.",
    type: "website",
    locale: "fr_FR",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
