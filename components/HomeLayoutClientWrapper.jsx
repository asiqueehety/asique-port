'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import {useState } from 'react'
import Intro from '@/components/Intro'
import { Exo_2, Truculenta } from 'next/font/google'
import CircularNavbar from '@/components/CircularNavbar'

  const exo2 = Exo_2({
    subsets: ['latin'],
    weight: ['300'],
  })
export default function HomeLayoutClientWrapper({ children }) {
  const path = usePathname()
  const [showIntro, setShowIntro] = useState(true)

  return (
    <div className={exo2.className}>
        <CircularNavbar />
        <section className="lg:ml-80 md:ml-40 sm:ml-20 mt-10 ml-3 mr-3 text-md">
            <AnimatePresence mode="wait">
                <motion.div
                    key={path}
                    initial={{ opacity: 1, y: 30, x: 0 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: -30, x: 0 }}
                    transition={{ duration: 0.1 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </section>
    </div>
  )
}


