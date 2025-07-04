import { Exo_2 } from 'next/font/google'
import './globals.css'
import HomeLayoutShowWhat from '@/components/HomeLayoutShowWhat'
import Background from '@/components/Background'
import { SpeedInsights } from "@vercel/speed-insights/next"

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['600'],
})

export const metadata = {
  title: 'Asique Ehety',
  description: 'Portfolio of AsiqueEhety',
  }

export default function RootLayout({ children }) {

  return (
  <html lang="en" className={exo2.className}>
    <body className="antialiased text-white ">
      <Background/>
      <HomeLayoutShowWhat>
        {children}
      </HomeLayoutShowWhat>

    </body>
  </html>
  )
}
