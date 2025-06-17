'use client'

import {useState, useEffect} from 'react'
import Intro from '@/components/Intro'
import HomeLayoutClientWrapper from './HomeLayoutClientWrapper'
import { Exo_2 } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'

    const exo2 = Exo_2({
      subsets: ['latin'],
      weight: ['200'],
    })

export default function HomeLayoutShowWhat({children}) {
    const [showIntro, setShowIntro] = useState(true)

    useEffect(() => {
    const timer = setTimeout(() => {
        setShowIntro(false)
    }, 9500)

    return () => clearTimeout(timer) // cleanup
    }, [])

    return(
        <html lang="en" className={exo2.className}>
            <body className="antialiased">
                <AnimatePresence mode="wait">
                    {showIntro? <Intro key="intro"/>:<HomeLayoutClientWrapper key="main">{children}</HomeLayoutClientWrapper>}
                </AnimatePresence>
            </body>
        </html>



            
        
    )
}
