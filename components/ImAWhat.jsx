import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {useState, useEffect} from 'react'

export default function ImAWhat() {


  const titles = [
    'Full-Stack Web Developer',
    'App Developer',
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
            className=' lg:text-7xl text-6xl overflow-hidden text-white rounded-4xl pt-2 pb-2 pr-1 pl-1'
          >
            {titles[index]}
          </motion.h1>
        </AnimatePresence>
    </div>
  )
}
