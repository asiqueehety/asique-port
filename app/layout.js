
// import {Exo_2, Inter, Josefin_Sans} from 'next/font/google';
// import Link from 'next/link'
// import './globals.css'
// import CircularNavbar from '@/components/CircularNavbar';

// export const metadata = {
//   title: 'AsiqueEhety',
//   description: '...',
// }
// const exo2 = Exo_2
//   ({
//     subsets: ['latin'],
//     weight: ['300'],
//   })
// export default function RootLayout({ children }) {
  
//   return (
    
//     <html lang="en" className={exo2.className}>
//       <body className='antialiased'>
//         <CircularNavbar/>
//         <section className='lg:ml-80 md:ml-40 sm:ml-20 mt-10 ml-8'>
//           {children}
//         </section>
//       </body>
//     </html>
//   )
// }









import { Exo_2 } from 'next/font/google'
import './globals.css'
import HomeLayoutShowWhat from '@/components/HomeLayoutShowWhat'
import Background from '@/components/Background'
const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['300'],
})

export const metadata = {
  title: 'AsiqueEhety',
  description: 'Portfolio of AsiqueEhety',
  }

export default function RootLayout({ children }) {

  return (
  <html lang="en" className={exo2.className}>
    <body className="antialiased">
      <Background/>
      <HomeLayoutShowWhat>
        {children}
      </HomeLayoutShowWhat>
    </body>
  </html>
  )
}
