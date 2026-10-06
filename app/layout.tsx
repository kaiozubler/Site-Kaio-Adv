import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import { MotionProvider } from '@/components/motion-provider'
import { ScrollProgress } from '@/components/scroll-progress'
import { advogado } from '@/lib/site'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const description = `${advogado.nome} (${advogado.oab}) — advocacia com atuação em Direito Médico, Hospitalar e Sanitário. Atendimento em todo o Brasil, com base em ${advogado.cidade}.`

export const metadata: Metadata = {
  title: `${advogado.nome} | Advocacia em Direito Médico e Hospitalar · ${advogado.oab}`,
  description,
  openGraph: {
    title: `${advogado.nome} — Advocacia em Direito Médico e Hospitalar`,
    description,
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f0f0f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`dark ${playfair.variable} ${inter.variable}`}>
      <body className="bg-background font-sans antialiased">
        <MotionProvider>
          <ScrollProgress />
          {children}
        </MotionProvider>
        <Toaster theme="dark" position="top-center" richColors />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
