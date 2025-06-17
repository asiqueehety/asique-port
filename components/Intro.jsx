'use client'

import {motion, AnimatePresence} from 'framer-motion'
import React from 'react'
import  { Exo_2, Maven_Pro, Play } from 'next/font/google'
import { useState } from 'react';
import ImAWhat from '@/components/ImAWhat';



const font = Play({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Intro() {
  const [showIm, setShowIm] = useState(false);
  const [showHello, setShowHello] = useState(true);
  const [showOther, setShowOther] = useState(false);

  setTimeout(() => {
    setShowIm(true);
  }, 1500); // Show "I am" for 1.5 seconds

  setTimeout(() => {
    setShowHello(false);
    setShowOther(true);
  }, 3500); // Hide "Hello" after 3.5 seconds
  return (
    <div className={`${font.className} bg-black flex text-white h-screen overflow-hidden`}>
      <motion.h1
      key="intro"
      initial={{ opacity: 0, y: 30, x: 0 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -30, x: 0 }}
      transition={{ duration: 0.3 }}
      >
          {showHello && <span className='text-5xl lg:text-9xl md:text-6xl'>Hello</span>}
          <br/>
          {showIm && 
          <motion.span 
          className='text-3xl lg:text-6xl md:text-4xl'
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 50}}
          exit={{ opacity: 0, y: -30, x: 0 }}
          transition={{ duration: 0.3 }}
          >I'm Asique
          </motion.span>}
          <br/>
          {showOther && 
          <motion.span 
          className='text-6xl lg:text-10xl md:text-7xl'
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 50 }}
          exit={{ opacity: 0, y: -30, x: 0 }}
          transition={{ duration: 0.3 }}
          ><span>I'm a</span><ImAWhat/>
          </motion.span>}
      </motion.h1>

    </div>

  )
}
