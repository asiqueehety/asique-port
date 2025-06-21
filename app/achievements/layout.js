import { Suspense } from 'react'
import Loading from './loading'

export const metadata = {
  title: 'Wins and Achievements',
  description: '...',
}

export default function RootLayout({ children }) {

  return (
    <Suspense fallback={<Loading/>}>
      {children}
    </Suspense>
  )
}
