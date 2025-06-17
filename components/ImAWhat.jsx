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


    const variant=
    {
        initial: { opacity: 0, y: 30, x: 0 },
        animate: { opacity: 1, y: 0, x: 0 },
        exit: { opacity: 0, y: -30, x: 0 },
        transition: { duration: 0.1, ease: 'easeInOut' }
    }

  return (
    <div>
        <AnimatePresence mode="wait">
          <motion.h1
            key={titles[index]}
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='text-8xl'
          >
            {titles[index]}
          </motion.h1>
        </AnimatePresence>
    </div>

    
  )
}


// 'use client'

// import React, { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function ImAWhat() {
//   const titles = [
//     'Full-Stack Web Developer',
//     'Flutter Developer',
//     'Software Developer',
//     'UI/UX Designer',
//   ]

//   const [index, setIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % titles.length)
//     }, 1500) // change every 1.5 seconds

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="text-center text-3xl lg:text-6xl font-semibold">
//       <p>I'm a</p>
//       <div>
//         <AnimatePresence mode="wait">
//           <motion.h1
//             key={titles[index]}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="inline-block"
//           >
//             {titles[index]}
//           </motion.h1>
//         </AnimatePresence>
//       </div>
//     </div>
//   )
// }
