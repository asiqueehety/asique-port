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
    }, 12500) //would be 12.5 seconds, temporary change for now

    return () => clearTimeout(timer) // cleanup
    }, [])

    return(
    <AnimatePresence mode="wait">
        {showIntro? <Intro key="intro"/>:<HomeLayoutClientWrapper key="main">{children}</HomeLayoutClientWrapper>}
    </AnimatePresence>        
    )
}
