'use client'

import {motion, AnimatePresence} from 'framer-motion'
import React from 'react'
import  { Antonio } from 'next/font/google'
import { useState } from 'react';
import ImAWhat from '@/components/ImAWhat';
import Mypic from '@/components/Mypic';



const font = Antonio({
  subsets: ['latin'],
  weight: ['600'],
})

export default function Intro() {
  const [showIm, setShowIm] = useState(false);
  const [showHello, setShowHello] = useState(false);
  const [showOther, setShowOther] = useState(false);

  
  setTimeout(() => {
    setShowHello(true);
  }, 3000); // Show "I am" for 1 second


  setTimeout(() => {
    setShowIm(true);
  }, 4000); // Show "I am" for 1 second

  setTimeout(() => {
    setShowOther(true);
  }, 6500); //  show "other" for 2.5 seconds
  return (
    <div className={`${font.className} bg-black flex text-white h-screen overflow-hidden`}>
      <motion.h1
      key="intro"
      initial={{ opacity: 0, y: 30, x: 0 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -30, x: 0 }}
      transition={{ duration: 0.3 }}
      >
          {showHello && <motion.span
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 50}}
          exit={{ opacity: 0, y: -30, x: 0 }}
          transition={{ duration: 0.3 }}
          className='text-5xl lg:text-9xl md:text-6xl'>Hello</motion.span>}
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
          ><span className='text-4xl'>I'm a</span><ImAWhat/>
          </motion.span>}
      </motion.h1>
      <div className='fixed bottom-0 right-0 w-screen lg:w-200 md:w-screen'>
        <Mypic/>
      </div>
      

    </div>

  )
}
