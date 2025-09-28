import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Julio Sousa | CTO as a Service & Consultoria em Tecnologia",
  description: "Líder em tecnologia com experiência em EdTech, IA e produtos digitais. Ofereço consultoria estratégica e CTO as a Service para empresas que buscam acelerar sua transformação digital.",
  keywords: "CTO as a Service, Consultoria em Tecnologia, Transformação Digital, EdTech, Inteligência Artificial, Produtos Digitais",
  authors: [{ name: "Julio Sousa" }],
  openGraph: {
    title: "Julio Sousa | CTO as a Service",
    description: "Consultoria estratégica em tecnologia e produtos digitais",
    type: "website",
    locale: "pt_BR",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}