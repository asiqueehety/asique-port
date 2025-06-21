import { Suspense } from 'react'
import Loading from './loading'

export const metadata = {
  title: 'About Asique',
  description: '...',
}

export default function RootLayout({ children })
{
return (
    <Suspense fallback={<Loading/>}>
      {children}
    </Suspense>
  )
}