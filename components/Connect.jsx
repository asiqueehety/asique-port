'use client'

import React from 'react'
import {motion} from 'framer-motion'
import { Lexend } from 'next/font/google'

const font = Lexend({ weight: ['800'], subsets: ['latin'] })

export default function Connect() {
  return (
    <motion.div className='relative backdrop-blur-md bg-black/30 border border-white/20 rounded-2xl shadow-lg p-6 max-w-5xl text-white h-fit justify-center mr-5 w-fit overflow-hidden cursor-pointer mt-3 mb-3'>
        <motion.h1
        className={`${font.className} text-4xl`}>
            Find me here
        </motion.h1>
    </motion.div>
  )
}
