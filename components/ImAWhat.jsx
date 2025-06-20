import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {useState, useEffect} from 'react'

export default function ImAWhat() {


  const titles = [
    'Full-Stack Web Developer',
    'Flutter Developer',
    'Software Developer',
    'UI/UX Designer',
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length)
    }, 1500) // change every 1.5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
        <AnimatePresence mode="wait">
          <motion.h1
            key={titles[index]}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='lg:text-8xl text-6xl overflow-hidden bg-col6 text-black rounded-4xl'
          >
            {titles[index]}
          </motion.h1>
        </AnimatePresence>
    </div>
  )
}
